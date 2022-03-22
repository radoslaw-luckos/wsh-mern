import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Contact.scss';
import { BiMailSend } from 'react-icons/bi';
import { MdContactMail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { RiContactsBookLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import './Contact.scss';

const Contact = () => {

    const position = [51.0983292, 17.0921347];

    const [verified, setVerified] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const sendEmailData = async (data) => {

        if (verified) {
            console.log(data);
            //sends data to the backend to send an email
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json;charset=utf-8',
                },
            };

            //API call 
            try {
                const response = await fetch('http://localhost:5000/api/email', requestOptions);
                if (response.ok) {
                    alert('Email send')
                    reset();
                }

            } catch (error) {
                alert(error)
            }
        }
        else {
            alert('Proszę dokonać weryfikacji ReCAPTCHA');
        }


    }

    const recaptchaVerified = (response) => {
        console.log(response);
        if (response) {
            setVerified(true)
        }
    }

    return (
        <div className="contact">
            <section className="contact-form">
                <header className="contact-form__header">
                    <BiMailSend className='icon' />
                    <h2>Skontaktuj się z nami!</h2>
                </header>
                <p className="contact-form__text">Masz pytanie? Przeszukałeś nasze <Link className='link' to='/dla-rodzicow'>FAQ</Link> w poszukiwaniu odpowiedzi, ale nieznalazłeś tego czego szukałeś? Napisz do nas!</p>
                <form className="contact-form__form" onSubmit={handleSubmit(sendEmailData)}>
                    <input type="text" className="name" placeholder='Imię i nazwisko' {...register("sender", { required: true })} />
                    <input type="text" className="email" placeholder='adres email' {...register("email", { required: true })} />
                    <select type="text" className="topic" {...register("subject", { required: true })}>
                        <option value=''>Wybierz temat</option>
                        <option value="Zuchy">Zuchy</option>
                        <option value="Harcerze">Harcerze</option>
                        <option value="Harcerze Starsi">Harcerze Starsi</option>
                        <option value="Finanse">Finanse</option>
                    </select>
                    <textarea name="" id="" cols="30" rows="10" className="message" placeholder='Tu wpisz swoją wiadomość' {...register("message", { required: true })}></textarea>
                    <ReCAPTCHA
                        sitekey='6LeEoVsdAAAAAEJAwuR1FyS16QeXJZcmcFHWyx8J'
                        onChange={recaptchaVerified}
                        className='recaptcha'
                    />
                    <button type='submit'>Wyślij!</button>
                </form>
            </section>
            <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <h5 style={{ fontSize: 12, marginBottom: 0 }}>HOW "Stanica"</h5>
                        <p style={{ fontSize: 10, marginTop: 0 }}>ul.Kożuchowska 13<br></br>51-631, Wrocław</p>
                    </Popup>
                </Marker>
            </MapContainer>
            <section className="contact-data">
                <header className="contact-data__header">
                    <RiContactsBookLine className='icon' />
                    <h2>Dane kontaktowe</h2>
                </header>
                <div className="contact-data__group">
                    <h3 className="name">Julia Nowak - drużynowa zuchów</h3>
                    <div className="mail">
                        <MdContactMail className='icon' />
                        <p>julia.nowak@zhp.net.pl</p>
                    </div>
                    <div className="phone">
                        <FiPhoneCall className='icon' />
                        <p>123 456 789</p>
                    </div>
                </div>
                <div className="contact-data__group">
                    <h3 className="name">pwd. Kamila Bizacka - drużynowa harcerzy</h3>
                    <div className="mail">
                        <MdContactMail className='icon' />
                        <p>kamila.bizacka@zhp.net.pl</p>
                    </div>
                    <div className="phone">
                        <FiPhoneCall className='icon' />
                        <p>123 456 789</p>
                    </div>
                </div>
                <div className="contact-data__group">
                    <h3 className="name">pwd. Radosław Łuckoś - drużynowy harcerzy starszych</h3>
                    <div className="mail">
                        <MdContactMail className='icon' />
                        <p>radoslaw.luckos@zhp.net.pl</p>
                    </div>
                    <div className="phone">
                        <FiPhoneCall className='icon' />
                        <p>123 456 789</p>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Contact
