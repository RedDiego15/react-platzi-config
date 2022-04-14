import React, { useContext } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useGoogleAddress } from '../hooks/useGoogleAddress';

const mapStyles = {
    height: '50vh',
    width: '100%',
};
const APIKEY_GOOGLE = process.env.APIKEY_GOOGLE;

const Map = ({ direction }) => {
    const address = useGoogleAddress(direction);

    const defaultCenter = {
        lat: address.map.lat,
        lng: address.map.lng,
    };
    return (
        <LoadScript googleMapsApiKey={APIKEY_GOOGLE}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={16}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
};

export { Map };
