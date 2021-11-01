import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../context/userContext';
import { useHistory } from "react-router-dom";
import { TextField, Button, Typography } from '@mui/material'
import { Box } from '@mui/system';
import './Login.scss';

const Login = () => {

    let history = useHistory();

    const { setUser } = useContext(UserContext);

    const { register, handleSubmit } = useForm();

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
            // ??
            //Ustawienie zalogowanego użytkownika w Context API
            setUser({
                name: parsedResponse.username,
                token: parsedResponse.token,
                _id: parsedResponse.userId
            });
            history.push('/admin')
        }
        else {

        }

    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
        }} className='container'>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <Typography sx={{ m: 2 }}>Zaloguj się </Typography>

                <TextField required id="outlined-required" label="Adres email" type='email' defaultValue="jan.kowalski@zhp.net.pl" {...register("email", { required: true })} sx={{ m: 2 }} />

                <TextField required id="outlined-required" label="Hasło" type='password' defaultValue="*********" {...register("password", { required: true })} sx={{ m: 2 }} />

                <Button variant='contained' type='submit'> Zaloguj się </Button>
            </form>
        </Box>

    );
}

export default Login;