import React from "react";
import UseCart from "../../Hooks/UseCart/UseCart";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const [cart] = UseCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>Bistro | My Cart </title>
      </Helmet>
      <div className="uppercase flex gap-10 h-full items-center justify-evenly font-semibold">
        <h1 className="text-3xl">Total Items : {cart.length}</h1>
        <h1 className="text-3xl">Total Price : ${total}</h1>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr item={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>

                <td>{item.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
