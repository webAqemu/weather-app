import React from 'react';
import { useState, useEffect } from 'react';

export const usePosition = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    const onSuccess = ({ coords }) => {
        const { latitude, longitude } = coords;
        console.log('lat:' + latitude);
        console.log('lon:' + longitude);

        setPosition({ lat: latitude, lon: longitude });
    };

    const onError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            setError('Geolocation isn`t supported');
            return;
        }
        const coords = geo.getCurrentPosition(onSuccess, onError);
    }, []);
    return { ...position, error };
};
