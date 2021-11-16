import React from 'react';
import './Ads.scss'

const AdsComponent = ({ ads }) => {

    console.log(ads);

    return (
        <div className='ads'>
            <h2 className='ads__title'>Ogłoszenia</h2>
            <ul className="ads__list">
                {ads.ads.map(ad => (
                    <li className="card" key={ad.id}>
                        <h3 className="card__title">{ad.title}</h3>
                        <p className="card__deadline">{ad.deadline}</p>
                        <p className="card__body">{ad.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AdsComponent;
