import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import image from "../assets/undraw_fingerprint_re_uf3f.svg";
const BuySellModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center justify-content-center">
        <img src={image} height={200} className="mx-auto" alt="" />
        <h5 className="my-3">
          Help us become one of the safest places to buy and sell
        </h5>
        <a href="#products">
          <Button onClick={props.onHide}>Continue</Button>
        </a>
        <ol className="text-secondary my-3">
          <li>
            Click on the continue button to close the deals from the comfort of
            your home.
          </li>
          <li>
            Now select the product category you want to buy & sell and click
            upon it.
          </li>
          <li>
            Write us an email describing each and every detail of product you
            want to buy & sell.
          </li>
          <li>
            One of our Customer service agent will reach out to you regarding
            the product.
          </li>
        </ol>
      </Modal.Body>
    </Modal>
  );
};

export default BuySellModal;
