import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import RecommendCard from "../RecommendCard/RecommendCard";

const Recommend = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("/public/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const offersItems = data.filter((item) => item.category === "offered");
        setOffers(offersItems);
      });
  }, []);
  return (
    <div>
      <section className="mb-12">
        <SectionTitle
          heading="From Our Menu"
          subHeading="Popular Items"
        ></SectionTitle>
        <div className="grid lg:grid-cols-2 gap-5 lg:w-[1060px] lg:mx-[120px]">
          {offers.map((offer) => (
            <RecommendCard key={offer._id} offer={offer}></RecommendCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Recommend;
