import React from 'react'
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import './Nav.scss';
import { Button } from '@mui/material';

const Nav = () => {

    const { url } = useRouteMatch();

    return (
        <nav className='menu'>
            <h4 className='menu__title'>Menu</h4>
            <ul className='menu__items-list'>
                <li className='menu__item'>
                    <Link to={`${url}/uzytkownicy`}>
                        <Button variant='contained'>
                            Użytkownicy
                        </Button>
                    </Link>
                </li>
                <li className='menu__item'>
                    <Link to={`${url}/relacje`}>
                        <Button variant='contained'>
                            Relacje
                        </Button>
                    </Link>
                </li>
                <li className='menu__item'>
                    <Link to={`${url}/ogloszenia`}>
                        <Button variant='contained'>
                            Ogłoszenia
                        </Button>
                    </Link>
                </li>
                <li className='menu__item'>
                    <Link to='/admin'>
                        <Button variant='contained'>
                            Twój Profil
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
