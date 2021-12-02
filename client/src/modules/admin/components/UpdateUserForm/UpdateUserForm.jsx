import React, { useState } from 'react';
import { Typography, TextField, Button, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import './UpdateUserForm.scss';




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
        }
    });

    const openChangePassword = () => {
        setChangePasswordField(!changePasswordField);
    }

    return (
        <form onSubmit={handleSubmit(updateUser)} className='update-user-form' >
            <Typography variant='h5' sx={{ m: 2, color: '#edf1f8' }}>Twój Profil</Typography>

            <Controller
                name="name"
                control={control}
                rules={{ required: false }}
                render={({ field }) => <TextField disabled fullWidth {...field} sx={{ m: 2 }} />}
            />
            <Controller
                name="lastname"
                control={control}
                rules={{ required: false, }}
                render={({ field }) => <TextField disabled fullWidth {...field} sx={{ m: 2 }} />}
            />
            <Controller
                name="email"
                control={control}
                rules={{ required: false, }}
                render={({ field }) => <TextField fullWidth {...field} sx={{ m: 2 }} />}
            />
            <Controller
                name="phone"
                control={control}
                rules={{ required: false, }}
                render={({ field }) => <TextField fullWidth {...field} sx={{ m: 2 }} />}
            />
            <Controller
                name="unit"
                control={control}
                rules={{ required: false, }}
                render={({ field }) => <Select fullWidth {...field} sx={{ m: 2 }}>
                    <MenuItem value={'HS'}>Harcerze Starsi</MenuItem>
                    <MenuItem value={'H'}>Harcerze</MenuItem>
                    <MenuItem value={'Z'}>Zuchy</MenuItem>
                </Select>}
            />
            <Controller
                name="functions"
                control={control}
                rules={{ required: false, }}
                render={({ field }) => <TextField fullWidth {...field} sx={{ m: 2 }} />}
            />

            {changePasswordField && <Controller
                name="password"
                control={control}
                rules={{ required: false, }}
                render={({ field }) => <TextField fullWidth placeholder="Wprowadź nowe hasło" {...field} sx={{ m: 2 }} />}
            />}
            <Button variant='contained' color='error' sx={{ m: 2 }} onClick={() => openChangePassword()}>Zmień hasło</Button>

            <Button variant='contained' type='submit' color='success'> Uaktualnij dane</Button>
        </form>

    )
}

export default UpdateUserForm
