import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./grid.css";
function Grid() {
  return (
    <div className="grid__boss">
      <div className="grid__dummy"></div>
      <div className="grid">
        <Carousel className="grid__cartotal">
          <Carousel.Item interval={1000} className="car1">
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/softwares2020/eScan_Amazon_Banner_1500x300.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500} className="car2">
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Media-Vgsw/QH_Banner_1500-x-300.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item className="car3">
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Media-Vgsw/1500-X-300-Combo-2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Grid;
