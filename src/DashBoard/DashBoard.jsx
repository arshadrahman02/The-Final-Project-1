import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  IoFastFoodSharp,
  IoWallet,
  IoCalendar,
  IoHome,
  IoMenu,
  IoPeople,
} from "react-icons/io5";

import { RiShoppingBagFill, RiMailFill } from "react-icons/ri";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import UseCart from "../Hooks/UseCart/UseCart";

const DashBoard = () => {
  const [cart] = UseCart();

  const isAdmin = true;
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

            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashBoard/Homes">
                    <IoHome></IoHome>ADMIN HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/reserVations">
                    <GiForkKnifeSpoon></GiForkKnifeSpoon>ADD ITEMS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/payment">
                    <IoMenu></IoMenu>MANAGE ITEMS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/myBooking">
                    <FaBook></FaBook>MANAGE BOOKINGS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/allUsers">
                    <IoPeople></IoPeople>ALL USERS
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <NavLink to="/dashBoard/Homes">
                    <IoHome></IoHome>USER HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/reserVations">
                    <IoCalendar></IoCalendar>RESERVATION
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/payment">
                    <IoWallet></IoWallet>PAYMENT HISTORY
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/payment">
                    <IoWallet></IoWallet>ADD REVIEW
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/payment">
                    <IoWallet></IoWallet>MY BOOKING
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/myCart">
                    <IoFastFoodSharp></IoFastFoodSharp>MY CART
                    <div className="badge  badge-warning font-bold">
                      +{cart?.length || 0}
                    </div>
                  </NavLink>
                </li>
              </>
            )}

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
