import React from 'react';
import TeamCard from '../../components/TeamCard/TeamCard';
import LeaderCard from '../../components/LeaderCard/LeaderCard';
import zuchyImage from '../../../../assets/img/zuchy.jpg';
import harcerzeImage from '../../../../assets/img/ekisana.png';
import hsImage from '../../../../assets/img/pegaz.jpg';
import { BsInfoSquareFill } from 'react-icons/bs';
import { MdOutlineBubbleChart } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import './About.scss';

const About = () => {

    const teams = [
        { name: '32 WDGZ Dzielne Hefalumpy', img: zuchyImage, ageGroup: 'zuchy 6-8 lat' },
        { name: '32 WDH Ekisana', img: harcerzeImage, ageGroup: 'harcerze 8-12 lat' },
        { name: '32 WDSH Pegaz', img: hsImage, ageGroup: 'harcerze starsi 13-15 lat' }
    ]
    const leaders = [
        { name: 'Maciej', surname: 'Fankanowski', email: 'maciej.fankanowski@zhp.net.pl', phone: '123456789', role: 'komendant szczepu' },
        { name: 'Radosław', surname: 'Łuckoś', email: 'radoslaw.luckos@zhp.net.pl', phone: '123456789', role: 'skarbnik szczepu' },
        { name: 'Jakub', surname: 'Piotrowski', email: 'jakub.piotrowski@zhp.net.pl', phone: '123456789', role: 'bosman szczepu' },
    ]

    return (
        <section className='about'>
            <article className='about__tribe'>
                <div className='about__heading'>
                    <BsInfoSquareFill className='icon' />
                    <h2>O Szczepie</h2>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ipsum non excepturi voluptatum, architecto quas voluptatem aliquid aspernatur delectus, totam provident reiciendis aut atque vitae distinctio praesentium. Quaerat, consequuntur impedit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quod temporibus! Eius dignissimos quam provident, facilis cumque labore accusamus quo, a quae quis, consequatur minus incidunt rem reiciendis! Itaque, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores corporis expedita. Molestiae, ducimus enim! Alias ex officia eum quae inventore aut, dolorum iste nesciunt saepe, error magnam quia maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, delectus commodi sequi vel dolore dicta nesciunt. Similique autem voluptates delectus nulla. Quae officiis quam quos nostrum ducimus illo praesentium necessitatibus.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ipsum non excepturi voluptatum, architecto quas voluptatem aliquid aspernatur delectus, totam provident reiciendis aut atque vitae distinctio praesentium. Quaerat, consequuntur impedit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quod temporibus! Eius dignissimos quam provident, facilis cumque labore accusamus quo, a quae quis, consequatur minus incidunt rem reiciendis! Itaque, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores corporis expedita. Molestiae, ducimus enim! Alias ex officia eum quae inventore aut, dolorum iste nesciunt saepe, error magnam quia maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, delectus commodi sequi vel dolore dicta nesciunt. Similique autem voluptates delectus nulla. Quae officiis quam quos nostrum ducimus illo praesentium necessitatibus.</p>
            </article>
            <article className='about__teams'>
                <h2 className='about__heading'>
                    <MdOutlineBubbleChart className='icon' />
                    <h2>Nasz Drużyny</h2>
                </h2>
                <div className="cards">
                    {teams.map(team => (
                        <TeamCard team={team} />
                    ))}
                </div>
            </article>
            <article className='about__leaders'>
                <h2 className='about__heading'>
                    <AiOutlineTeam className='icon' />
                    <h2>Nasza Kadra</h2>
                </h2>
                <div className="cards">
                    {leaders.map(leader => (
                        <LeaderCard leader={leader} />
                    ))}
                </div>
            </article>
        </section>
    )
}

export default About
