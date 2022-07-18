import { Card, Col, Container, Row } from "react-bootstrap";
import tag from "../assets/tag.gif";
import visit2 from "../assets/visit2.gif";
import rupee from "../assets/rupee.gif";
const SellYourGadget = () => {
  return (
    <div style={{ background: "#091726", padding: "3rem 0", width: "100%" }}>
      <Container className="text-center text-light">
        <h2>3 Steps to Sell</h2>
        <h5 style={{ color: "#AAD3FC" }}>
          Sell your gadgets conveniently from your home or work place for free.
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
                      style={{ mixBlendMode: "darken" }}
                      src={tag}
                      className="w-100  "
                      alt=""
                    />
                  </div>
                  <div className="col-9 p-0 d-flex">
                    <h3 className="text-center m-auto">Get Suitable Price</h3>
                  </div>
                </Row>
                <br />
                <h5 style={{ color: "#AAD3FC" }}>
                  Tell us about your device name, specifications & its condition
                  and our AI tech will give you the best price.{" "}
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
                      style={{ mixBlendMode: "darken" }}
                      src={visit2}
                      className="w-100  "
                      alt=""
                    />
                  </div>
                  <div className="col-9 p-0 d-flex">
                    <h3 className="text-center m-auto">Book free Pickup </h3>
                  </div>
                </Row>
                <br />
                <h5 style={{ color: "#AAD3FC" }}>
                  Schedule a free pickup from your home or work and select a
                  time slot at your convenience.
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
                      style={{ mixBlendMode: "darken" }}
                      src={rupee}
                      className="w-100  "
                      alt=""
                    />
                  </div>
                  <div className="col-9 p-0 d-flex">
                    <h3 className="text-center m-auto">
                      In Hand Instant Payment
                    </h3>
                  </div>
                </Row>
                <br />
                <h5 style={{ color: "#AAD3FC" }}>
                  Get instant payment as soon as our executive picks up your
                  device.
                </h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SellYourGadget;
