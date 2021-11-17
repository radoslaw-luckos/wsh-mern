import React from 'react';
import './TeamCard.scss';


const TeamCard = ({ team }) => {
    return (
        <div className='team'>
            <img className='team__img' src={team.img} alt="team logo" />
            <div className='team__info' >
                <h3>{team.name}</h3>
                <h5>{team.ageGroup}</h5>
            </div>
        </div>
    )
}

export default TeamCard
