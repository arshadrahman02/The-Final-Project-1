import React from "react";
import UseMenu from "../../Hooks/UseMenu";
import MenuItem from "../../Home/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";
// import coverImage from "../../assets/";
const MenuCategory = ({ items, title, coverImage, subtitle }) => {
  return (
    <div>
      {title && (
        <Cover img={coverImage} title={title} subtitle={subtitle}></Cover>
      )}
      <div className="grid lg:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 w-48 mx-[470px] my-10  lowercase hover:text-green-400">
          Order Your Favorite Food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
