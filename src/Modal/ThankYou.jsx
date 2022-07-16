import React from "react";
import { Button, Container } from "react-bootstrap";
import check from "../assets/check.gif";

const ThankYou = ({ closeModel }) => {
  return (
    <div
      className="Auth-form-container w-100 d-flex align-items-center justify-content-center"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh ",
        background: "rgba(0, 0, 0, 0.493)",
        zIndex: "100",
      }}
    >
      <form
        className="Auth-form bg-light d-flex flex-column align-items-center justify-content-center py-5 px-3 text-center"
        style={{ position: "relative" }}
      >
        <Button
          variant="outline-danger"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: "100",
          }}
          onClick={() => closeModel(false)}
        >
          X
        </Button>

        <img src={check} height={100} alt="" />
        <h5>Thank you for contacting, we will get in touch with you soon</h5>
      </form>
    </div>
  );
};

export default ThankYou;
