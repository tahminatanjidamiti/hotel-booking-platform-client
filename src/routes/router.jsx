import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Rooms from "../Rooms/Rooms";
import MyBookings from "../MyBookings/MyBookings";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../Components/RoomDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "rooms",
                element: <Rooms></Rooms>,
            },
            {
                path: "rooms/:id",
                element: <RoomDetails></RoomDetails>, 
            },
            {
                path: "my_bookings/:email",
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
        ]
    },
]);

export default router;