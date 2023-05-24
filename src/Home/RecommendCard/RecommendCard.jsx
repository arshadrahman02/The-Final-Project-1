import React from "react";

const RecommendCard = ({ offer }) => {
  const { name, image, price, recipe } = offer;
  return (
    <div className="card w-96 bg-base-200 shadow-xl mt-10">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn bg-transparent text-green-400 font-bold">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
