import React, { useContext } from 'react'
import { FiLogOut } from 'react-icons/fi';
import { IconButton } from '@chakra-ui/react';
import './Header.scss';
import { UserContext } from '../../../../context/userContext';
import { useHistory } from 'react-router';

const Header = () => {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    const logOut = () => {
        setUser(null);
        history.push('/login');
    }

    return (
        <header className='header'>
            <h2 className='header__welcome'>Witaj, {user.name}!</h2>
            <IconButton
                variant="outline"
                fontSize="32px"
                icon={<FiLogOut />}
                className='header__logout'
                onClick={() => logOut()}
            />
        </header>
    )
}

export default Header
