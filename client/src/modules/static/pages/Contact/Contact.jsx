import React from 'react';
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Contact.scss';
import { BiMailSend } from 'react-icons/bi';
import { MdContactMail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { RiContactsBookLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import './Contact.scss';

const Contact = () => {

    const position = [51.0983292, 17.0921347];

    const { register, handleSubmit, reset } = useForm();

    const sendEmail = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className="contact">
            <section className="contact-form">
                <header className="contact-form__header">
                    <BiMailSend className='icon' />
                    <h2>Skontaktuj się z nami!</h2>
                </header>
                <p className="contact-form__text">Masz pytanie? Przeszukałeś nasze <Link className='link' to='/dla-rodzicow'>FAQ</Link> w poszukiwaniu odpowiedzi, ale nieznalazłeś tego czego szukałeś? Napisz do nas!</p>
                <form className="contact-form__form" onSubmit={handleSubmit(sendEmail)}>
                    <input type="text" className="name" placeholder='Imię i nazwisko' {...register("sender", { required: true })} />
                    <input type="text" className="email" placeholder='adres email' {...register("email", { required: true })} />
                    <select type="text" className="topic" {...register("subject", { required: true })}>
                        <option value=''>Wybierz temat</option>
                        <option value="Zuchy">Zuchy</option>
                        <option value="Harcerze">Harcerze</option>
                        <option value="Harcerze Starsi">Harcerze</option>
                        <option value="Finanse">Finanse</option>
                    </select>
                    <textarea name="" id="" cols="30" rows="10" className="message" placeholder='Tu wpisz swoją wiadomość' {...register("message", { required: true })}></textarea>
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
                        HOW Stanica
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
                    <h3 className="name">pwd. Maciej Fankanowski - drużynowy harcerzy starszych</h3>
                    <div className="mail">
                        <MdContactMail className='icon' />
                        <p>maciej.fankanowski@zhp.net.pl</p>
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
