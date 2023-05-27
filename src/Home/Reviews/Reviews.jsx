import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaHeadset } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading="What Our Clients Say"
        heading="TESTIMONIALS"
      ></SectionTitle>

      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        navigation={true}
        className="mt-swiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div>
              <Rating
                className="mx-auto"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <div>
                <FaHeadset className="text-5xl mx-auto mt-10"></FaHeadset>
              </div>
            </div>
            <div className=" mt-10 text-center px-20 mb-5">
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
