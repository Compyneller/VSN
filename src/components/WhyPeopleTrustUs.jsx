import { Col, Container, Row } from "react-bootstrap";
import image from "../assets/portrait-smiling-cheerful-man.jpg";
import check from "../assets/check.png";
import video from "../assets/stand.svg";
const WhyPeopleTrustUs = () => {
  return (
    <div
      style={{
        background: "#001E3C",
      }}
    >
      <Container className="text-light">
        <Row className="g-3">
          <Col sm={12} lg={6}>
            <div
              style={{
                width: "100%",
                background: "#132F4C",
                border: "1px solid #5090D3",
                borderRadius: "20px",
                padding: "2rem",
              }}
            >
              <h1 style={{ color: "#3399FF", fontWeight: "bold" }}>
                What Makes Us Stand Out.
              </h1>
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
                  <p className="WhyHeading">One Place All Solutions.</p>
                  <p className=" whyText">
                    Sell, buy, repair or accessorize your smartphone.
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
                  <p className="WhyHeading">Satisfied Prices.</p>
                  <p className=" whyText">
                    Sell, buy, repair or accessorize your smartphone.
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
                  <p className="WhyHeading">Qualified Professionals.</p>
                  <p className=" whyText">
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
                  <p className="WhyHeading">Easy & Trustable.</p>
                  <p className=" whyText">
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
                  <p className="WhyHeading">Safety Is Priority.</p>
                  <p className=" whyText">
                    Always the top-class security for your device & payments.
                  </p>
                </div>
              </Row>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div
              className="d-flex align-items-center "
              data-aos="zoom-in"
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <img
                src={video}
                alt=""
                height={550}
                className="w-100"
                // style={{
                //   position: "absolute",
                //   bottom: "0",
                //   zIndex: "300",
                //   right: "0",
                //   width: "60%",
                //   height: "90%",
                //   objectFit: "cover",
                // }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyPeopleTrustUs;
