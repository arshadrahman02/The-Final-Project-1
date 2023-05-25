import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../assets/menu/menu.png";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
