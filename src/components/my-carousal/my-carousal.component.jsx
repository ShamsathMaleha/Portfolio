import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/crousel-1.jfif";
import Slide2 from "../../assets/img/carousal/carousel-2.jfif";
import Slide3 from "../../assets/img/carousal/carousel-3.jfif";

import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
     
    </div>
  );
};

export default MyCarousal;
