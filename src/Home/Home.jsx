import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefBanner from "./ChefBanner/ChefBanner";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefBanner></ChefBanner>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
