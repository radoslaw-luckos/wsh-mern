import React from 'react'
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import './Nav.scss';

const Nav = () => {

    const { url } = useRouteMatch();

    return (
        <nav className='menu'>
            <h4 className='menu__title'>Menu</h4>
            <ul className='menu__items-list'>
                <li className='menu__item'>
                    <Link to={`${url}/uzytkownicy`}>
                        <Button colorScheme="teal" size="md">
                            Użytkownicy
                        </Button>
                    </Link>
                </li>
                <li className='menu__item'>
                    <Link to={`${url}/relacje`}>
                        <Button colorScheme="teal" size="md">
                            Relacje
                        </Button>
                    </Link>
                </li>
                <li className='menu__item'>
                    <Link to={`${url}/ogloszenia`}>
                        <Button colorScheme="teal" size="md">
                            Ogłoszenia
                        </Button>
                    </Link>
                </li>
                <li className='menu__item'>
                    <Link to='/admin'>
                        <Button colorScheme="teal" size="md">
                            Twój Profil
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
