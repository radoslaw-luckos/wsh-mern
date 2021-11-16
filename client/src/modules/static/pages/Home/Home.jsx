import React from 'react';
import SliderComponent from '../../components/Slider/Slider';
import StoriesComponent from '../../components/Stories/Stories';
import AdsComponent from '../../components/Ads/Ads';

const Home = () => {
    return (
        <section>
            <SliderComponent />
            <StoriesComponent />
            <AdsComponent />
        </section>
    )
}

export default Home;