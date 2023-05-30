import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import OrderPage from "../Home/Order/OrderPage/OrderPage";
import Login from "../LogIn/Login";
import SignUp from "../SignUp/SignUp";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashBoard from "../DashBoard/DashBoard";
import MyCart from "../DashBoard/MyCart/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <OrderPage></OrderPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashBoard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);
