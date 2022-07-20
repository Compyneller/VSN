import React, { useState } from "react";
import { Container, Row, Form, InputGroup } from "react-bootstrap";
import signup from "../assets/signup.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
const EnterUserDetail = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [frontAadhar, setFrontAadhar] = useState("");
  const [backAadhar, setBackAadhar] = useState("");
  const [panImage, setPanImage] = useState("");

  // ==================================================Previews image===========================================

  const [frontAadharPrev, setFrontAadharPrev] = useState("");
  const [backAadharPrev, setBackAadharPrev] = useState("");
  const [panImagePrev, setPanImagePrev] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        mobile_no: `${localStorage.getItem("mobileNumber")}`,
        name: `${name}`,
        country_code: 91,
        email: `${email}`,
        password: `${password}`,
        aadhar_number: `${aadhar}`,
        pan_number: `${pan}`,
      };

      const response = await axios.post(
        "https://34.207.41.229:4100/vsnSellSoutions/signup",
        body,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        Toastify({
          text: "Successfully Registered",

          duration: 3000,
        }).showToast();

        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadFrontAadhar = async (e) => {
    const d = new Date();
    setFrontAadhar(e.target.files[0]);

    let formData = new FormData();
    formData.append("file", frontAadhar);

    const response = await axios.post(
      "https://34.207.41.229:4100/vsnSellSoutions/uploadIds",
      formData,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setFrontAadharPrev(URL.createObjectURL(e.target.files[0]));
  };

  const uploadBackAadhar = async (e) => {
    const d = new Date();
    setBackAadhar(e.target.files[0]);
    let formData = new FormData();
    formData.append("file", backAadhar);

    const response = await axios.post(
      "https://34.207.41.229:4100/vsnSellSoutions/uploadIds",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setBackAadharPrev(URL.createObjectURL(e.target.files[0]));
  };
  const uploadPan = async (e) => {
    const d = new Date();
    setPanImage(e.target.files[0]);

    let formData = new FormData();
    formData.append("file", panImage);

    const response = await axios.post(
      "https://34.207.41.229:4100/vsnSellSoutions/uploadIds",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setPanImagePrev(URL.createObjectURL(e.target.files[0]));
  };
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
                      type="tel"
                      className="form-control mt-1"
                      required
                      placeholder="Enter Aadhar Number"
                      onChange={(e) => setAadhar(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>PAN Number</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      required
                      placeholder="Enter PAN Number"
                      onChange={(e) => setPan(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload Front Side of Aadhar</Form.Label>
                      <div className="row g-1">
                        <div className="col-10  d-flex">
                          <input
                            type="file"
                            required
                            className="m-auto form-control"
                            accept="image/png, image/jpeg"
                            id="inputGroupFile01"
                            onChange={(e) => uploadFrontAadhar(e)}
                          />
                        </div>
                        <div className="col-2 d-flex ">
                          <img
                            src={
                              frontAadharPrev === ""
                                ? "https://img.icons8.com/color/344/membership-card.png"
                                : frontAadharPrev
                            }
                            alt=""
                            className="w-100 m-auto"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="form-group mt-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload Back Side of Aadhar</Form.Label>
                      <div className="row g-1">
                        <div className="col-10 d-flex">
                          <input
                            type="file"
                            required
                            className="m-auto form-control"
                            accept="image/png, image/jpeg"
                            id="inputGroupFile02"
                            onChange={(e) => uploadBackAadhar(e)}
                          />
                        </div>
                        <div className="col-2">
                          <img
                            src={
                              backAadharPrev === ""
                                ? "https://img.icons8.com/color/344/membership-card.png"
                                : backAadharPrev
                            }
                            alt=""
                            className="w-100 m-auto"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="form-group mt-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload PAN Card</Form.Label>
                      <div className="row g-1">
                        <div className="col-10 d-flex ">
                          <input
                            type="file"
                            required
                            className="m-auto form-control"
                            accept="image/png, image/jpeg"
                            id="inputGroupFile03"
                            onChange={(e) => uploadPan(e)}
                          />
                        </div>
                        <div className="col-2">
                          <img
                            src={
                              panImagePrev === ""
                                ? "https://img.icons8.com/color/344/membership-card.png"
                                : panImagePrev
                            }
                            alt=""
                            className="w-100 m-auto"
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>

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
