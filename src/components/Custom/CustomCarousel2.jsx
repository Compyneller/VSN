import { Carousel, Row } from "react-bootstrap";
import "./CustomCarousel.scss";
import image1 from "../../assets/afif-kusuma-D1z3dwROc44-unsplash-removebg-preview.png";
import image2 from "../../assets/syed-hussaini-HlLno-CSbq8-unsplash-removebg-preview.png";
const CustomCarousel2 = () => {
  return (
    <div className="mainCarouselBg">
      <Row>
        <div className="col-6">
          <Carousel>
            <Carousel.Item interval={3000}>
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
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <h1 className="text-light">Sell your old Phone at Best Price</h1>
              <h5 className="text-light">Free Pickup | Instant Payment</h5>
              <a
                className="bg-dark p-2 rounded text-light"
                href="mailto:sell@vsnsellsolutions.com"
                variant="dark"
                style={{ width: "fit-content" }}
              >
                Check Price
              </a>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
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
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-6">
          <Carousel>
            <Carousel.Item interval={3000}>
              <img height={320} src={image1} alt="" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img height={320} src={image2} alt="" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                width={435}
                height={320}
                src="https://s3n.cashify.in/imageLibrary/find-new-phone_7f0fcc9479d9.png"
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Row>
    </div>
  );
};

export default CustomCarousel2;
