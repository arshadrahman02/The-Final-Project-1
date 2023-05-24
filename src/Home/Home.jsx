import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefBanner from "./ChefBanner/ChefBanner";
import PopularMenu from "./PopularMenu/PopularMenu";
import CallUsFooter from "./CallUsFooter/CallUsFooter";
import Recommend from "./Recomend/Recommend";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefBanner></ChefBanner>
      <PopularMenu></PopularMenu>
      <CallUsFooter></CallUsFooter>
      <Recommend></Recommend>
    </div>
  );
};

export default Home;
