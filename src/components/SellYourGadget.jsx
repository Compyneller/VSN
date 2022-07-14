import { Card, Col, Container, Row } from "react-bootstrap";
import tag from "../assets/tag.gif";
import visit2 from "../assets/visit2.gif";
import rupee from "../assets/rupee.gif";
const SellYourGadget = () => {
  return (
    <div style={{ background: "#FAFAFA", padding: "3rem 0", width: "100%" }}>
      <Container className="text-center">
        <h2>3 Steps to Sell</h2>
        <p className="text-secondary">
          Sell your gadgets conveniently from your home or work place for free.
        </p>
        <br />
        <br />
        <Row className="g-3 text-center">
          <Col sm={12} md={6} lg={4}>
            <Card className="shadow-sm" style={{ background: "#FAFAFA" }}>
              <Card.Body>
                <Row>
                  <div className="col-3 p-0 d-flex justify-content-start align-items-center ">
                    <img
                      style={{ mixBlendMode: "darken" }}
                      src={tag}
                      className="w-100  "
                      alt=""
                    />
                  </div>
                  <div className="col-9 p-0 d-flex justify-content-start align-items-center">
                    <h1>Get Suitable Price</h1>
                  </div>
                </Row>
                <br />
                <p className="text-secondary">
                  Tell us about your device name, specifications & its condition
                  and our AI tech will give you the best price.{" "}
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="shadow-sm" style={{ background: "#FAFAFA" }}>
              <Card.Body>
                <Row>
                  <div className="col-3 p-0 d-flex justify-content-start align-items-center ">
                    <img
                      style={{ mixBlendMode: "darken" }}
                      src={visit2}
                      className="w-100  "
                      alt=""
                    />
                  </div>
                  <div className="col-9 p-0 d-flex justify-content-start align-items-center">
                    <h1>Book free Pickup </h1>
                  </div>
                </Row>
                <br />
                <p className="text-secondary">
                  Schedule a free pickup from your home or work and select a
                  time slot at your convenience.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="shadow-sm" style={{ background: "#FAFAFA" }}>
              <Card.Body>
                <Row>
                  <div className="col-3 p-0 d-flex justify-content-start align-items-center ">
                    <img
                      style={{ mixBlendMode: "darken" }}
                      src={rupee}
                      className="w-100  "
                      alt=""
                    />
                  </div>
                  <div className="col-9 p-0 d-flex justify-content-start align-items-center">
                    <h1>In Hand Instant Payment</h1>
                  </div>
                </Row>
                <br />
                <p className="text-secondary">
                  Get instant payment as soon as our executive picks up your
                  device.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SellYourGadget;
