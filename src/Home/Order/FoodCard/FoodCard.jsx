import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseCart from "../../../Hooks/UseCart/UseCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = UseCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        foodItemID: _id,
        name,
        image,
        price,
        recipe,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              title: "Food Added On The Cart",

              icon: "success",
              confirmButtonText: "Cool",
            }).then((error) => {
              console.log(error);
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Log in to the order food",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card card-compact w-80 bg-secondary shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
        <p className="bg-slate-900 absolute right-2 top-5 text-white font-mono rounded-lg p-1">
          $ {price}
        </p>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn text-green-400 font-bold mx-auto mt-5"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
