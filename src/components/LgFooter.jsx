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
        <li>
          <a className="text-light" href="mailto:sell@vsnsellsolutions.com">
            Sell Phone
          </a>
        </li>
        <li>
          <a className="text-light" href="mailto:sell@vsnsellsolutions.com">
            Buy Phone
          </a>
        </li>
        <li>
          <a className="text-light" href="mailto:sell@vsnsellsolutions.com">
            Recycle Phone
          </a>
        </li>
        <li>
          <a className="text-light" href="mailto:sell@vsnsellsolutions.com">
            Find Phone
          </a>
        </li>
        <li>
          <a className="text-light" href="mailto:sell@vsnsellsolutions.com">
            Collab with us
          </a>
        </li>
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

        <li>
          <a className="text-light" href="mailto:sell@vsnsellsolutions.com">
            Mobile Phone
          </a>
        </li>
      </Col>
      <Col sm={12} md={6} lg={2}>
        <h5 style={{ fontWeight: "bold" }}>Help & Support</h5>

        <li>
          <Link
            className="text-light"
            to="/how"
            onClick={() => window.scroll(0, 0)}
          >
            How Vsn Solutions works
          </Link>
        </li>
        <li>
          <Link
            className="text-light"
            to="/onlinereg"
            onClick={() => window.scroll(0, 0)}
          >
            Online Registration & Pricing Structure
          </Link>
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
          <Link className="text-light" to="/refund">
            Refund and Cancellation
          </Link>
        </li>
      </Col>
      <Col sm={12} md={6} lg={2}>
        <h5 style={{ fontWeight: "bold" }}>More about us</h5>

        <li>
          <Link
            className="text-light"
            to="/privacy"
            onClick={() => window.scroll(0, 0)}
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            className="text-light"
            to="/tc"
            onClick={() => window.scroll(0, 0)}
          >
            Terms & Conditions
          </Link>
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
