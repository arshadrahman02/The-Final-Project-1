import React from "react";

const Cover = ({ img, title }) => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-content text-center bg-slate-950 lg:w-[900px] h-96 bg-opacity-60 text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase font-serif">
            {title}
          </h1>
          <p className="mb-5 uppercase font-serif">
            Would you like to try a dish?
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
