import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import city from "../config/cities.json";

const Form = ({ closeModel, setShowThankyou }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankyou(true);
  };
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
        className="Auth-form bg-light"
        style={{ position: "relative" }}
        onSubmit={(e) => handleSubmit(e)}
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

        <div className="Auth-form-content">
          <h3 className="Auth-form-title" style={{ fontWeight: "normal" }}>
            Request a Callback
          </h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              required
              className="form-control mt-1"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>State</label>
            <select
              name=""
              id=""
              style={{
                display: "block",
                padding: ".5rem",
                borderRadius: "5px",
                background: "transparent",
                width: "100%",
                border: "1px solid #CED4DA",
              }}
            >
              <option value="">Select State</option>
              {city.map((items, index) => {
                return <option key={index}>{items}</option>;
              })}
            </select>
          </div>
          <div className="form-group mt-3">
            <label>City</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter City"
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone</label>
            <input
              type="text"
              required
              className="form-control mt-1"
              placeholder="Enter Phone"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => closeModel(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
