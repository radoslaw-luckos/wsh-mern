import React from 'react';
import './Ads.scss'

const AdsComponent = () => {
    return (
        <div className='ads'>
            <h2 className='ads__title'>Ogłoszenia</h2>
            <ul className="ads__list">
                <li className="card">
                    <h3 className="card__title">Składki za II kwartał</h3>
                    <p className="card__deadline">Termin: 21.01.21</p>
                    <p className="card__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet maecenas nulla morbi imperdiet praesent. At sit sed tristique semper egestas dapibus convallis amet.</p>
                </li>
            </ul>
        </div>
    )
}

export default AdsComponent;
