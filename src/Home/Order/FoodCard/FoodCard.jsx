import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
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
          <button className="btn text-green-400 font-bold mx-auto mt-5">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
