import React from 'react';
import Banner from '../Components/Banner';
import UserReviews from '../Components/UserReviews';
import FeaturedRooms from '../Components/FeaturedRooms';
import Map from '../Components/Map';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Map></Map>
            <FeaturedRooms></FeaturedRooms>
            <UserReviews></UserReviews>
        </div>
    );
};

export default Home;