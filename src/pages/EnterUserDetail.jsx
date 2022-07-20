import React, { useState } from "react";
import { Container, Row, Form, InputGroup } from "react-bootstrap";
import signup from "../assets/signup.svg";
import axios from "axios";
const EnterUserDetail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [frontAadhar, setFrontAadhar] = useState("");
  const [backAadhar, setBackAadhar] = useState("");
  const [panImage, setPanImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name: name,
        email: email,
        password: password,
        aadhar_number: aadhar,
        pan_number: pan,
      };
      const { data } = await axios.post(
        "http://34.207.41.229:4100/vsnSellSoutions/signup",
        body
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadFrontAadhar = async (e) => {
    setFrontAadhar(e.target.files[0]);

    console.log(frontAadhar);
    const { data } = await axios.post(
      "http://34.207.41.229:4100/vsnSellSoutions/uploadIds",
      frontAadhar,
      {
        headers: { "Content-Type": "image/jpeg" },
      }
    );
    console.log(data);
  };
  const uploadBackAadhar = async (e) => {};
  const uploadPan = async (e) => {};
  return (
    <div className="loginContainer">
      <Container>
        <div className="row">
          <div className="col-12 col-lg-4 hidemobile d-flex align-items-center justify-content-center">
            <img src={signup} alt="" className="w-100" />
          </div>
          <div className="col-12 col-lg-8 ">
            <div className="Auth-form-container">
              <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign Up</h3>
                  <div className="form-group mt-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      name="name"
                      required
                      placeholder="Enter Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Email</label>
                    <input
                      type="mail"
                      className="form-control mt-1"
                      required
                      name="email"
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      required
                      name="password"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Confirm Password</label>

                    <input
                      type="password"
                      className="form-control mt-1 "
                      required
                      name="confirm"
                      placeholder="Confirm password"
                      onChange={(e) => setConfirmPass(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Aadhar Number</label>
                    <input
                      type="number"
                      className="form-control mt-1"
                      required
                      placeholder="Enter Aadhar Number"
                      onChange={(e) => setAadhar(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>PAN Number</label>
                    <input
                      type="number"
                      className="form-control mt-1"
                      required
                      placeholder="Enter PAN Number"
                      onChange={(e) => setPan(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload Front Side of Aadhar</Form.Label>

                      <Form.Control
                        type="file"
                        required
                        onChange={(e) => uploadFrontAadhar(e)}
                      />
                    </Form.Group>
                  </div>
                  {/* <div className="form-group mt-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload Back Side of Aadhar</Form.Label>

                      <Form.Control
                        type="file"
                        required
                        onChange={() => uploadBackAadhar()}
                      />
                    </Form.Group>
                  </div>
                  <div className="form-group mt-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload PAN Card</Form.Label>

                      <Form.Control
                        type="file"
                        required
                        onChange={() => uploadPan()}
                      />
                    </Form.Group>
                  </div> */}

                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                  <p className="forgot-password text-right mt-2">
                    <a href="/login" className="hereLink">
                      Login
                    </a>
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
