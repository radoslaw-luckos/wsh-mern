import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import './AddUserForm.scss';

const AddUserForm = ({ addUser }) => {

    const { register, handleSubmit } = useForm();

    return (

        <Box sx={{
            maxHeight: 440,
            width: 850,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

        }} className='add-user-box'>
            <form className='form' noValidate onSubmit={handleSubmit(addUser)}>
                <Typography variant='h5' sx={{ m: 2, color: '#071f4b' }}>Dodaj nowego użytkownika</Typography>

                <TextField required label="Imię" fullWidth type='text' placeholder="Jan" {...register("name", { required: true })} sx={{ m: 2 }} />
                <TextField required label="Nazwisko" fullWidth type='text' placeholder="Kowalski" {...register("lastname", { required: true })} sx={{ m: 2 }} />
                <TextField required label="Adres email" fullWidth type='email' placeholder="jan.kowalski@zhp.net.pl" {...register("email", { required: true })} sx={{ m: 2 }} />
                <TextField required label="Telefon" fullWidth type='tel' placeholder="123456789" {...register("phone", { required: true })} sx={{ m: 2 }} />
                <TextField required label='Funkcje' fullWidth type='text' placeholder='przyboczny' {...register("functions", { required: true })} sx={{ m: 2 }} />

                <Button variant='contained' type='submit' color='success'> Dodaj </Button>
            </form>
        </Box>
    )
}

export default AddUserForm
