import { Card, Col, Container, Row } from "react-bootstrap";
import AdditionalServices from "./AdditionalServices";

import { useState } from "react";
import Modal from "../Modal/Modal";

const SellForCash = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Container>
        <Row className="g-lg-4 g-2  text-center">
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <Card
              className="shadow cardHover"
              onClick={() => setOpenModal(true)}
            >
              <div className="row g-0 ">
                <div className=" col-12 col-lg-6 d-flex align-items-center justify-content-center">
                  <img
                    className="rounded w-100"
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    alt=""
                  />
                </div>
                <div className="col-12 col-lg-6 d-flex  text-center align-items-center justify-content-center">
                  <h5>Sell Phone</h5>
                </div>
              </div>
            </Card>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <Card
              className="shadow cardHover"
              onClick={() => setOpenModal(true)}
            >
              <div className="row g-0">
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                  <img
                    className="w-100 rounded"
                    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                    alt=""
                  />
                </div>
                <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                  <h5>Sell Laptops </h5>
                </div>
              </div>
            </Card>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <Card
              className="shadow cardHover"
              onClick={() => setOpenModal(true)}
            >
              <div className="row g-0">
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                  <img
                    className="w-100 rounded"
                    src="https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                  <h5>Sell Tablets </h5>
                </div>
              </div>
            </Card>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <Card
              className="shadow cardHover"
              onClick={() => setOpenModal(true)}
            >
              <div className="row g-0">
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                  <img
                    className="w-100 rounded"
                    src="https://images.unsplash.com/photo-1601944179066-29786cb9d32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                  <h5>Sell TV </h5>
                </div>
              </div>
            </Card>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <Card
              className="shadow cardHover"
              onClick={() => setOpenModal(true)}
            >
              <div className="row g-0">
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                  <img
                    className="w-100 rounded"
                    src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                  <h5>Sell Earbuds </h5>
                </div>
              </div>
            </Card>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <Card
              className="shadow cardHover"
              onClick={() => setOpenModal(true)}
            >
              <div className="row g-0">
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                  <img
                    className="w-100 rounded"
                    src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    alt=""
                  />
                </div>
                <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                  <h5>Sell Smart Watch </h5>
                </div>
              </div>
            </Card>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <Card
              className="shadow cardHover"
              onClick={() => setOpenModal(true)}
            >
              <div className="row g-0">
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                  <img
                    className="w-100 rounded"
                    src="https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                  <h5>Sell Smart Speaker </h5>
                </div>
              </div>
            </Card>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <Card
              className="shadow cardHover"
              onClick={() => setOpenModal(true)}
            >
              <div className="row g-0">
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                  <img
                    className="w-100 rounded"
                    src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80"
                    alt=""
                  />
                </div>
                <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                  <h5>Sell iMac</h5>
                </div>
              </div>
            </Card>
          </Col>
          <Col
            xs={4}
            sm={3}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center "
          >
            <Card
              className="shadow cardHover"
              onClick={() => setOpenModal(true)}
            >
              <div className="row g-0">
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                  <img
                    className="w-100 rounded"
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />
                </div>
                <div className="col-12 col-lg-6 d-flex text-center  align-items-center justify-content-center">
                  <h5>Sell Camera</h5>
                </div>
              </div>
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
