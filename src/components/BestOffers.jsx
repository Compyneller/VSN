import React from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";

const BestOffers = () => {
  return (
    <Container>
      <h2>Best Offers</h2>
      <br />

      <Tabs
        justify
        variant="pills"
        defaultActiveKey="Sell Offers"
        className="mb-3 responsive "
      >
        <Tab eventKey="Sell Offers" title="Sell Offers">
          <Row className="g-1">
            <Col sm={12} lg={4}>
              <Card>
                <Card.Body>
                  <img
                    src="https://s3bo.cashify.in/gpro/uploads/2021/03/22133129/Laptop_450-225.jpg?p=gp4&s=gp"
                    className="w-100 rounded"
                    alt=""
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4}>
              <Card>
                <Card.Body>
                  <img
                    src="https://s3bo.cashify.in/gpro/uploads/2020/10/22133431/TataCliq_450-225.jpg?p=gp4&s=gp"
                    className="w-100 rounded"
                    alt=""
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4}>
              <Card>
                <Card.Body>
                  <img
                    src="https://s3bo.cashify.in/gpro/uploads/2020/10/22133242/flipkart_450-225.jpg?p=gp4&s=gp"
                    className="w-100 rounded"
                    alt=""
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="Exchange Offers" title="Exchange Offers">
          <Row className="g-1">
            <Col sm={12} lg={4}>
              <Card>
                <Card.Body>
                  <img
                    src="https://s3bo.cashify.in/gpro/uploads/2021/03/22133129/Laptop_450-225.jpg?p=gp4&s=gp"
                    className="w-100 rounded"
                    alt=""
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4}>
              <Card>
                <Card.Body>
                  <img
                    src="https://s3bo.cashify.in/gpro/uploads/2020/10/22133431/TataCliq_450-225.jpg?p=gp4&s=gp"
                    className="w-100 rounded"
                    alt=""
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4}>
              <Card>
                <Card.Body>
                  <img
                    src="https://s3bo.cashify.in/gpro/uploads/2020/10/22133242/flipkart_450-225.jpg?p=gp4&s=gp"
                    className="w-100 rounded"
                    alt=""
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default BestOffers;
