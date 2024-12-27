import React from 'react';
import Banner from '../Components/Banner';
import UserReviews from '../Components/UserReviews';
import FeaturedRooms from '../Components/FeaturedRooms';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <UserReviews></UserReviews>
        </div>
    );
};

export default Home;