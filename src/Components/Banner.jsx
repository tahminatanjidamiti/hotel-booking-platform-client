import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto py-10'>
            <div className="carousel w-full rounded-3xl">
                <div id="slide1" className="carousel-item relative w-full min-h-5">
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/LrJ4wTd/digital-lavender-interior-design-4.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Welcome!</h1>
                                <p className="mb-5 w-8/12 md:w-full mx-auto">
                                    Reserve your stay with us today and immerse yourself in unforgettable hostel experiences that you will cherish for a lifetime!
                                </p>
                                <Link to="/rooms"><button className="btn bg-purple-400 text-purple-950">Get Started</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle bg-purple-400 text-black">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-purple-400 text-black">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/d2kSydL/digital-lavender-style-interior-design.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Lets Explore!</h1>
                                <p className="mb-5 w-8/12 md:w-full mx-auto">
                                We have the perfect accommodation for you!
                                </p>
                                <Link to="/rooms"><button className="btn bg-purple-400 text-purple-950">Get Started</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle bg-purple-400 text-black">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-purple-400 text-black">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/0j8YG2J/interior-decor-furniture-inspired-by-fruits-vegetables.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Dive into?</h1>
                                <p className="mb-5 w-8/12 md:w-full mx-auto">
                                Why not take the plunge and discover what awaits you? You could find something truly incredible!
                                </p>
                                <Link to="/rooms"><button className="btn bg-purple-400 text-purple-950">Get Started</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle bg-purple-400 text-black">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-purple-400 text-black">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/D73YQQR/view-futuristic-bedroom-with-furniture.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Book Now!</h1>
                                <p className="mb-5 w-8/12 md:w-full mx-auto">
                                Discover and secure your ideal match today!
                                </p>
                                <Link to="/rooms"><button className="btn bg-purple-400 text-purple-950">Get Started</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle bg-purple-400 text-black">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-purple-400 text-black">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;