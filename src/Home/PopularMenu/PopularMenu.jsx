import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    fetch("/public/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <div>
      <section className="mb-12">
        <SectionTitle
          heading="From Our Menu"
          subHeading="Popular Items"
        ></SectionTitle>
        <div className="grid lg:grid-cols-2 gap-5 lg:w-[1060px] lg:mx-auto">
          {menu.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
          <div>
            <button className="btn btn-accent font-mono mx-28 mt-10 lg:w-36 lg:mx-[440px] lg:mt-5 ">
              View Full Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
