import { Col, Container, Row } from "react-bootstrap";
import image from "../assets/portrait-smiling-cheerful-man.jpg";
import check from "../assets/check.png";
const WhyPeopleTrustUs = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to top right , #1A237E, #3F51B5, #C5CAE9",
      }}
    >
      <Container className="text-light">
        <Row className="g-3">
          <Col sm={12} lg={4}>
            <h2>What Makes Us Stand Out</h2>
            <br />
            <Row className="g-2">
              <div className="col-1">
                <img
                  src={check}
                  className="w-100"
                  alt=""
                  style={{ filter: "invert(1)" }}
                />
              </div>
              <div className="col-11">
                <p className="WhyHeading">One Place All Solutions</p>
                <p className="text-light whyText">
                  Sell, buy, repair or accessorize your smartphone
                </p>
              </div>
              <div className="col-1">
                <img
                  src={check}
                  className="w-100"
                  alt=""
                  style={{ filter: "invert(1)" }}
                />
              </div>
              <div className="col-11">
                <p className="WhyHeading">Satisfied Prices</p>
                <p className="text-light whyText">
                  Sell, buy, repair or accessorize your smartphone
                </p>
              </div>
              <div className="col-1">
                <img
                  src={check}
                  className="w-100"
                  alt=""
                  style={{ filter: "invert(1)" }}
                />
              </div>
              <div className="col-11">
                <p className="WhyHeading">Qualified Professionals</p>
                <p className="text-light whyText">
                  Trained experts who are always ready for you.
                </p>
              </div>
              <div className="col-1">
                <img
                  src={check}
                  className="w-100"
                  alt=""
                  style={{ filter: "invert(1)" }}
                />
              </div>
              <div className="col-11">
                <p className="WhyHeading">Easy & Trustable</p>
                <p className="text-light whyText">
                  Get a smooth experience at your doorstep.
                </p>
              </div>
              <div className="col-1">
                <img
                  src={check}
                  className="w-100"
                  alt=""
                  style={{ filter: "invert(1)" }}
                />
              </div>
              <div className="col-11">
                <p className="WhyHeading">Safety Is Priority</p>
                <p className="text-light whyText">
                  Always the top-class security for your device & payments.
                </p>
              </div>
            </Row>
          </Col>
          <Col sm={12} lg={8}>
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <div className="whyTrustBg"></div>
              <img
                src={image}
                alt=""
                style={{
                  position: "absolute",
                  bottom: "0",
                  zIndex: "300",
                  right: "0",
                  width: "60%",
                  height: "90%",
                  objectFit: "cover",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyPeopleTrustUs;
