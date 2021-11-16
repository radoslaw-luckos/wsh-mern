import React from 'react';
import './Stories.scss';
import relIcon from '../../../../assets/img/rel.svg'

const StoriesComponent = () => {
    return (
        <div className='stories'>
            <h2 className='stories__title'>Relacje</h2>
            <div className="stories__tags">
                <p className="tag">#zuchy</p>
                <p className="tag">#harcerze starsi</p>
                <p className="tag">#harcerze</p>
            </div>
            <ul className="stories__list">

                <li className="card">
                    <h3 className="card__title">Biwak w Masywie Śnieżnika</h3>
                    <img src={relIcon} alt='' className="card__icon"></img>
                    <p className="card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet maecenas nulla morbi imperdiet praesent. At sit sed tristique semper egestas dapibus convallis amet.</p>
                    <p className="
                    card__tag card__tag--h">#harcerze starsi</p>
                    <button className="
                    card__btn">Przeczytaj więcej</button>
                </li>

            </ul>
        </div>
    )
}

export default StoriesComponent;
