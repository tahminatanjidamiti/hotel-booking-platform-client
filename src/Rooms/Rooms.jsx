import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [view, setView] = useState("card");
    const [minPrice, setMinPrice] = useState(""); // Track the minimum price
    const [maxPrice, setMaxPrice] = useState(""); // Track the maximum price

    useEffect(() => {
        // Make the API call with optional price filters
        const fetchRooms = async () => {
            try {
                const response = await axios.get("http://localhost:5000/rooms", {
                    params: { minPrice, maxPrice }
                });

                const roomsData = response.data;
                // Fetch reviews count for each room
                const roomsWithReviewCount = roomsData.map(async (room) => {
                    const reviewResponse = await axios.get(
                        `http://localhost:5000/rooms/${room._id}/reviews`
                    );
                    return {
                        ...room,
                        reviewsCount: reviewResponse.data.length,
                    };
                });

                Promise.all(roomsWithReviewCount).then((roomsWithCount) => {
                    setRooms(roomsWithCount);
                });
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        };

        fetchRooms();
    }, [minPrice, maxPrice]); // Trigger fetch when minPrice or maxPrice changes

    const toggleView = () => {
        setView(view === "card" ? "table" : "card");
    };

    return (
        <div className="container mx-auto p-4">
            {/* Price filter UI */}
            <div className="flex justify-between mb-4">
                <div className="flex space-x-4">
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="input input-bordered input-info"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="input input-bordered input-info"
                    />
                </div>
            </div>

            <div className="flex justify-end mb-4 space-x-4">
                <button
                    onClick={() => setView("card")}
                    className={`btn btn-ghost ${view === "card" ? "text-primary" : "text-gray-500"}`}
                >
                    <img
                        src="https://img.icons8.com/?size=40&id=49715&format=png"
                        alt="Card view icon!"
                    />
                </button>
                <button
                    onClick={() => setView("table")}
                    className={`btn btn-ghost ${view === "table" ? "text-primary" : "text-gray-500"}`}
                >
                    <img
                        src="https://img.icons8.com/?size=36&id=6FQHRBVAaLsg&format=png"
                        alt="Table view icon!"
                    />
                </button>
            </div>

            {view === "card" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {rooms.map((room) => (
                        <Link to={`/rooms/${room._id}`} key={room._id}>
                            <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer">
                                <figure>
                                    <img
                                        className="h-48 w-full object-cover"
                                        src={room.image}
                                        alt={room.name}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{room.name}</h2>
                                    <p className="text-sm text-gray-600">{room.location}</p>
                                    <p className="text-primary font-semibold">
                                        ${room.price} per night
                                    </p>
                                    <p className="text-yellow-500">{room.rating} ⭐</p>
                                    <p className="text-gray-600">
                                        {room.reviewsCount}{" "}
                                        {room.reviewsCount === 1 ? "Review" : "Reviews"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Total Reviews</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room) => (
                            <tr
                                key={room._id}
                                onClick={() => (window.location.href = `/rooms/${room._id}`)}
                                className="cursor-pointer"
                            >
                                <td>
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="w-24"
                                    />
                                </td>
                                <td>{room.name}</td>
                                <td>{room.location}</td>
                                <td>${room.price}</td>
                                <td>{room.rating} ⭐</td>
                                <td>{room.reviewsCount} Reviews</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Rooms;