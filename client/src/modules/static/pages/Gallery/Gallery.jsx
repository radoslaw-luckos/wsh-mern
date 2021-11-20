import React, { useEffect } from 'react';
import Macy from 'macy';
import './Gallery.scss';
import { imagesData } from './ImagesData';

const Gallery = () => {

    const macyOptions = {
        container: '.gallery',
        mobileFirst: true,
        columns: 1,
        breakAt: {
            400: 2,
            700: 3,
            1100: 4,
        },
        margin: {
            x: 10,
            y: 10,
        }
    }

    useEffect(() => {
        new Macy(macyOptions);
    }, [])


    return (
        <section class="gallery">
            {imagesData.map(image => (
                <img key={image.id} src={image.url} alt={image.id} />
            ))}
        </section>
    )
}

export default Gallery
