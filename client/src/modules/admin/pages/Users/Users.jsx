import React, { useState, useEffect, useContext } from 'react';
import './Users.scss';
import { TableContainer, Table, TableCell, TableHead, TableRow, TableBody, Paper, Button, } from '@mui/material';
import { MdDeleteForever } from 'react-icons/md';
import { makeStyles } from '@mui/styles';
import AddUserForm from '../../components/AddUserForm/AddUserForm';
import { UserContext } from '../../../../context/userContext';

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

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': user.token
            },
        };
        const response = await fetch('http://localhost:5000/api/users', requestOptions);

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            return null;
        }
    }

    const addUser = async (data) => {

        const newUser = {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            password: 'start1234',
            unit: '32 WDSH Pegaz',
            functions: [data.functions],
            phone: data.phone
        }

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': user.token
            },
        };

        //Zapytanie do API - rejestracja użytkownika 
        const response = await fetch('http://localhost:5000/api/users/register', requestOptions);
        if (response.ok) {
            setUsersData([...usersData, data]);
            setFormOpened(!FormOpened);
        }

    }

    const deleteUser = async (email) => {
        //zabezpieczenie przed usunięciem aktywnego użytkownika
        if (email === user.email) {
            return;
        }
        const userToDelete = usersData.find(user => user.email === email)
        console.log(userToDelete.id);
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': user.token
            },
        };
        const response = await fetch(`http://localhost:5000/api/users/delete/${userToDelete.id}`, requestOptions);

        if (response.ok) {
            console.log(response);
            const newUsersData = usersData.filter(user => user.email !== email);
            setUsersData(newUsersData);
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
    }, []);

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
                                        <MdDeleteForever className={classes.icon} onClick={() => deleteUser(row.email)} />
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
