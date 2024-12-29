import React from 'react';
import Banner from '../Components/Banner';
import UserReviews from '../Components/UserReviews';
import FeaturedRooms from '../Components/FeaturedRooms';
import Map from '../Components/Map';
import Discover from '../Components/Discover';
import HotDetails from '../Components/HotDetails';
import AboutUs from '../Components/AboutUs';
import ContactUs from '../Components/ContactUs';
import { Helmet } from 'react-helmet-async';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>RestAura | Home</title>
            </Helmet>
            <Banner></Banner>
            <Map></Map>
            <FeaturedRooms></FeaturedRooms>
            <UserReviews></UserReviews>
            <Discover></Discover>
            <HotDetails></HotDetails>
            <ContactUs></ContactUs>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;