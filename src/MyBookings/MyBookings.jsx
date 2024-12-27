import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [updateModal, setUpdateModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [newDate, setNewDate] = useState(null);
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/my-bookings?userId=${user.email}`)
        .then((response) => setBookings(response.data))
        .catch((error) => console.error("Error fetching bookings", error));
    }
  }, [user]);

  const cancelBooking = (bookingId, roomId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this booking!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`http://localhost:5000/cancel-booking`, { bookingId, roomId })
          .then(() => {
            setBookings(bookings.filter((booking) => booking._id !== bookingId));
            axios
              .get(`http://localhost:5000/rooms/${roomId}`)
              .then((response) => {
                Swal.fire("Cancelled!", "Your booking has been cancelled.", "success");
              })
          })
          .catch(() => Swal.fire("Error!", "Cancellation is not allowed. You could only cancel on at least 1 day before the booked date", "error"));
      }
    });
  }

  const updateBookingDate = () => {
    axios
      .post(`http://localhost:5000/update-booking`, { bookingId: selectedBooking._id, newDate })
      .then(() => {
        Swal.fire("Updated!", "Your booking date has been updated.", "success");
        setBookings(
          bookings.map((booking) =>
            booking._id === selectedBooking._id
              ? { ...booking, date: newDate }
              : booking
          )
        );
        setUpdateModal(false);
      })
      .catch(() => Swal.fire("Error!", "Failed to update the booking date.", "error"));
  };

  const submitReview = () => {
    axios
      .post(`http://localhost:5000/rooms/${selectedBooking.roomId}/reviews`, {
        user: user?.displayName,
        rating: newReview.rating,
        comment: newReview.comment,
        timestamp: new Date(),
      })
      .then(() => {
        Swal.fire("Success!", "Your review has been submitted.", "success");
        setReviewModal(false);
      })
      .catch(() => Swal.fire("Error!", "Failed to submit the review.", "error"));
  };

  return (
    <div className="container mx-auto md:p-4">
      <h1 className="text-2xl font-semibold mb-4">My Bookings</h1>
      {bookings.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="md:p-2 border border-gray-300">#</th>
                <th className="md:p-2 border border-gray-300">Room Image</th>
                <th className="md:p-2 border border-gray-300">Room Name</th>
                <th className="md:p-2 border border-gray-300">Price</th>
                <th className="md:p-2 border border-gray-300">Date</th>
                <th className="md:p-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id} className="text-center">
                  <td className="p-2 border border-gray-300">{index + 1}</td>
                  <td className="p-2 border border-gray-300">
                    <img
                      src={booking?.room?.image}
                      alt="Room"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="p-2 border border-gray-300">{booking.room.name}</td>
                  <td className="p-2 border border-gray-300">${booking.room.price}</td>
                  <td className="p-2 border border-gray-300">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>
                  <td className="p-2 border border-gray-300">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <button
                        className="btn btn-error btn-sm"
                        onClick={() => cancelBooking(booking._id, booking.room._id)}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => {
                          setSelectedBooking(booking);
                          setUpdateModal(true);
                        }}
                      >
                        Update Date
                      </button>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => {
                          setSelectedBooking(booking);
                          setReviewModal(true);
                        }}
                      >
                        Review
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">You have no bookings yet.</p>
      )}
      {updateModal && (
        <div className="modal modal-open">
          <div className="modal-box max-h-screen overflow-visible">
            <h2><strong>Update Booking Date</strong></h2>
            <p><strong>Room:</strong> {selectedBooking.room.name}</p>
            <label className="label">Select New Date</label>
            <DatePicker
              selected={newDate}
              onChange={(date) => setNewDate(date)}
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeSelect
              timeIntervals={15} 
              timeCaption="Time"
              className="input input-bordered"
            />
            <div className="modal-action">
              <button
                className="btn btn-success"
                onClick={updateBookingDate}
                disabled={!newDate}
              >
                Update
              </button>
              <button
                className="btn"
                onClick={() => setUpdateModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {reviewModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <input
              type="text"
              name="username"
              value={user?.displayName || ''}
              className="input input-bordered w-full mb-3"
              readOnly
              required
            />
            <label className="label">Rating</label>
            <input
              type="number"
              min="1"
              max="5"
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
              className="input input-bordered"
            />
            <label className="label">Comment</label>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="textarea textarea-bordered"
            ></textarea>
            <div className="modal-action">
              <button className="btn btn-success" onClick={submitReview}>
                Submit
              </button>
              <button className="btn" onClick={() => setReviewModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default MyBookings;