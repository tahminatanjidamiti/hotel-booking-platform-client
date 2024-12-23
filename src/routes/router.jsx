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
                path: "/rooms",
                element: <Rooms></Rooms>,
            },
            {
                path: "/my_bookings",
                element: <MyBookings></MyBookings>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
]);

export default router;