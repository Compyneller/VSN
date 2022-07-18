import { Container, Row } from "react-bootstrap";
import CarouselHeader from "./CarouselHeader";
import CarouselText from "./CarouselText";
import "./TopHeader.css";
const TopHeader = () => {
  return (
    <div className="TopHeaderMainContainer">
      <Row className="g-0 TopHeaderBackground">
        <div
          className="col-4"
          style={{ background: "#091726" }}
          data-aos="fade-right"
        ></div>
        <div
          className="col-8 "
          style={{
            backgroundImage:
              "linear-gradient(to bottom right , #007FFE, #005FC0",
          }}
          data-aos="fade-left"
        ></div>
      </Row>
      <div className="TopHeaderContent">
        <Row className="w-100">
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-end ">
            <div className="TopHeaderCard w-75 shadow-lg" data-aos="zoom-in">
              <CarouselHeader />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="TopHeaderCard d-flex align-items-center justify-content-center">
              <CarouselText />
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default TopHeader;
