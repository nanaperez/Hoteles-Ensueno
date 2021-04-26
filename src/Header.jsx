import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Header() {
  return (
    <div className="header-container">
      <Carousel
        className="header-carousel"
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showStatus={false}
      >
        <div>
          <img
            className="header-img"
            src="../resources/hotel-cover-1.jpg"
            alt="Hotel Argentina"
          />
          <p className="legend">Hotel en Argentina</p>
        </div>
        <div>
          <img
            className="header-img"
            src="../resources/hotel-cover-2.jpg"
            alt="Hotel Chile"
          />
          <p className="legend">Hotel en Chile</p>
        </div>
        <div>
          <img
            className="header-img"
            src="../resources/hotel-cover-3.jpg"
            alt="Hotel Brasil"
          />
          <p className="legend">Hotel en Brasil</p>
        </div>
      </Carousel>
      <h1 className="header-title">Hoteles de ensueño</h1>
    </div>
  );
}
