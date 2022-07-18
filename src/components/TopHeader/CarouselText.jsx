import { Carousel } from "react-bootstrap";

const CarouselText = () => {
  return (
    <Carousel fade className="w-100" indicators={false} controls={false}>
      <Carousel.Item>
        <h1 className="text-light CarouselHeading">
          Purana Phone Becho Aur Cash Pao
        </h1>
        <h5 className="text-light carouselSubHeading">
          Free Pickup | Instant Payment
        </h5>
        <br />
        <a
          className="bg-dark p-2 my-auto d-flex rounded text-light"
          href="mailto:sell@vsnsellsolutions.com"
          variant="dark"
          style={{ width: "fit-content" }}
        >
          Check Price
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <h1 className="text-light CarouselHeading">
          Sell your old Phone at Best Price
        </h1>
        <h5 className="text-light carouselSubHeading">
          Free Pickup | Instant Payment
        </h5>
        <br />
        <a
          className="bg-dark p-2 my-auto d-flex rounded text-light"
          href="mailto:sell@vsnsellsolutions.com"
          variant="dark"
          style={{ width: "fit-content" }}
        >
          Check Price
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <h1 className="text-light CarouselHeading">
          Looking for your next phone
        </h1>
        <h5 className="text-light carouselSubHeading">Click Here </h5>
        <br />
        <a
          className="bg-light p-2 my-auto d-flex rounded text-dark"
          href="mailto:sell@vsnsellsolutions.com"
          variant="dark"
          style={{ width: "fit-content" }}
        >
          Check Price
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselText;
