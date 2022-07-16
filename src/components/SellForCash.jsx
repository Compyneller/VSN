import { Card, Col, Container, Row } from "react-bootstrap";
import AdditionalServices from "./AdditionalServices";
import phone from "../assets/iphone.png";
import laptop from "../assets/laptop.png";
import tv from "../assets/tv.png";
import tablet from "../assets/tablet.png";
import earbud from "../assets/earbud.png";
import watch from "../assets/watch.png";
import speaker from "../assets/speaker.png";
import imac from "../assets/imac.png";
import camera from "../assets/camera.png";
import { useState } from "react";
import Modal from "../Modal/Modal";

const SellForCash = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Container>
        <Row className="g-3 text-center">
          <Col xs={4} sm={3} md={3} lg={2}>
            <Card
              className="shadow-sm"
              style={{ width: "100%" }}
              onClick={() => setOpenModal(true)}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                <img src={phone} alt="" className="customIcons" />
                <p>Sell Phone</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={3} md={3} lg={2}>
            <Card
              className="shadow-sm"
              style={{ width: "100%" }}
              onClick={() => setOpenModal(true)}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                <img src={laptop} className="customIcons" alt="" />
                <p>Sell Laptop</p>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col xs={4} sm={3} md={3} lg={2}>
            <Card
              className="shadow-sm"
              style={{ width: "100%" }}
              onClick={() => setOpenModal(true)}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                <img src={tablet} alt="" className="customIcons" />
                <p>Sell Tablet</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={3} md={3} lg={2}>
            <Card
              className="shadow-sm"
              style={{ width: "100%" }}
              onClick={() => setOpenModal(true)}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                <img src={tv} alt="" className="customIcons" />
                <p>Sell TV</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={3} md={3} lg={2}>
            <Card
              className="shadow-sm"
              style={{ width: "100%" }}
              onClick={() => setOpenModal(true)}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                <img src={earbud} className="customIcons" alt="" />
                <p>Sell Earbuds</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={3} md={3} lg={2}>
            <Card
              className="shadow-sm"
              style={{ width: "100%" }}
              onClick={() => setOpenModal(true)}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                <img src={watch} className="customIcons" alt="" />
                <p>Sell Smart Watch</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={3} md={3} lg={2} onClick={() => setOpenModal(true)}>
            <Card
              className="shadow-sm"
              style={{ width: "100%" }}
              onClick={() => setOpenModal(true)}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                <img src={speaker} alt="" className="customIcons" />
                <p>Sell Smart Speaker</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={3} md={3} lg={2} onClick={() => setOpenModal(true)}>
            <Card
              className="shadow-sm"
              style={{ width: "100%" }}
              onClick={() => setOpenModal(true)}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                <img src={imac} alt="" className="customIcons" />
                <p>Sell iMac</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} sm={3} md={3} lg={2} onClick={() => setOpenModal(true)}>
            <Card
              className="shadow-sm"
              style={{ width: "100%" }}
              onClick={() => setOpenModal(true)}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                <img src={camera} className="customIcons" alt="" />
                <p>Sell DSLR Camera</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br />
        <br />
        <AdditionalServices openModal={openModal} setOpenModal={setOpenModal} />
      </Container>
      {openModal && <Modal closeModel={setOpenModal} />}
    </>
  );
};

export default SellForCash;
