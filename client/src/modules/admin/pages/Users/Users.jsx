import React, { useState, useEffect } from 'react';
import './Users.scss';
import { MdDelete } from 'react-icons/md';

const Users = () => {

    const [usersData, setUsersData] = useState(null);

    const getUsers = async () => {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        };
        const response = await fetch('http://localhost:5000/api/users', requestOptions);

        if (response.ok) {
            const parsedData = await response.json();
            setUsersData(parsedData);
        } else {
            setUsersData(null);
        }

    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <table className='users-table'>
            <thead className='users-table__head'>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Email</th>
                    <th>Telefon</th>
                    <th>Jednostka</th>
                    <th colSpan={2}>Funkcje</th>
                </tr>
            </thead>
            <tbody className='users-table__body'>
                {usersData ? usersData.map(user => (

                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.unit}</td>
                        <td>{user.functions.map(fun => (
                            <p>{fun}</p>
                        ))}</td>
                        <td>
                            <button>
                                <MdDelete />
                            </button>
                        </td>
                    </tr>

                )) : 'Brak danych o użytkownikach'}
            </tbody>

        </table>
    )
}

export default Users
