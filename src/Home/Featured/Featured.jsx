import React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import featuredImage from "../../assets/home/featured.jpg";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div
      className="text-white font-serif  bg-fixed"
      style={{
        backgroundImage: `url("https://i.ibb.co/41c91fF/featured.jpg")`,
      }}
    >
      <div className="pt-8 my-20">
        <SectionTitle
          subHeading="Check it Out"
          heading="featured Item"
        ></SectionTitle>

        <div className="lg:flex justify-center items-center bg-slate-500 bg-opacity-40 py-12 px-36 pb-20">
          <div>
            <img src={featuredImage} alt="" />
          </div>
          <div className="lg:ml-10">
            <p>26 May , 2023</p>
            <p className="uppercase">Where can i get some ? </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusamus libero vero sint odio obcaecati, animi,
              ipsam, maiores iste repellat voluptas corporis quibusdam officiis
              expedita placeat! Debitis est perferendis accusantium, cumque
              maiores, consequuntur mollitia nesciunt accusamus, reiciendis fuga
              voluptates vel architecto consectetur optio iure tenetur tempore
              sunt necessitatibus rerum quis?
            </p>
            <Link to="/menu">
              <button className="btn btn-outline mt-5 border-0 border-b-4 text-white hover:text-green-500 font-bold">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
