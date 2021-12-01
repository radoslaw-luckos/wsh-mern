import React, { useState, useEffect } from 'react';
import './Stories.scss';
import { TableContainer, Table, TableCell, TableHead, TableRow, TableBody, Paper, Button, } from '@mui/material';
import { MdDeleteForever } from 'react-icons/md';
import { makeStyles } from '@mui/styles';
import AddStoryForm from '../../components/AddStoryForm/AddStoryForm';

const useStyles = makeStyles({
    icon: {
        color: 'red',
        fontSize: '1.8rem',
        marginLeft: '.5rem',
        cursor: 'pointer',
    },
});

const Stories = () => {

    const [FormOpened, setFormOpened] = useState(false);
    const classes = useStyles();

    //table columns setup
    const columns = [
        { id: 'id', label: 'Id', maxWidth: 170 },
        { id: 'title', label: 'Tytuł', maxWidth: 170 },
        { id: 'tag', label: 'Tag', maxWidth: 150 },
        { id: 'desc', label: 'Opis', maxWidth: 500 },
    ];

    const [StoriesData, setStoriesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //function fetches data from api and returns it
    const fetchStories = async () => {

        const token = localStorage.getItem('auth_token');

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': token
            },
        };
        const response = await fetch('http://localhost:5000/api/stories', requestOptions);

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            return null;
        }
    }

    const addStory = async (data) => {

        const token = localStorage.getItem('auth_token');
        const newStory = {
            title: data.title,
            desc: data.desc,
            tag: data.tag,
        }

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(newStory),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': token
            },
        };

        //API call to register new user
        const response = await fetch('http://localhost:5000/api/stories', requestOptions);
        if (response.ok) {
            setStoriesData([...StoriesData, data]);
            setFormOpened(!FormOpened);
            setIsLoading(true);
        }

    }

    const deleteStory = async (id) => {

        const token = localStorage.getItem('auth_token');

        const StoryToDelete = StoriesData.find(story => story.id === id);

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'auth-token': token
            },
        };
        const response = await fetch(`http://localhost:5000/api/stories/delete/${StoryToDelete.id}`, requestOptions);

        if (response.ok) {
            const newStoriesData = StoriesData.filter(story => story._id !== id);
            setStoriesData(newStoriesData);
            setIsLoading(true);
        }
    }

    const openAddUserForm = () => {
        // changes the form state 
        setFormOpened(!FormOpened);
    }



    //on first page load gets data and saves it in component state
    useEffect(() => {
        const getStories = async () => {
            const storiesDataFromAPI = await fetchStories();
            const storiesList = storiesDataFromAPI.map(story => {
                return {
                    id: story._id,
                    title: story.title,
                    desc: story.desc,
                    tag: story.tag,
                }
            })
            setStoriesData(storiesList);
        }
        getStories();
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
            <Button color='success' variant='contained' sx={{ marginBottom: '30px' }} onClick={() => openAddUserForm()}>Dodaj Relację</Button>
            {FormOpened ? <AddStoryForm addStory={addStory} /> :
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
                            {StoriesData.map((row) => (
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
                                        <MdDeleteForever className={classes.icon} onClick={() => deleteStory(row.id)} />
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

export default Stories
