import { Card, Col, Container, Row } from "react-bootstrap";
import tag from "../assets/tag.gif";
import visit2 from "../assets/visit2.gif";
import rupee from "../assets/rupee.gif";
const BuyYourGadget = () => {
  return (
    <div style={{ background: "#091726", padding: "3rem 0", width: "100%" }}>
      <Container className="text-center text-light">
        <h2>3 Steps to Buy</h2>
        <h5 style={{ color: "#AAD3FC" }}>
          Buy Refurbished Smartphones & Gadgets at the most reasonable prices.
        </h5>
        <br />
        <br />
        <Row className="g-3 text-center">
          <Col sm={12} md={6} lg={4}>
            <Card
              className="shadow"
              data-aos="fade-right"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right , #007FFE, #005FC0",
              }}
            >
              <Card.Body>
                <Row>
                  <div className="col-3 p-0 d-flex ">
                    <img
                      // style={{ mixBlendMode: "darken" }}
                      src="https://img.icons8.com/external-coco-line-kalash/344/external-choose-real-estate-and-property-coco-line-kalash.png"
                      className="w-100  m-auto "
                      alt=""
                    />
                  </div>
                  <div className="col-9 p-0 d-flex">
                    <h3 className="text-center m-auto">Choose your Gadget</h3>
                  </div>
                </Row>
                <br />
                <h5 style={{ color: "#AAD3FC" }}>
                  Select the Smartphone or Gadget you want to buy from the list
                  and check out the specifications.
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              className="shadow"
              data-aos="zoom-out-up"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right , #007FFE, #005FC0",
              }}
            >
              <Card.Body>
                <Row>
                  <div className="col-3 p-0 d-flex ">
                    <img
                      src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-price-vacation-planning-resort-flaticons-flat-flat-icons-2.png"
                      className="w-100  "
                      alt=""
                    />
                  </div>
                  <div className="col-9 p-0 d-flex">
                    <h3 className="text-center m-auto">Know the Pricing</h3>
                  </div>
                </Row>
                <br />
                <h5 style={{ color: "#AAD3FC" }}>
                  Check out the pricing of your selected Gadget from the pricing
                  section before buying.
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              className="shadow"
              data-aos="fade-left"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right , #007FFE, #005FC0",
              }}
            >
              <Card.Body>
                <Row>
                  <div className="col-3 p-0 d-flex ">
                    <img
                      src="https://img.icons8.com/fluency/344/mouse-left-click.png"
                      className="w-100  "
                      alt=""
                    />
                  </div>
                  <div className="col-9 p-0 d-flex">
                    <h3 className="text-center m-auto">
                      Click Continue to proceed
                    </h3>
                  </div>
                </Row>
                <br />
                <h5 style={{ color: "#AAD3FC" }}>
                  Now after getting the complete information about your device,
                  click continue for payment.
                </h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BuyYourGadget;
