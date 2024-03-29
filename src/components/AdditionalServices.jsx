import { Card, Col, Container, Row } from "react-bootstrap";

import Modal from "../Modal/Modal";
import { useState } from "react";

const AdditionalServices = () => {
  // const [addtionalModal, setAddtionalModal] = useState(false);
  return (
    <div id="products" style={{ width: "100%", background: "#091726" }}>
      <Container>
        <h3 className="text-light">Additional Services</h3>
        <Row className=" g-lg-4 g-2 text-center">
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <a
              style={{ height: "100%" }}
              href="https://forms.gle/qZcpqwDZfwmpCFT8A"
              target="_blank"
              className="w-100"
            >
              <Card
                className="shadow cardHover"
                data-aos="fade-up-right"
                // onClick={() => setAddtionalModal(true)}
              >
                <div className="row g-0">
                  <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                    <img
                      className="w-100 rounded"
                      src="https://images.unsplash.com/photo-1646821804389-9778ce2a4fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                    <h5>Refurbished Phone </h5>
                  </div>
                </div>
              </Card>
            </a>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <a
              style={{ height: "100%" }}
              href="mailto:sell@vsnsellsolutions.com"
              className="w-100"
            >
              <Card
                className="shadow cardHover"
                data-aos="fade-down-right"
                // onClick={() => setAddtionalModal(true)}
              >
                <div className="row g-0">
                  <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                    <img
                      className="w-100 rounded"
                      src="https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                    <h5>Repair Phone </h5>
                  </div>
                </div>
              </Card>
            </a>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <a
              style={{ height: "100%" }}
              href="mailto:sell@vsnsellsolutions.com"
              className="w-100"
            >
              <Card
                className="shadow cardHover"
                data-aos="fade-up-left"
                // onClick={() => setAddtionalModal(true)}
              >
                <div className="row g-0">
                  <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                    <img
                      className="w-100 rounded"
                      src="https://images.unsplash.com/photo-1601972599748-19fe5a7e756f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80"
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                    <h5>Find New Phone </h5>
                  </div>
                </div>
              </Card>
            </a>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <a
              style={{ height: "100%" }}
              href="mailto:sell@vsnsellsolutions.com"
              className="w-100"
            >
              <Card
                className="shadow cardHover"
                data-aos="fade-down-right"
                // onClick={() => setAddtionalModal(true)}
              >
                <div className="row g-0">
                  <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                    <img
                      className="w-100 rounded"
                      src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                    <h5>Recycled Phone </h5>
                  </div>
                </div>
              </Card>
            </a>
          </Col>

          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <a
              style={{ height: "100%" }}
              href="mailto:sell@vsnsellsolutions.com"
              className="w-100"
            >
              <Card
                className="shadow cardHover"
                data-aos="fade-down-left"
                // onClick={() => setAddtionalModal(true)}
              >
                <div className="row g-0">
                  <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                    <img
                      className="w-100 rounded"
                      src="https://images.unsplash.com/photo-1590935217281-8f102120d683?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                    <h5>Compare Phone</h5>
                  </div>
                </div>
              </Card>
            </a>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <a
              style={{ height: "100%" }}
              href="mailto:sell@vsnsellsolutions.com"
              className="w-100"
            >
              <Card
                className="shadow cardHover"
                data-aos="zoom-in-right"
                // onClick={() => setAddtionalModal(true)}
              >
                <div className="row g-0">
                  <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                    <img
                      className="w-100 rounded"
                      src="https://images.unsplash.com/photo-1573739022854-abceaeb585dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                    <h5>Buy Accessories</h5>
                  </div>
                </div>
              </Card>
            </a>
          </Col>
        </Row>
        {/* {addtionalModal && <Modal closeModel={setAddtionalModal} />} */}
      </Container>
    </div>
  );
};

export default AdditionalServices;
