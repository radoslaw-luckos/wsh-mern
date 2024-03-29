import React, { useState, useEffect, useContext } from 'react';
import './Users.scss';
import { TableContainer, Table, TableCell, TableHead, TableRow, TableBody, Paper, Button, } from '@mui/material';
import { MdDeleteForever } from 'react-icons/md';
import { makeStyles } from '@mui/styles';
import AddUserForm from '../../components/AddUserForm/AddUserForm';
import { UserContext } from '../../../../context/userContext';
import { url } from '../../../../url'

const useStyles = makeStyles({
    icon: {
        color: 'red',
        fontSize: '1.8rem',
        marginLeft: '.5rem',
        cursor: 'pointer',
    },
});

const Users = () => {

    const [FormOpened, setFormOpened] = useState(false);
    const classes = useStyles();

    //table columns setup
    const columns = [
        { id: 'name', label: 'Imię', maxWidth: 170 },
        { id: 'lastname', label: 'Nazwisko', maxWidth: 170 },
        { id: 'unit', label: 'Drużyna/Gromada', maxWidth: 150 },
        { id: 'email', label: 'Adres email', maxWidth: 250 },
        { id: 'phone', label: 'Telefon', maxWidth: 100 },
        { id: 'functions', label: 'Funkcje', width: 250 },
    ];

    const { user } = useContext(UserContext);
    const [usersData, setUsersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    //function fetches data from api and returns it
    const fetchUsers = async () => {

        const token = localStorage.getItem('auth_token');

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': token
            },
        };
        const response = await fetch(`${url}/api/users`, requestOptions);

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            return null;
        }
    }

    const addUser = async (data) => {

        console.log(data);
        const token = localStorage.getItem('auth_token');

        const newUser = {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            password: 'start1234',
            unit: data.unit,
            functions: [data.functions],
            phone: data.phone
        }

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': token
            },
        };

        //Zapytanie do API - rejestracja użytkownika 
        const response = await fetch(`${url}/api/users/register`, requestOptions);
        if (response.ok) {
            setUsersData([...usersData, data]);
            setFormOpened(!FormOpened);
            setIsLoading(true);
        }

    }

    const deleteUser = async (row) => {

        const token = localStorage.getItem('auth_token');
        //zabezpieczenie przed usunięciem aktywnego użytkownika
        if (row.id === user.id) {
            return;
        }
        const userToDelete = usersData.find(user => user.email === row.email)
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': token
            },
        };
        const response = await fetch(`${url}/api/users/delete/${userToDelete.id}`, requestOptions);

        if (response.ok) {
            console.log(response);
            const newUsersData = usersData.filter(user => user.email !== row.email);
            setUsersData(newUsersData);
            setIsLoading(true);
        }
    }

    const openAddUserForm = () => {
        // zmienia stan komponentu z formularzem dodawania użytkownika na otwarty 
        setFormOpened(!FormOpened);
    }



    //on first page load gets data and saves it in component state
    useEffect(() => {
        const getUsers = async () => {
            const usersDataFromAPI = await fetchUsers();
            const usersList = usersDataFromAPI.map(user => {
                return {
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email,
                    unit: user.unit,
                    phone: user.phone,
                    functions: user.functions.map(fun => {
                        return ` ${fun},`;
                    }),
                    id: user._id
                }
            })
            setUsersData(usersList);
        }
        getUsers();
        setIsLoading(false);
    }, [isLoading]);

    if (isLoading) {
        return (
            <section>
                <p>Ładowanie danych...</p>
            </section>
        )
    }

    return (
        <section>
            <Button color='success' variant='contained' sx={{ marginBottom: '30px' }} onClick={() => openAddUserForm()}>Dodaj Użytkownika</Button>
            {FormOpened ? <AddUserForm addUser={addUser} /> :
                <TableContainer sx={{ maxHeight: 440, maxWidth: 1000, }} component={Paper}>
                    <Table stickyHeader>
                        <TableHead >
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id} variant='head' size='medium'>
                                        {column.label}
                                    </TableCell>
                                ))}
                                <TableCell variant='head' size='medium'></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {usersData.map((row) => (
                                <TableRow key={row.lastname}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                    <TableCell>
                                        <MdDeleteForever className={classes.icon} onClick={() => deleteUser(row)} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </section>
    )
}

export default Users
