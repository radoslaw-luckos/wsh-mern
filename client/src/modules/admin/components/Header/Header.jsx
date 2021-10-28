import React from 'react'
import { FiLogOut } from 'react-icons/fi';
import { IconButton } from '@chakra-ui/react';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <h2 className='header__welcome'>Witaj, Radosław!</h2>
            <IconButton
                variant="outline"
                fontSize="32px"
                icon={<FiLogOut />}
                className='header__logout'
            />
        </header>
    )
}

export default Header
