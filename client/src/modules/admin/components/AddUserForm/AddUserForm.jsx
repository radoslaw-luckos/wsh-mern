import React from 'react';
import { Typography, TextField, Button, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
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
            <form className='form' onSubmit={handleSubmit(addUser)}>
                <Typography variant='h5' sx={{ m: 2, mt: 4, color: '#071f4b' }}>Dodaj nowego użytkownika</Typography>

                <TextField required label="Imię" fullWidth type='text' placeholder="Jan" {...register("name", { required: true })} sx={{ m: 2 }} />
                <TextField required label="Nazwisko" fullWidth type='text' placeholder="Kowalski" {...register("lastname", { required: true })} sx={{ m: 2 }} />
                <TextField label="Adres email" fullWidth type='email' placeholder="jan.kowalski@zhp.net.pl" {...register("email", { required: true })} sx={{ m: 2 }} />
                <TextField required label="Telefon" fullWidth type='tel' placeholder="123456789" {...register("phone", { required: true })} sx={{ m: 2 }} />
                <FormControl required fullWidth sx={{ m: 2 }}>
                    <InputLabel id="select-label">Jednostka</InputLabel>
                    <Select labelId="select-label" label="Jednostka" type='text'  {...register("unit", { required: true })}>
                        <MenuItem value={'32 WDSH Pegaz'}>Harcerze Starsi</MenuItem>
                        <MenuItem value={'32 WDH Ekisana'}>Harcerze</MenuItem>
                        <MenuItem value={'32 WDG Dzielne Hefalumpy'}>Zuchy</MenuItem>
                    </Select>
                </FormControl>
                <TextField required label='Funkcje' fullWidth type='text' placeholder='Proszę wymienić funkcje po przecinku' {...register("functions", { required: true })} sx={{ m: 2 }} />

                <Button variant='contained' type='submit' color='success'> Dodaj </Button>
            </form>
        </Box>
    )
}

export default AddUserForm
