import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
          axios
            .get("http://localhost:5000/featured-rooms")
            .then((response) => setRooms(response.data))
            .catch((error) => {

            });
      }, []);

    return (
        <div className="bg-[#F4F3F0] p-8 md:p-24">
        <h2 className="text-3xl font-extrabold mb-8 flex justify-center items-center mx-auto">Featured Rooms</h2>
        <p className='my-10 w-9/12 mx-auto text-center'>Discover our stunning featured rooms, where luxury meets comfort—offering exceptional amenities, breathtaking views, and unforgettable experiences tailored to make your stay extraordinary.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room._id} className="card border-4 border-base-900 w-full bg-white shadow-lg">
              <figure>
                <img src={room.image} alt={room.name} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-bold">{room.description}</h3>
                <Link to={`/rooms/${room._id}`} className="btn bg-purple-300 mt-4">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
        </div>
    );
};

export default FeaturedRooms;