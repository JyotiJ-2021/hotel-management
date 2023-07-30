import React from 'react';
import NavBar from './Navbar';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router';
import Cards from './Cards';

const Home = () => {
    const [hotels, setHotels] = useState([]);
    const locationDetails = useLocation();
    console.log(locationDetails);

    useEffect(() => {
        axios
            .get('https://hotels-api-4ltr.onrender.com/api/hotels')
            .then((response) => {
                console.log(response.data);
                setHotels(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Container maxWidth="lg" sx={{ marginTop: 10 }}>
                <Grid container spacing={2}>
                    {hotels.map((hotel) => {
                        return (
                            <Grid key={hotel.id} item md={4}>
                                <Cards hotel={hotel} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
