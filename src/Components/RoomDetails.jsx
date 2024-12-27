import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RoomDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingModal, setBookingModal] = useState(false);
  const { id: roomId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/rooms/${roomId}`)
      .then((response) => setRoom(response.data))
      .catch((error) => console.error("Error fetching room data", error));

    axios.get(`http://localhost:5000/rooms/${roomId}/reviews`)
      .then((response) => setReviews(response.data))
      .catch((error) => console.error("Error fetching reviews", error));
  }, [roomId]);

  const handleBooking = () => {
    if (!user) {
      Swal.fire("You need to log in to book a room!", "", "warning").then(() => {
        navigate("/login");
      });
      return;
    }
    if (!room.availability) {
      return Swal.fire("Sorry, this room is no longer available.", "", "warning");
    }
    setBookingModal(true);
  };

  const confirmBooking = () => {
    if (!selectedDate) return Swal.fire("Please select a date!");

    axios.post("http://localhost:5000/book", {
      userId: user?.id || user?.email,
      roomId,
      date: selectedDate.toISOString(),
    })
      .then(() => {
        Swal.fire("Room booked successfully!", "", "success");
        setBookingModal(false);
        setRoom({ ...room, availability: false });
        axios.get(`http://localhost:5000/rooms/${roomId}`)
          .then((response) => setRoom(response.data))
          .catch((error) => console.error("Error fetching room data", error));
      })
      .catch(() => Swal.fire("Failed to book the room. Please try again.", "", "error"));
  };

  return (
    <div className="container mx-auto p-4">
      {room ? (
        <>
          <div className="card shadow-xl">
            <figure>
              <img src={room.image} alt={room.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{room.name}</h2>
              <p>{room.description}</p>
              <p>${room.price} per night</p>
              <p>{room.rating} ⭐</p>
              <button
                className="btn bg-purple-600"
                onClick={handleBooking}
                disabled={!room.availability}
              >
                {room.availability ? "Book Now" : "Unavailable"}
              </button>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Reviews</h3>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="border-b py-2">
                  <p><strong>{review.user}</strong> - {new Date(review.timestamp).toLocaleDateString()}</p>
                  <p>Rating: {review.rating} ⭐</p>
                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews available for this room.</p>
            )}
          </div>
        </>
      ) : (
        <p>Loading room details...</p>
      )}

      {bookingModal && (
        <div className="modal modal-open">
          <div className="modal-box max-h-screen overflow-visible">
            <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>
            <p className="mb-2"><strong>Room:</strong> {room.name}</p>
            <p className="mb-2"><strong>Description:</strong> {room.description}</p>
            <p className="mb-2"><strong>Price:</strong> ${room.price} per night</p>
            <label className="label mt-4 mb-2"><strong>Select Date</strong></label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="input input-bordered w-full"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeSelect
              timeIntervals={15}
              timeCaption="Time"
              calendarClassName="z-50"
            />
            <div className="modal-action">
              <button
                className="btn btn-success"
                onClick={confirmBooking}
                disabled={!selectedDate}
              >
                Confirm Booking
              </button>
              <button className="btn btn-error" onClick={() => setBookingModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default RoomDetails;