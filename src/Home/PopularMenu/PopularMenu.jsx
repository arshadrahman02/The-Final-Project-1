import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import UseMenu from "../../Hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <section className="mb-12">
        <SectionTitle
          heading="From Our Menu"
          subHeading="Popular Items"
        ></SectionTitle>
        <div className="grid lg:grid-cols-2 gap-5 lg:w-[1060px] lg:mx-auto">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
          <div>
            <button className=" btn bg-emerald-500 text-black  border-0 border-b-4 font-mono mx-28 w-40 mt-16  lg:w-36 lg:mx-[440px] lg:mt-5 ">
              View Full Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
