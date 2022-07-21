import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5 style={{ fontWeight: "bold" }}>Services</h5>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <a href="mailto:sell@vsnsellsolutions.com">Sell Phone</a>
              </li>
              <li>
                <a href="mailto:sell@vsnsellsolutions.com">Buy Phone</a>
              </li>
              <li>
                <a href="mailto:sell@vsnsellsolutions.com">Recycle Phone</a>
              </li>
              <li>
                <a href="mailto:sell@vsnsellsolutions.com">Find Phone</a>
              </li>
              <li>
                <a href="mailto:sell@vsnsellsolutions.com">Collab with us</a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5 style={{ fontWeight: "bold" }}>Company</h5>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <a
                  href="https://medium.com/@sell_74218/about-us-vsn-solutions-59cfe9fe48bf"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@sell_74218/contact-us-vsn-solutions-4584559b4171"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/career" onClick={() => window.scroll(0, 0)}>
                  Career
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5 style={{ fontWeight: "bold" }}>Sell Device</h5>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <a href="mailto:sell@vsnsellsolutions.com">Mobile Phone</a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5 style={{ fontWeight: "bold" }}>Help & Support</h5>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/how" onClick={() => window.scroll(0, 0)}>
                  How Vsn Solutions works
                </Link>
              </li>
              <li>
                <Link to="/onlinereg" onClick={() => window.scroll(0, 0)}>
                  Online Registration & Pricing Structure
                </Link>
              </li>
              <li>
                <Link to="/warranty" onClick={() => window.scroll(0, 0)}>
                  Warranty Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" onClick={() => window.scroll(0, 0)}>
                  Refund and Cancellation
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5 style={{ fontWeight: "bold" }}>More about us</h5>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/privacy" onClick={() => window.scroll(0, 0)}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/tc" onClick={() => window.scroll(0, 0)}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/legal" onClick={() => window.scroll(0, 0)}>
                  Legal
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h5 style={{ fontWeight: "bold" }}>Socials</h5>
          </Accordion.Header>
          <Accordion.Body>
            <div className="row g-3">
              <div className="col-4">
                <a href="https://twitter.com/SellVsn" target="_blank">
                  <img
                    src="https://img.icons8.com/ios-filled/344/twitter.png"
                    height={50}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-4">
                <a href="https://medium.com/@sell_74218" target="_blank">
                  <img
                    src="https://img.icons8.com/ios-filled/344/medium-logo.png"
                    height={50}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-4">
                <a href="https://www.instagram.com/vsnsell/" target="_blank">
                  <img
                    src="https://img.icons8.com/ios-glyphs/344/instagram-new.png"
                    height={50}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default MobileFooter;
