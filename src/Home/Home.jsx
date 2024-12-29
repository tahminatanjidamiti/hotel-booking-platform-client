import React from 'react';
import Banner from '../Components/Banner';
import UserReviews from '../Components/UserReviews';
import FeaturedRooms from '../Components/FeaturedRooms';
import Map from '../Components/Map';
import Discover from '../Components/Discover';
import HotDetails from '../Components/HotDetails';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Map></Map>
            <FeaturedRooms></FeaturedRooms>
            <UserReviews></UserReviews>
            <Discover></Discover>
            <HotDetails></HotDetails>
        </div>
    );
};

export default Home;