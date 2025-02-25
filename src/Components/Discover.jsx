import React from 'react';
import { Link } from 'react-router-dom';

const Discover = () => {
    return (
        <div className='w-11/12 mx-auto my-10 relative p-4'>
            <div className="absolute inset-0 animate-neon-glow -z-10"></div>
            <Link to="/gallery">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className='items-center mt-28'> <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b056a1] from-10% via-[#ffae66] via-35% to-purple-500 to-80%">Go beyond your imagination!</h1>
                        <p className="py-6 font-bold">
                            Uncover the ideal experience tailored just for you with us!
                        </p>
                        <button className='h-[52px] btn bg-gradient-to-r from-purple-500 from-10% via-amber-500 via-30% to-emerald-500 to-90% text-white '>Explore <img src="https://img.icons8.com/?size=48&id=cg9cjgYky4Y8&format=gif" alt="Arrow icon!" /> </button></div>
                    <div className='h-[500px]'><img className='h-full w-full object-cover rounded-lg shadow-2xl' src="https://i.ibb.co.com/HTv7yML/swimming-pool.jpg" alt="Picture hotel" /></div>
                    <div className='h-[500px]'><img className='h-full w-full object-cover rounded-lg shadow-2xl' src="https://i.ibb.co.com/sgYVw12/people-2593251-1280.jpg" alt="Picture hotel" /></div>
                    <div className='h-[500px]'><img className='h-full w-full object-cover rounded-lg shadow-2xl' src="https://i.ibb.co.com/nbjMWQf/beautiful-outdoor-swimming-pool-hotel-resort-with-chair-deck-leisure-vacation.jpg" alt="Picture hotel" /></div>
                </div>
            </Link>
        </div>
    );
};

export default Discover;