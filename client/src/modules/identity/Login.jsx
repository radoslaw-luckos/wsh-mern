import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../context/userContext';
import { useHistory } from "react-router-dom";
import { TextField, Button, Typography } from '@mui/material'
import { Box } from '@mui/system';
import './Login.scss';
import jwt_decode from 'jwt-decode';

const Login = () => {

    let history = useHistory();

    const { setUser } = useContext(UserContext);

    const { register, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState(null);

    const onSubmit = async (data) => {

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        };

        //Zapytanie do API - logowanie użytkownika 
        const response = await fetch('http://localhost:5000/api/users/login', requestOptions);

        if (response.ok) {
            const parsedResponse = await response.json(); // w odpowiedzi dostajemy token użytkownika
            //Rozszyfrowanie tokena
            const token = parsedResponse.token;
            //zapisanie tokenu w localStorage
            localStorage.setItem('auth_token', token);
            //Ustawienie zalogowanego użytkownika w Context API
            setUser({
                name: parsedResponse.username,
                id: parsedResponse.userId
            });
            history.push('/admin');
        }
        else {
            const parsedResponse = await response.json();
            setErrorMessage(parsedResponse)
        }

    };

    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            const decodedToken = jwt_decode(token);

            const userFromToken = {
                name: decodedToken.name,
                id: decodedToken.id,
            }
            setUser(userFromToken);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#F3F6F7'
        }} className='login-container'>
            <form onSubmit={handleSubmit(onSubmit)} className='form' noValidate>
                <Typography sx={{ m: 2, color: '#BADCF2' }}>Zaloguj się </Typography>

                <TextField fullWidth required id="outlined-required" label="Adres email" type='email' placeholder="jan.kowalski@zhp.net.pl" {...register("email", { required: true })} sx={{ m: 2 }} />

                <TextField fullWidth required id="outlined-required" label="Hasło" type='password' placeholder="*********" {...register("password", { required: true })} sx={{ m: 2 }} />

                <Button variant='contained' type='submit'> Zaloguj się </Button>
                {errorMessage && <p className='error'>{errorMessage}</p>}
            </form>
        </Box>

    );
}

export default Login;