import { Button, Card, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/afif-kusuma-D1z3dwROc44-unsplash-removebg-preview.png";
import image2 from "../assets/syed-hussaini-HlLno-CSbq8-unsplash-removebg-preview.png";
import image3 from "../assets/portrait-successful-guy-white-shirt-rejoicing-like-winner-with-fan-100-dollar-bills-hand-clenching-fist-aside-dark-gray-removebg-preview.png";

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="w-100" style={{ background: "#1A237E" }}>
          <Container>
            <Row>
              <div className="col-6 d-flex flex-column justify-content-center">
                <h1 className="text-light">Purana Phone Becho Aur Cash Pao</h1>
                <h5 className="text-light">Free Pickup | Instant Payment</h5>
                <a
                  className="bg-dark p-2 rounded text-light"
                  href="mailto:sell@vsnsellsolutions.com"
                  variant="dark"
                  style={{ width: "fit-content" }}
                >
                  Check Price
                </a>
              </div>
              <div className="col-6 d-flex justify-content-end align-items-end ">
                <img height={320} src={image1} alt="" />
              </div>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="w-100" style={{ background: "#1A237E" }}>
          <Container>
            <Row>
              <div className="col-6 d-flex flex-column justify-content-center">
                <h1 className="text-light">
                  Sell your old Phone at Best Price
                </h1>
                <h5 className="text-light">Free Pickup | Instant Payment</h5>
                <a
                  className="bg-dark p-2 rounded text-light"
                  href="mailto:sell@vsnsellsolutions.com"
                  variant="dark"
                  style={{ width: "fit-content" }}
                >
                  Check Price
                </a>
              </div>
              <div className="col-6 d-flex justify-content-end align-items-end ">
                <img height={320} src={image2} alt="" />
              </div>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="w-100" style={{ background: "#B3E5FC" }}>
          <Container>
            <Row>
              <div className="col-6 d-flex flex-column justify-content-center">
                <h1 className="text-dark">Spread the Word and Earn !</h1>
                <h5 className="text-dark">
                  Refer your Friend to Casify and Earn 100{" "}
                </h5>
                <a
                  className="bg-dark p-2 rounded text-light"
                  href="mailto:sell@vsnsellsolutions.com"
                  variant="dark"
                  style={{ width: "fit-content" }}
                >
                  Check Price
                </a>
              </div>
              <div className="col-6 d-flex justify-content-end align-items-end ">
                <img height={320} src={image3} alt="" />
              </div>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="w-100" style={{ background: "#212529" }}>
          <Container>
            <Row>
              <div className="col-6 d-flex flex-column justify-content-center">
                <h1 className="text-light">Looking for your next phone</h1>
                <h5 className="text-light">Click Here </h5>
                <a
                  className="bg-light p-2 rounded text-dark"
                  href="mailto:sell@vsnsellsolutions.com"
                  variant="dark"
                  style={{ width: "fit-content" }}
                >
                  Check Price
                </a>
              </div>
              <div className="col-6 d-flex justify-content-end align-items-end ">
                <img
                  width={435}
                  height={320}
                  src="https://s3n.cashify.in/imageLibrary/find-new-phone_7f0fcc9479d9.png"
                  alt=""
                />
              </div>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
