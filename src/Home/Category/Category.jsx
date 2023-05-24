import React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// import { pagination } from "swiper";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home//slide5.jpg";
import "swiper/css";
// // import "swiper/css/pagination";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="lg:mx-10 my-16">
          <img src={slide1} alt="" />
          <h3 className="text-center  font-mono  text-3xl uppercase -mt-16 text-white ">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide className=" my-16">
          <img src={slide2} alt="" />
          <h3 className="text-3xl  font-mono uppercase -mt-16 text-white text-center">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide className=" my-16">
          <img src={slide3} alt="" />
          <h3 className="text-3xl  font-mono uppercase -mt-16 text-white text-center">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className=" my-16">
          <img src={slide4} alt="" />
          <h3 className="text-3xl  font-mono uppercase -mt-16 text-white text-center">
            Cake
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
