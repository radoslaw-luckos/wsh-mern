import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {

    return (
        <nav >
            <ul>
                <li>
                    <Link to={`/kontakt`}>
                        Kontakt
                    </Link>
                </li>
                <li>
                    <Link to={`/o-nas`}>
                        O szczepie
                    </Link>
                </li>
                <li>
                    <Link to={`/dla-rodzicow`}>
                        Dla rodziców
                    </Link>
                </li>
                <li>
                    <Link to='/galeria'>
                        Galeria
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Aktualności
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
