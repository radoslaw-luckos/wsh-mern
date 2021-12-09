import React, { useState, useEffect } from 'react';
import './Stories.scss';
import relIcon from '../../../../assets/img/rel.svg'
import { MdOutlineHistoryEdu } from 'react-icons/md';

const StoriesComponent = ({ stories }) => {

    const [Filters, setFilters] = useState({
        Z: true,
        H: true,
        HS: true
    })

    useEffect(() => {
        console.log(Filters);
    }, [Filters])



    return (
        <div className='stories'>
            <div className='stories__title'>
                <MdOutlineHistoryEdu className='icon' />
                <h2>Relacje</h2>
            </div>
            <div className="stories__tags">
                <p className={Filters.Z ? 'tag active' : 'tag'} onClick={() => setFilters(prevState => (
                    {
                        ...prevState,
                        Z: !prevState.Z
                    }
                ))}>#zuchy</p>
                <p className={Filters.HS ? 'tag active' : 'tag'} onClick={() => setFilters(prevState => (
                    {
                        ...prevState,
                        HS: !prevState.HS
                    }
                ))}>#harcerze starsi</p>
                <p className={Filters.H ? 'tag active' : 'tag'} onClick={() => setFilters(prevState => (
                    {
                        ...prevState,
                        H: !prevState.H
                    }
                ))}>#harcerze</p>
            </div>
            <ul className="stories__list">
                {stories.stories.map(story => (
                    Filters[`${story.tag}`] ? <li className="card" key={story.id}>
                        <h3 className="card__title">{story.title}</h3>
                        <p className="card__desc">{story.desc}</p>
                        <img src={relIcon} alt='' className="card__icon"></img>
                        {story.tag === 'HS' ? <p className="card__tag card__tag--hs">#harcerzestarsi</p> : (story.tag === 'H' ? <p className="card__tag card__tag--h">#harcerze</p> : <p className="card__tag card__tag--z">#zuchy</p>)}
                        <button className="card__btn"><a href='https://www.facebook.com/' target='_blank'>Więcej</a></button>
                    </li> : ''
                ))}
            </ul>
        </div>
    )
}

export default StoriesComponent;
