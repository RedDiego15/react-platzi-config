import { useState, useEffect } from 'react';
import axios from 'axios';

const APIKEY_GOOGLE = process.env.APIKEY_GOOGLE;
const useGoogleAddress = (address) => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${APIKEY_GOOGLE}`;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios(API);
                setMap(response.data.results[0].geometry.location);
            } catch (error) {
                console.log('error get products');
            }
        }
        fetchData();
    }, []);

    return { map };
};
export { useGoogleAddress };
