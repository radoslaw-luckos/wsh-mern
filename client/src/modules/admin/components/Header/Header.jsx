import React, { useContext } from 'react'
import { FiLogOut } from 'react-icons/fi';
import './Header.scss';
import { UserContext } from '../../../../context/userContext';
import { useHistory } from 'react-router';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    icon: {
        color: 'white',
        fontSize: '2rem',
        marginLeft: '.5rem'
    },
    btn: {
        color: 'white',
    }
});

const Header = () => {

    const classes = useStyles();

    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    const logOut = () => {
        setUser(null);
        localStorage.removeItem('auth_token')
        history.push('/login');
    }

    return (
        <header className='header'>
            <h2 className='header__welcome'>Witaj, {user.name}!</h2>
            <Button onClick={() => logOut()} className={classes.btn}>
                Wyloguj <FiLogOut className={classes.icon} />
            </Button>
        </header>
    )
}

export default Header
