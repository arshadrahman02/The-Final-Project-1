import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import OrderPage from "../Home/Order/OrderPage/OrderPage";

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
        path: "/order",
        element: <OrderPage></OrderPage>,
      },
    ],
  },
]);
