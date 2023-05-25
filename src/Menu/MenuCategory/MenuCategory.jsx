import React from "react";
import UseMenu from "../../Hooks/UseMenu";
import MenuItem from "../../Home/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
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
      <button className="btn btn-outline border-0 border-b-4 w-48 mx-[470px] my-10  lowercase">
        Order Your Favorite Food
      </button>
    </div>
  );
};

export default MenuCategory;
