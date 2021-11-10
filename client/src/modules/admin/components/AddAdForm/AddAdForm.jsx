import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import './AddAdForm.scss';

const AddStoryForm = ({ addAd }) => {

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
            <form className='form' noValidate onSubmit={handleSubmit(addAd)}>
                <Typography variant='h5' sx={{ m: 2, color: '#071f4b' }}>Dodaj ogłoszenie</Typography>

                <TextField required label="Tytuł" fullWidth type='text' placeholder="Biwak ..." {...register("title", { required: true })} sx={{ m: 2 }} />
                <TextField required label="Termin" fullWidth type='date' {...register("deadline", { required: true })} sx={{ m: 2 }} />
                <TextField required label="Treść ogłoszenia" fullWidth type='text' placeholder="Tu wpisz treść ogłoszenia" multiline rows={10} {...register("body", { required: true })} sx={{ m: 2 }} />

                <Button variant='contained' type='submit' color='success'> Dodaj </Button>
            </form>
        </Box>
    )
}

export default AddStoryForm
