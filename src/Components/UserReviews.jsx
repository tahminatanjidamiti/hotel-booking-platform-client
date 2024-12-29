import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch global reviews sorted by timestamp in descending order
  useEffect(() => {
    axios
      .get(`https://my-eleventh-assignment-server-pi.vercel.app/reviews/sorted`)
      .then((response) => setReviews(response.data))
      .catch((error) => {
        // console.error("Error fetching reviews:", error)
      });
  }, []);

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="reviews-carousel container mx-auto px-4 py-14 overflow-x-hidden">
      <h2 className="text-4xl font-semibold text-center mb-6">User Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review._id} className="review-item bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 px-4 py-10 rounded shadow-lg text-center">
            <p className="font-bold text-lg">{review.user}</p>
            <p className="text-yellow-500">Rating: {review.rating} / 5</p>
            <p className="italic text-purple-950">"{review.comment}"</p>
            <p className="text-sm mt-2">
              {new Date(review.timestamp).toLocaleDateString()}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UserReviews;