import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Button, FormControl, Input, FormLabel, Flex, Heading } from "@chakra-ui/react";
import { UserContext } from '../../context/userContext';
import { useHistory } from "react-router-dom";


const Login = () => {

    let history = useHistory();

    const { setUser } = useContext(UserContext);

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        };

        //Zapytanie do API - logowanie użytkownika 
        const response = await fetch('http://localhost:5000/api/users/login', requestOptions);

        if (response.ok) {
            const parsedResponse = await response.json(); // w odpowiedzi dostajemy token użytkownika
            //Rozszyfrowanie tokena
            // ??
            //Ustawienie zalogowanego użytkownika w Context API
            setUser({
                name: parsedResponse.username,
                token: parsedResponse.token,
                _id: parsedResponse.userId
            });
            history.push('/admin')
        }
        else {

        }

    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <Flex direction='column' background='blue.600' p={12} rounded={6}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Heading mb={6}>Zaloguj się</Heading>

                <FormControl id="email" colorScheme='blue' isRequired mb={4}>
                    <FormLabel htmlFor="email" >Adres email</FormLabel>
                    <Input variant="filled" placeholder='jan.kowalski@zhp.net.pl ' type="email"  {...register("email", { required: true })} />
                </FormControl>

                <FormControl id="password" colorScheme='blue' isRequired mb={4}>
                    <FormLabel htmlFor="password">Hasło</FormLabel>
                    <Input variant="filled" placeholder='*******' type="password"  {...register("password", { required: true })} />
                </FormControl>

                <Button colorScheme='blue' type='submit'> Zaloguj się </Button>
            </form>
        </Flex>

    );
}

export default Login;