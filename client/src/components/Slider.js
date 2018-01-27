import React from "react";

const Slider = () => {
  return (
    <div className="flexslider slider" id="slider-1">
      <ul className="slides">
        <li
          className="item-1"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(images/homepage-slider-1.jpg) 50% 0%",
            backgroundSize: "cover",
            height: "100%"
          }}
        >
          <div className=" meta">
            <div className="container">
              <h1>Discover Australia</h1>
              <a href="" className="btn btn-default">
                View More
              </a>
            </div>
          </div>
        </li>

        <li
          className="item-2"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(images/homepage-slider-1.jpg) 50% 0%",
            backgroundSize: "cover",
            height: "100%"
          }}
        >
          <div className=" meta">
            <div className="container">
              <h2>Discover</h2>
              <h1>Australia</h1>
              <a href="" className="btn btn-default">
                View More
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
