import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselHeader = () => {
  return (
    <Carousel fade className="w-100" indicators={false} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1546027658-7aa750153465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
          style={{ height: "50vh", objectFit: "cover", borderRadius: "20px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
          alt="Second slide"
          style={{ height: "50vh", objectFit: "cover", borderRadius: "20px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1623126908029-58cb08a2b272?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Third slide"
          style={{ height: "50vh", objectFit: "cover", borderRadius: "20px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHeader;
