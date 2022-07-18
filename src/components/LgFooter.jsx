import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LgFooter = () => {
  return (
    <Row
      className="text-center text-light g-3 d-flex justify-content-center"
      style={{ listStyle: "none" }}
    >
      <Col sm={12} md={6} lg={2}>
        <h5 style={{ fontWeight: "bold" }}>Services</h5>
        <li>Sell Phone</li>
        <li>Buy Phone</li>
        <li>Recycle Phone</li>
        <li>Find Phone</li>
        <li>Collab With Us</li>
      </Col>
      <Col sm={12} md={6} lg={2}>
        <h5 style={{ fontWeight: "bold" }}>Company</h5>

        <li>
          <a
            className="text-light"
            href="https://medium.com/@sell_74218/about-us-vsn-solutions-59cfe9fe48bf"
            target="_blank"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className="text-light"
            href="https://medium.com/@sell_74218/contact-us-vsn-solutions-4584559b4171"
            target="_blank"
          >
            Contact Us
          </a>
        </li>
        <li>
          <Link
            className="text-light"
            to="/career"
            onClick={() => window.scroll(0, 0)}
          >
            Career
          </Link>
        </li>
      </Col>
      <Col sm={12} md={6} lg={2}>
        <h5 style={{ fontWeight: "bold" }}>Sell Devices</h5>

        <li>Mobile Phone</li>
      </Col>
      <Col sm={12} md={6} lg={2}>
        <h5 style={{ fontWeight: "bold" }}>Help & Support</h5>

        <li>
          <a
            className="text-light"
            href="https://medium.com/@sell_74218/vsn-solutions-how-it-works-805f97e3d97d"
            target="_blank"
          >
            How Vsnsolutions works
          </a>
        </li>
        <li>
          <a
            className="text-light"
            href="https://medium.com/@sell_74218/online-registration-pricing-structure-ec5c2fed937a"
            target="_blank"
          >
            Online Registration & Pricing Structure
          </a>
        </li>
        <li>
          <Link
            className="text-light"
            to="/warranty"
            onClick={() => window.scroll(0, 0)}
          >
            Warranty Policy
          </Link>
        </li>
        <li>
          <a
            className="text-light"
            href="https://medium.com/@sell_74218/refund-cancellation-policy-vsn-solutions-3448c508449a"
            target="_blank"
          >
            Refund and Cancellation
          </a>
        </li>
      </Col>
      <Col sm={12} md={6} lg={2}>
        <h5 style={{ fontWeight: "bold" }}>More about us</h5>

        <li>
          <a
            className="text-light"
            href="https://medium.com/@sell_74218/privacy-policy-vsn-solutions-924166c14695"
            target="_blank"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            className="text-light"
            href="https://medium.com/@sell_74218/terms-conditions-vsn-solutions-a4d32fe838c4"
            target="_blank"
          >
            Terms & Condition
          </a>
        </li>
        <li>
          <Link
            className="text-light"
            to="/legal"
            onClick={() => window.scroll(0, 0)}
          >
            Legal
          </Link>
        </li>
      </Col>
      <Col sm={12} md={6} lg={2}>
        <h5 style={{ fontWeight: "bold" }}>Socials</h5>
        <div className="row g-3">
          <div className="col-4">
            <a href="https://twitter.com/SellVsn" target="_blank">
              <img
                src="https://img.icons8.com/ios-filled/344/twitter.png"
                height={50}
                alt=""
                style={{ filter: "invert(1)" }}
              />
            </a>
          </div>
          <div className="col-4">
            <a href="https://medium.com/@sell_74218" target="_blank">
              <img
                src="https://img.icons8.com/ios-filled/344/medium-logo.png"
                height={50}
                alt=""
                style={{ filter: "invert(1)" }}
              />
            </a>
          </div>
          <div className="col-4">
            <a href="https://www.instagram.com/vsnsell/" target="_blank">
              <img
                src="https://img.icons8.com/ios-glyphs/344/instagram-new.png"
                height={50}
                alt=""
                style={{ filter: "invert(1)" }}
              />
            </a>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default LgFooter;
