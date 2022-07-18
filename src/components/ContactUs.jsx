import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import contact from "../assets/contact us.svg";
import email from "../assets/email.svg";
import address from "../assets/address.svg";
const ContactUs = () => {
  return (
    <div style={{ background: "#001E3C", width: "100%" }}>
      <Container>
        <Card
          className="shadow-sm contactUsCard rounded-lg"
          style={{ background: "#132F4C" }}
        >
          <Card.Header className="text-light" as="h1">
            Contact Us
          </Card.Header>
          <Card.Body className="text-light">
            <Row className="g-3 ">
              <div className="col-12 col-lg-7 d-flex align-items-center justify-content-center">
                <Row className="g-3" data-aos="zoom-in-right">
                  <div className="col-12 col-lg-2">
                    <img src={email} className="w-100" alt="" />
                  </div>
                  <div className="col-12 col-lg-9 d-flex flex-column justify-content-center ">
                    <h3 style={{ color: "#3399FF" }}>Email</h3>
                    <h5>
                      <a
                        className="text-light"
                        href="mailto:sell@vsnsellsolutions.com"
                      >
                        sell@vsnsellsolutions.com
                      </a>
                    </h5>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="col-12 col-lg-2 ">
                    <img src={address} className="w-100" alt="" />
                  </div>

                  <div className="col-12 col-lg-9 d-flex flex-column justify-content-center ">
                    <h3 style={{ color: "#3399FF" }}>Address</h3>
                    <h5>
                      563, VSN Solutions, Cheema Nagar Extension Jalandhar,
                      Punjab, 144001
                    </h5>
                  </div>
                </Row>
              </div>
              <div className="col-12 col-lg-5">
                <img
                  src={contact}
                  alt=""
                  className="w-100"
                  data-aos="zoom-out-up"
                />
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ContactUs;
