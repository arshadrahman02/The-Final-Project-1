import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={500}
    >
      <div className="hero h-[500px]">
        <div className="hero-content text-center bg-slate-950 lg:w-[900px] lg:h-72 bg-opacity-60 text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase font-serif">
              {title}
            </h1>
            <p className="mb-5  font-serif">{subtitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
