import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import UpdateUserForm from '../../components/UpdateUserForm/UpdateUserForm';

const Profile = () => {


    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const fetchUserData = async () => {

        const token = localStorage.getItem('auth_token');

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': token
            },
        };

        const decodedToken = jwt_decode(token);

        const userId = decodedToken._id;

        const response = await fetch(`http://localhost:5000/api/users/${userId}`, requestOptions);

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            return null;
        }
    }

    const updateUser = async (data) => {
        console.log(data);

        const token = localStorage.getItem('auth_token');

        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': token
            },
            body: JSON.stringify(data)
        };
        const decodedToken = jwt_decode(token);
        const userId = decodedToken._id;


        const response = await fetch(`http://localhost:5000/api/users/update/${userId}`, requestOptions);
        if (response.ok) {
            console.log(response);
        } else {
            alert(response.statusText);
        }

    }

    useEffect(() => {
        const getUserData = async () => {
            const responsedUser = await fetchUserData();
            setUserData(responsedUser);
            setIsLoading(false);
        };
        getUserData();
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Ładowanie danych...</p>
            </section>
        )
    }

    return (
        <>
            {userData && <UpdateUserForm userData={userData} updateUser={updateUser} />}
        </>
    )
}

export default Profile;
