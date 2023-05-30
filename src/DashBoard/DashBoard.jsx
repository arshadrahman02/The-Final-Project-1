import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  IoFastFoodSharp,
  IoWallet,
  IoCalendar,
  IoHome,
  IoMenu,
} from "react-icons/io5";

import { RiShoppingBagFill, RiMailFill } from "react-icons/ri";

const DashBoard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-info text-black font-semibold  ">
            {/* <!-- Sidebar content here --> */}

            <li>
              <NavLink to="/dashBoard/Homes">
                <IoHome></IoHome>User's Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashBoard/reserVations">
                <IoCalendar></IoCalendar>Reservations
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashBoard/payment">
                <IoWallet></IoWallet>Payment Method
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashBoard/myCart">
                <IoFastFoodSharp></IoFastFoodSharp>My Cart
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <IoHome></IoHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <IoMenu></IoMenu> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <RiShoppingBagFill></RiShoppingBagFill> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <RiMailFill></RiMailFill> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
