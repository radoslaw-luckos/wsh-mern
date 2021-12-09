import React from 'react';
import './LeaderCard.scss';
import img from '../../../../assets/img/leader.svg'

const LeaderCard = ({ leader }) => {
    return (
        <div className='leader'>
            <img className='leader__image' src={img} alt="" />
            <div className='leader__info'>
                <h4 className="name">{leader.name} {leader.surname}</h4>
                <h5 className="role">{leader.role}</h5>
                <p className="contact-datapiece">{leader.email}</p>
                <p className="contact-datapiece">{leader.phone}</p>
            </div>
        </div>
    )
}

export default LeaderCard
