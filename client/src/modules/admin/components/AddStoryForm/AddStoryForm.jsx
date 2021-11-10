import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import './AddStoryForm.scss';

const AddStoryForm = ({ addStory }) => {

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
            <form className='form' noValidate onSubmit={handleSubmit(addStory)}>
                <Typography variant='h5' sx={{ m: 2, color: '#071f4b' }}>Dodaj relację</Typography>

                <TextField required label="Tytuł" fullWidth type='text' placeholder="Biwak ..." {...register("title", { required: true })} sx={{ m: 2 }} />
                <TextField required label="Tag" fullWidth type='text' placeholder="Zuchy" {...register("tag", { required: true })} sx={{ m: 2 }} />
                <TextField required label="Opis wydarzenia" fullWidth type='email' placeholder="Tu wpisz opis wydarzenia" multiline rows={10} {...register("desc", { required: true })} sx={{ m: 2 }} />

                <Button variant='contained' type='submit' color='success'> Dodaj </Button>
            </form>
        </Box>
    )
}

export default AddStoryForm
