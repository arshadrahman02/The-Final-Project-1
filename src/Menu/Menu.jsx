import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../assets/menu/menu.png";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import SectionTitle from "../SectionTitle/SectionTitle";
import UseMenu from "../Hooks/UseMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = UseMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

      <Cover
        img={menuImg}
        title="Our Menu"
        subtitle="Would you like to try a dish?"
      ></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>

      {/* offered cover */}
      <MenuCategory items={offered}></MenuCategory>

      {/* desserts cover */}
      <MenuCategory
        title="desserts"
        items={desserts}
        coverImage={dessertImg}
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda inventore eum voluptas, minima autem reprehenderit official. "
      ></MenuCategory>

      {/* pizza cover */}
      <MenuCategory
        title="pizza"
        items={pizza}
        coverImage={pizzaImg}
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda inventore eum voluptas, minima autem reprehenderit official. "
      ></MenuCategory>

      {/* salad cover */}
      <MenuCategory
        title="salad"
        items={salad}
        coverImage={saladImg}
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda inventore eum voluptas, minima autem reprehenderit official. "
      ></MenuCategory>

      {/* soups cover */}
      <MenuCategory
        title="soup"
        items={soup}
        coverImage={soupImg}
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda inventore eum voluptas, minima autem reprehenderit official. "
      ></MenuCategory>
    </div>
  );
};

export default Menu;
