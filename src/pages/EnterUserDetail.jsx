import React from "react";
import { Container, Row, Form } from "react-bootstrap";
import signup from "../assets/signup.svg";
const EnterUserDetail = () => {
  return (
    <div className="loginContainer">
      <Container>
        <div className="row">
          <div className="col-12 col-lg-4 hidemobile d-flex align-items-center justify-content-center">
            <img src={signup} alt="" className="w-100" />
          </div>
          <div className="col-12 col-lg-8 ">
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign Up</h3>
                  <div className="form-group mt-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Email</label>
                    <input
                      type="mail"
                      className="form-control mt-1"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Confirm password"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Aadhar Number</label>
                    <input
                      type="number"
                      className="form-control mt-1"
                      placeholder="Enter Aadhar Number"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>PAN Number</label>
                    <input
                      type="number"
                      className="form-control mt-1"
                      placeholder="Enter PAN Number"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload Front Side of Aadhar</Form.Label>

                      <Form.Control type="file" />
                    </Form.Group>
                  </div>
                  <div className="form-group mt-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload Back Side of Aadhar</Form.Label>

                      <Form.Control type="file" />
                    </Form.Group>
                  </div>
                  <div className="form-group mt-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload PAN Card</Form.Label>

                      <Form.Control type="file" />
                    </Form.Group>
                  </div>

                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                  <p className="forgot-password text-right mt-2">
                    <a href="/login">Login</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EnterUserDetail;
