import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Contact.scss';

const Contact = () => {

    const position = [51.0983292, 17.0921347];

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    HOW Stanica
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Contact
