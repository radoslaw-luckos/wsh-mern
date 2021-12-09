import React, { useState, useEffect } from 'react';
import './Ads.scss';
import { TableContainer, Table, TableCell, TableHead, TableRow, TableBody, Paper, Button, } from '@mui/material';
import { MdDeleteForever } from 'react-icons/md';
import { makeStyles } from '@mui/styles';
import AddAdForm from '../../components/AddAdForm/AddAdForm';
import moment from 'moment';
import { url } from '../../../../url';

const useStyles = makeStyles({
    icon: {
        color: 'red',
        fontSize: '1.8rem',
        marginLeft: '.5rem',
        cursor: 'pointer',
    },
});

const Ads = () => {

    const [FormOpened, setFormOpened] = useState(false);
    const classes = useStyles();

    //table columns setup
    const columns = [
        { id: 'id', label: 'Id', maxWidth: 170 },
        { id: 'title', label: 'Tytuł', maxWidth: 170 },
        { id: 'deadline', label: 'Termin', maxWidth: 150 },
        { id: 'body', label: 'Opis', maxWidth: 500 },
    ];

    const [AdsData, setAdsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    //function fetches data from api and returns it
    const fetchAds = async () => {
        const token = localStorage.getItem('auth_token');

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': token
            },
        };
        const response = await fetch(`${url}/api/ads`, requestOptions);

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            return null;
        }
    }

    const addAd = async (data) => {

        const token = localStorage.getItem('auth_token');

        const newAd = {
            title: data.title,
            deadline: data.deadline,
            body: data.body,
        }

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(newAd),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': token
            },
        };

        //API call - adding new ad
        const response = await fetch(`${url}/api/ads`, requestOptions);
        if (response.ok) {
            setAdsData([...AdsData, data]);
            setIsLoading(true);
            setFormOpened(!FormOpened);
        }

    }

    const deleteAd = async (id) => {

        const token = localStorage.getItem('auth_token');

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': token
            },
        };
        const response = await fetch(`${url}/api/ads/delete/${id}`, requestOptions);

        if (response.ok) {
            console.log(response);
            const newAdsData = AdsData.filter(ad => ad._id !== id);
            setAdsData(newAdsData);
            setIsLoading(true);
        }
    }

    const openAddAdForm = () => {
        // zmienia stan komponentu z formularzem dodawania użytkownika na otwarty 
        setFormOpened(!FormOpened);
    }



    //on first page load gets data and saves it in component state
    useEffect(() => {
        const getAds = async () => {
            const AdsDataFromAPI = await fetchAds();
            const AdsList = AdsDataFromAPI.map(ad => {
                const deadlineDate = moment(ad.deadline).format('DD-MM-YYYY');
                return {
                    id: ad._id,
                    title: ad.title,
                    body: ad.body,
                    deadline: deadlineDate,
                }
            })
            setAdsData(AdsList);
        }
        getAds();
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
            <Button color='success' variant='contained' sx={{ marginBottom: '30px' }} onClick={() => openAddAdForm()}>Dodaj Ogłoszenie</Button>
            {FormOpened ? <AddAdForm addAd={addAd} /> :
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
                            {AdsData.map((row) => (
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
                                        <MdDeleteForever className={classes.icon} onClick={() => deleteAd(row.id)} />
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

export default Ads
