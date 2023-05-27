import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../Hooks/UseMenu";
import FoodCard from "../FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const OrderPage = () => {
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  const initialTabIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialTabIndex);
  const [menu] = UseMenu();
  console.log(category);

  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>
      <Cover
        img={orderImg}
        title="Our Shop"
        subtitle="Would you like to try a dish?"
      ></Cover>
      <SectionTitle
        subHeading="Oder Your Favorite Dish"
        heading="Order Now"
      ></SectionTitle>
      <Tabs
        className=" mx-9 mt-20 my-20  "
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="text-center text-amber-500  mt-10">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab> Soup </Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <div className="">
          <TabPanel>
            <div className="grid lg:grid-cols-3 gap-20 mt-20  ">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 gap-20 mt-20 ">
              {pizza.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 gap-20 mt-20">
              {soup.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 gap-20 mt-20">
              {desserts.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 gap-20 mt-20">
              {drinks.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default OrderPage;
