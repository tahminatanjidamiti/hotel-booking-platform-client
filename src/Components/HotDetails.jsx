import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HotDetails = () => {
    const [activeModal, setActiveModal] = useState(null);

    const handleModalOpen = (index) => {
        setActiveModal(index);
    };

    const handleModalClose = () => {
        setActiveModal(null);
    };


    const data = [
        {
            discount: "50%",
            description: "Discount on Summer Vacation!",
            image: "https://i.ibb.co.com/qpYLCcM/swim-8110683-1280.jpg",
            modalImage: "https://i.ibb.co.com/9V4xnDP/drink-4288602-1280.jpg",
            modalText: "Summer Offer!",
        },
        {
            discount: "30%",
            description: "Discount on Winter Vacation!",
            image: "https://i.ibb.co.com/gTp5KMx/skiing-6035709-1280.jpg",
            modalImage: "https://i.ibb.co.com/hyyHpmx/pizza-3010062-1280.jpg",
            modalText: "Winter Offer!",
        },
        {
            discount: "20%",
            description: "Offer on Thailand!",
            image: "https://i.ibb.co.com/6WNQbWB/thailand-2707555-1280.jpg",
            modalImage: "https://i.ibb.co.com/c80cRZW/sandwiches-3470525-1280.jpg",
            modalText: "Thailand Offer!",
        },
        {
            discount: "30%",
            description: "Discount on New Year Vacation!",
            image: "https://i.ibb.co.com/vcQR6gS/ai-generated-9291566-1280.png",
            modalImage: "https://i.ibb.co.com/c1xCvhg/christmas-wallpaper-2009590-1280.jpg",
            modalText: "New Year Offer!",
        },
        {
            discount: "20%",
            description: "Offer on Singapore!",
            image: "https://i.ibb.co.com/Qpf8vmD/hotel-1831072-1280.jpg",
            modalImage: "https://i.ibb.co.com/NTvKxTR/cheese-1887233-1280.jpg",
            modalText: "Singapore Offer!",
        },
        {
            discount: "40%",
            description: "Offer on Maldives!",
            image: "https://i.ibb.co.com/MCBSJhr/swimming-pool-2128578-1280.jpg",
            modalImage: "https://i.ibb.co.com/c80cRZW/sandwiches-3470525-1280.jpg",
            modalText: "Maldives Offer!",
        },
    ];
    return (
        <div className="w-11/12 mx-auto my-20">
      <h2 className="text-3xl font-extrabold mb-8 flex justify-center items-center mx-auto">
        Explore Our Hot Details
      </h2>
      <p className="my-10 w-9/12 mx-auto text-center">
        Explore our stunning discount rooms, where luxury meets comfort—
        offering exceptional amenities, breathtaking views, and unforgettable
        experiences tailored to make your stay extraordinary.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative h-[500px]"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => handleModalOpen(index)}
            onMouseLeave={handleModalClose}
          >
            <div className="absolute inset-0 flex justify-center items-center text-center text-white bg-black bg-opacity-50">
              <div className="max-w-sm">
                <h1 className="mb-5 text-5xl font-bold">{item.discount}</h1>
                <p className="mb-5">{item.description}</p>
                <Link to="/rooms">
                  <button className="btn bg-pink-300">Book Now</button>
                </Link>
              </div>
            </div>

            {/* Show modal when hovered */}
            {activeModal === index && (
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60 z-[1000]">
                <div className="bg-white p-6 rounded-lg max-w-sm">
                  <img
                    src={item.modalImage}
                    alt="Modal"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-2xl font-semibold mb-4">
                    {item.modalText}
                  </h2>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default HotDetails;