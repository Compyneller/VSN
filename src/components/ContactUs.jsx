import React from "react";
import { Card, Container, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Card className="shadow-sm contactUsCard rounded-lg">
      <Card.Header
        className="text-light"
        as="h5"
        style={{ background: "#1A237E" }}
      >
        Contact Us
      </Card.Header>
      <Card.Body>
        <Row className="g-3">
          <div className="col-12 col-lg-1">
            <p>
              <strong>Email:</strong>
            </p>
          </div>
          <div className="col-12 col-lg-11">
            <p>
              <a
                className="text-primary"
                href="mailto:sell@vsnsellsolutions.com"
              >
                sell@vsnsellsolutions.com
              </a>
            </p>
          </div>

          <div className="col-12 col-lg-1">
            <p>
              <strong>Address:</strong>
            </p>
          </div>
          <div className="col-12 col-lg-11">
            <p>
              563, VSN Solutions, Cheema Nagar Extension Jalandhar, Punjab,
              144001
            </p>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ContactUs;
