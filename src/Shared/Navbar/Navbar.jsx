import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { IoFastFoodSharp } from "react-icons/io5";
import UseCart from "../../Hooks/UseCart/UseCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [cart] = UseCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-50 max-w-6xl text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu"> Menu</Link>
              </li>

              <li>
                <Link to="order/salad">Order Item</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl my-1 font-serif">
            Bistro Boss <br />
            Restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu"> Menu</Link>
            </li>

            <li>
              <Link to="/order/salad">Order Item</Link>
            </li>
            <li>
              <Link to="/secret">Secret</Link>
            </li>
            <li>
              <Link to="/dashBoard/myCart">
                <button className="btn gap-2">
                  <IoFastFoodSharp className="text-xl"></IoFastFoodSharp>
                  <div className="badge badge-error">+{cart?.length || 0}</div>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span>{user?.displayName}</span>
              <span></span>
              <button onClick={handleLogOut} className="btn btn-ghost">
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-success font-bold">Log In</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
