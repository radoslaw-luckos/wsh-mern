import React from 'react';
import './Ads.scss';
import { GrAnnounce } from 'react-icons/gr';

const AdsComponent = ({ ads }) => {

    return (
        <div className='ads'>
            <div className='ads__title'>
                <GrAnnounce className='icon' />
                <h2>Ogłoszenia</h2>
            </div>
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
