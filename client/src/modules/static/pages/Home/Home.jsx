import React, { useState, useEffect } from 'react';
import SliderComponent from '../../components/Slider/Slider';
import StoriesComponent from '../../components/Stories/Stories';
import AdsComponent from '../../components/Ads/Ads';
import moment from 'moment';
import './Home.scss';

const Home = () => {

    const [stories, setStories] = useState([]);
    const [ads, setAds] = useState([]);

    const fetchStories = async () => {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
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
    const fetchAds = async () => {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        };
        const response = await fetch('http://localhost:5000/api/ads', requestOptions);

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            return null;
        }
    }

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
            setStories(storiesList);
        }
        const getAds = async () => {
            const adsDataFromAPI = await fetchAds();
            const adsList = adsDataFromAPI.map(ad => {
                const deadlineDate = moment(ad.deadline).format('DD-MM-YYYY');
                return {
                    id: ad._id,
                    title: ad.title,
                    body: ad.body,
                    deadline: deadlineDate,
                }
            })
            setAds(adsList);
        }
        getAds();
        getStories();
    }, []);

    return (
        <section className='home'>
            <SliderComponent className='home__slider' />
            <div className='home__content'>
                <AdsComponent ads={{ ads }} className='ads' />
                <StoriesComponent stories={{ stories }} className='stories' />
            </div>

        </section>
    )
}

export default Home;