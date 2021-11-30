import React from 'react';
import { Typography, TextField, Button, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
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
            <form className='form' onSubmit={handleSubmit(addStory)}>
                <Typography variant='h5' sx={{ m: 2, color: '#071f4b' }}>Dodaj relację</Typography>

                <TextField required label="Tytuł" fullWidth type='text' placeholder="Biwak ..." {...register("title", { required: true })} sx={{ m: 2 }} />
                <FormControl required fullWidth sx={{ m: 2 }}>
                    <InputLabel id="select-label">Metodyka</InputLabel>
                    <Select labelId="select-label" label="Metodyka" type='text' placeholder="Zuchy" {...register("tag", { required: true })}>
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={'HS'}>Harcerze Starsi</MenuItem>
                        <MenuItem value={'H'}>Harcerze</MenuItem>
                        <MenuItem value={'Z'}>Zuchy</MenuItem>
                    </Select>
                </FormControl>
                <TextField required label="Opis wydarzenia" fullWidth type='email' placeholder="Tu wpisz opis wydarzenia (maksymalnie 10 linijek)" multiline rows={10} {...register("desc", { required: true })} sx={{ m: 2 }} />

                <Button variant='contained' type='submit' color='success'> Dodaj </Button>
            </form>
        </Box>
    )
}

export default AddStoryForm
