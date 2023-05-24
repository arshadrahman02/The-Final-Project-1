import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/public/reviews.json")
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
            <div className="m-24 text-center">
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
