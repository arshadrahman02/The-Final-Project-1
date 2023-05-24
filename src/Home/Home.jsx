import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefBanner from "./ChefBanner/ChefBanner";
import PopularMenu from "./PopularMenu/PopularMenu";
import CallUsFooter from "./CallUsFooter/CallUsFooter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefBanner></ChefBanner>
      <PopularMenu></PopularMenu>
      <CallUsFooter></CallUsFooter>
    </div>
  );
};

export default Home;
