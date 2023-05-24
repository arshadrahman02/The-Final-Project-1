import React from "react";

const ChefBanner = () => {
  return (
    <div
      className="hero  h-full lg:h-96 lg:w-[1080px] mx-auto my-16"
      style={{
        backgroundImage: `url("https://i.ibb.co/Wv3k3KX/chef-service.jpg")`,
      }}
    >
      <div className="hero-overlay opacity-100 "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="lg:w-[900px] w-80 h-40 lg:h-64 bg-white text-black">
          <h1 className="lg:mt-16 mt-5 lg:text-5xl font-serif"> Bistro Boss</h1>
          <p className="lg:mt-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
