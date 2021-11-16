import React from 'react';
import './Stories.scss';
import relIcon from '../../../../assets/img/rel.svg'

const StoriesComponent = ({ stories }) => {

    return (
        <div className='stories'>
            <h2 className='stories__title'>Relacje</h2>
            <div className="stories__tags">
                <p className="tag">#zuchy</p>
                <p className="tag">#harcerze starsi</p>
                <p className="tag">#harcerze</p>
            </div>
            <ul className="stories__list">

                {stories.stories.map(story => (
                    <li className="card" key={story.id}>
                        <h3 className="card__title">{story.title}</h3>
                        <img src={relIcon} alt='' className="card__icon"></img>
                        <p className="card__desc">{story.desc}</p>
                        <p className="
                        card__tag card__tag--h">{story.tag}</p>
                        <button className="
                        card__btn">Przeczytaj więcej</button>
                    </li>
                ))}



            </ul>
        </div>
    )
}

export default StoriesComponent;
