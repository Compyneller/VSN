import React from "react";
import { Button, Row } from "react-bootstrap";

const MobileCarousel = () => {
  return (
    <div className="mobileCarouselContainer">
      <div className="mobileCarouselCard child">
        <Row>
          <div className="col-6 d-flex flex-column justify-content-center">
            <h1 className="text-light">Purana Phone Becho Aur Cash Pao</h1>
            <h5 className="text-light">Free Pickup | Instant Payment</h5>
            <Button variant="dark" style={{ width: "fit-content" }}>
              Check Price
            </Button>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-end ">
            <img
              width={435}
              height={320}
              src="https://s3n.cashify.in/imageLibrary/RKR_47953e7c1cb6.png"
              alt=""
            />
          </div>
        </Row>
      </div>
      <div className="mobileCarouselCard child">
        <Row>
          <div className="col-6 d-flex flex-column justify-content-center">
            <h1 className="text-light">Purana Phone Becho Aur Cash Pao</h1>
            <h5 className="text-light">Free Pickup | Instant Payment</h5>
            <Button variant="dark" style={{ width: "fit-content" }}>
              Check Price
            </Button>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-end ">
            <img
              className="w-100"
              src="https://s3n.cashify.in/imageLibrary/RKR_47953e7c1cb6.png"
              alt=""
            />
          </div>
        </Row>
      </div>
      <div className="mobileCarouselCard child">
        <Row>
          <div className="col-6 d-flex flex-column justify-content-center">
            <h1 className="text-light">Purana Phone Becho Aur Cash Pao</h1>
            <h5 className="text-light">Free Pickup | Instant Payment</h5>
            <Button variant="dark" style={{ width: "fit-content" }}>
              Check Price
            </Button>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-end ">
            <img
              className="w-100"
              src="https://s3n.cashify.in/imageLibrary/RKR_47953e7c1cb6.png"
              alt=""
            />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default MobileCarousel;
