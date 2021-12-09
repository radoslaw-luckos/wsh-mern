import React, { useState } from 'react';
import { Typography, TextField, Button, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import './UpdateUserForm.scss';
import { Box } from '@mui/system';




const UpdateUserForm = ({ userData, updateUser }) => {

    const [changePasswordField, setChangePasswordField] = useState(false);

    const { handleSubmit, control } = useForm({
        defaultValues: {
            name: userData.name,
            lastname: userData.lastname,
            email: userData.email,
            unit: userData.unit,
            phone: userData.phone,
            functions: userData.functions,
            password: ''
        }
    });

    const openChangePassword = () => {
        setChangePasswordField(!changePasswordField);
    }

    return (
        <Box sx={{ m: 2, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <form onSubmit={handleSubmit(updateUser)} className='update-user-form'>
                <Typography variant='h5' sx={{ mt: 2, color: 'darkblue' }}>Twój Profil</Typography>

                <Controller
                    name="name"
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => <TextField disabled {...field} sx={{ mt: 2, mr: 2 }} />}
                />
                <Controller
                    name="lastname"
                    control={control}
                    rules={{ required: false, }}
                    render={({ field }) => <TextField disabled  {...field} sx={{ mt: 2 }} />}
                />
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: false, }}
                    render={({ field }) => <TextField fullWidth {...field} sx={{ mt: 2 }} />}
                />
                <Controller
                    name="phone"
                    control={control}
                    rules={{ required: false, }}
                    render={({ field }) => <TextField fullWidth {...field} sx={{ mt: 2 }} />}
                />
                <Controller
                    name="unit"
                    control={control}
                    rules={{ required: false, }}
                    render={({ field }) => <Select fullWidth {...field} sx={{ mt: 2 }}>
                        <MenuItem value={'HS'}>Harcerze Starsi</MenuItem>
                        <MenuItem value={'H'}>Harcerze</MenuItem>
                        <MenuItem value={'Z'}>Zuchy</MenuItem>
                    </Select>}
                />
                <Controller
                    name="functions"
                    control={control}
                    rules={{ required: false, }}
                    render={({ field }) => <TextField fullWidth {...field} sx={{ mt: 2 }} />}
                />

                {changePasswordField && <Controller
                    name="password"
                    control={control}
                    rules={{ required: false, }}
                    render={({ field }) => <TextField fullWidth placeholder="Wprowadź nowe hasło" type='password' {...field} sx={{ mt: 2 }} />}
                />}
                <Button variant='contained' color='error' sx={{ mt: 2, mr: 2 }} onClick={() => openChangePassword()}>Zmień hasło</Button>

                <Button variant='contained' type='submit' sx={{ mt: 2 }} color='success'> Uaktualnij dane</Button>
            </form>
        </Box>



    )
}

export default UpdateUserForm
