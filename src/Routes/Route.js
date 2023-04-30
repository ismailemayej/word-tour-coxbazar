import { createBrowserRouter } from "react-router-dom";
import Main from "../MiddleSection/Layout/Main";
import Home from "../TopSection/Home/Home";
import Login from "../MiddleSection/Layout/UserInfo/Login/Login";
import Register from "../MiddleSection/Layout/UserInfo/Register/Register";
import Booking from "../TopSection/Booking";
import ProvateRoute from "./ProvateRoute";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/booking",
        element: (
          <ProvateRoute>
            <Booking></Booking>
          </ProvateRoute>
        ),
      },
    ],
  },
]);
