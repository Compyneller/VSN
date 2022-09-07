import { Card, Col, Container, Form, Row } from "react-bootstrap";
import iphone13 from "../assets/iphone13.png";
import phone from "../assets/iphone.png";
import refur from "../assets/refur.png";
import wifi from "../assets/wifi.png";
import speaker from "../assets/speaker.png";
import mi from "../assets/pms_1648123671.21955073.png";
import samsung from "../assets/Samsung-Galaxy-S22-Ultra-8.png";
import oneplus from "../assets/EU-IN_Green.png";
import nokia from "../assets/nokia_8_3_5G--614x1024.png";
import poco from "../assets/L11R-F4-sliver.png";
import { useState } from "react";
const Pricing = () => {
  const [phone, setPhone] = useState("iphone");
  return (
    <Container>
      <Card className="shadow p-3 rounded">
        <Card.Body>
          <h3>Calculation of the Pricing of my device?</h3>
          <br />
          <div className="row g-3">
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <img src={iphone13} height={400} alt="" />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h5>Your Device Price</h5>
              <Form.Group className="mb-3 w-50">
                <Form.Label>Pricing</Form.Label>
                <Form.Select onChange={(e) => setPhone(e.target.value)}>
                  <option value="iphone">12,000Rs - 20,000Rs</option>
                  <option value="samsung">21,000Rs - 27,000Rs</option>
                  <option value="mi">28,000Rs - 36,000Rs</option>
                  <option value="nokia">49,000Rs - 59,000Rs</option>
                  <option value="oneplus">60,000Rs - 70,000Rs</option>
                  <option value="poco">71,000Rs - 81,000Rs</option>
                  <option value="poco">82,000Rs - 1,00,000Rs</option>
                  <option value="poco">1,00,000Rs - 1,50,000Rs</option>
                </Form.Select>
              </Form.Group>

              {/* <Form.Label>RAM</Form.Label>
              <div className="d-flex">
                <Form.Check
                  inline
                  label="16"
                  name="group1"
                  type="radio"
                  id="1"
                />
                <Form.Check
                  inline
                  label="32"
                  name="group1"
                  type="radio"
                  id="2"
                />
                <Form.Check
                  inline
                  label="128"
                  name="group1"
                  type="radio"
                  id="3"
                />
                <Form.Check
                  inline
                  label="256"
                  name="group1"
                  type="radio"
                  id="4"
                />
              </div> */}
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row g-3">
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <img
                src="https://images.unsplash.com/photo-1601944179066-29786cb9d32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="w-100"
                alt=""
              />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h5>Your Device Price</h5>
              <Form.Group className="mb-3 w-50">
                <Form.Label>Pricing</Form.Label>
                <Form.Select onChange={(e) => setPhone(e.target.value)}>
                  <option value="iphone">12,000Rs - 20,000Rs</option>
                  <option value="samsung">21,000Rs - 27,000Rs</option>
                  <option value="mi">28,000Rs - 36,000Rs</option>
                  <option value="nokia">49,000Rs - 59,000Rs</option>
                  <option value="oneplus">60,000Rs - 70,000Rs</option>
                  <option value="poco">71,000Rs - 81,000Rs</option>
                  <option value="poco">82,000Rs - 1,00,000Rs</option>
                  <option value="poco">1,00,000Rs - 1,50,000Rs</option>
                  <option value="poco">1,50,000Rs - 2,50,000Rs</option>
                  <option value="poco">2,50,000Rs - 5,00,000Rs</option>
                </Form.Select>
              </Form.Group>

              {/* <Form.Label>RAM</Form.Label>
              <div className="d-flex">
                <Form.Check
                  inline
                  label="16"
                  name="group1"
                  type="radio"
                  id="1"
                />
                <Form.Check
                  inline
                  label="32"
                  name="group1"
                  type="radio"
                  id="2"
                />
                <Form.Check
                  inline
                  label="128"
                  name="group1"
                  type="radio"
                  id="3"
                />
                <Form.Check
                  inline
                  label="256"
                  name="group1"
                  type="radio"
                  id="4"
                />
              </div> */}
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row g-3">
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                className="w-100"
                alt=""
              />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h5>Your Device Price</h5>
              <Form.Group className="mb-3 w-50">
                <Form.Label>Pricing</Form.Label>
                <Form.Select onChange={(e) => setPhone(e.target.value)}>
                  <option value="iphone">12,000Rs - 20,000Rs</option>
                  <option value="samsung">21,000Rs - 27,000Rs</option>
                  <option value="mi">28,000Rs - 36,000Rs</option>
                  <option value="nokia">49,000Rs - 59,000Rs</option>
                  <option value="oneplus">60,000Rs - 70,000Rs</option>
                  <option value="poco">71,000Rs - 81,000Rs</option>
                  <option value="poco">82,000Rs - 1,00,000Rs</option>
                  <option value="poco">1,00,000Rs - 1,50,000Rs</option>
                  <option value="poco">1,50,000Rs - 2,50,000Rs</option>
                  <option value="poco">2,50,000Rs - 5,00,000Rs</option>
                </Form.Select>
              </Form.Group>

              {/* <Form.Label>RAM</Form.Label>
              <div className="d-flex">
                <Form.Check
                  inline
                  label="16"
                  name="group1"
                  type="radio"
                  id="1"
                />
                <Form.Check
                  inline
                  label="32"
                  name="group1"
                  type="radio"
                  id="2"
                />
                <Form.Check
                  inline
                  label="128"
                  name="group1"
                  type="radio"
                  id="3"
                />
                <Form.Check
                  inline
                  label="256"
                  name="group1"
                  type="radio"
                  id="4"
                />
              </div> */}
            </div>
          </div>
          <br />
          <br />
          <p>
            VSN Solutions produces a price quote for your device based on the
            information provided by you when placing your order. This activity
            is based on the following criteria:
          </p>
          <ul>
            <li> The age of your device</li>
            <li>
              {" "}
              The functionality of the device whether it turns on or not.
            </li>
            <li>
              The status of its important parts – screen, display, battery,
              speaker, camera, and more.
            </li>
            <li> The availability of a valid bill for your device.</li>
            <li> The availability of warranty period.</li>
          </ul>
          <br />
          <div className="row g-3">
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <img src={iphone13} height={400} alt="" />
              <h5>Iphone 13 Pro 128GB</h5>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <Row className="g-3 text-center">
                <div className="col-4">
                  <Card className="shadow-sm" style={{ width: "100%" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                      <img src={refur} alt="" className="customIcons" />
                      <p>Display/Touchpad Issue/Discoloraion </p>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-4">
                  <Card className="shadow-sm" style={{ width: "100%" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                      <img src={wifi} alt="" className="customIcons" />
                      <p>Wifi/GPS Not Working</p>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-4">
                  <Card className="shadow-sm" style={{ width: "100%" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                      <img src={speaker} alt="" className="customIcons" />
                      <p>Speaker Not Working</p>
                    </Card.Body>
                  </Card>
                </div>
              </Row>
            </div>
          </div>
          <br />
          <br />
          <h5>
            However, the price may be subject to change or vary, after the
            physical inspection and verification of your device by our agent
            during the time of pick up.
          </h5>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Pricing;
