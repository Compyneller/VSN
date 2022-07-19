import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import otpImage from "../assets/otp.svg";
import axios from "axios";
import Toastify from "toastify-js";
const SignUp = () => {
  const history = useNavigate();
  const [value, setValue] = useState("");
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState(false);
  const [otpDetails, setOtpDetails] = useState({});
  const [sendOtp, setSendOtp] = useState("Send Otp");
  const sendOTP = async () => {
    const json = {
      mobile_no: `+91${value}`,
    };

    const { data } = await axios.post(
      "https://34.207.41.229:4100/twilio/sendCode",
      json
    );
    console.log(data);
    if (data.status === "pending") {
      Toastify({
        text: "OTP Sent",

        duration: 3000,
      }).showToast();
      setOtpDetails(data);
      var count = 60;
      const timer = setInterval(function () {
        setSendOtp(`Resend Otp ${count--}`);
        if (count === -1) {
          clearInterval(timer);
          setSendOtp("Send Otp");
        }
      }, 1000);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    const json = {
      to: `+91${value}`,
      code: `${otp}`,
    };
    console.log(json);
    const { data } = await axios.post(
      "http://34.207.41.229:4100/twilio/verifyCode",
      json
    );
    localStorage.setItem("Phone", otpDetails.phone);
    if (data.msg === "Otp verified") {
      alert("Otp verified");
      history("/register-2");
    } else {
      setMsg(true);
      history("/userdetail");
    }
  };
  return (
    <div className="loginContainer">
      <Container>
        <div className="row">
          <div className="col-12 col-lg-4 hidemobile">
            <img src={otpImage} className="w-100" alt="" />
          </div>
          <div className="col-12 col-lg-8 d-flex align-items-center justify-content-center">
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign Up</h3>
                  <div className="form-group mt-3">
                    <label>Mobile Number</label>
                    <input
                      type="number"
                      className="form-control mt-1"
                      placeholder="Enter Mobile Number"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button
                      type="button"
                      className="btn btn-dark"
                      disabled={sendOtp === "Send Otp" ? false : true}
                      onClick={() => sendOTP()}
                    >
                      {sendOtp}
                    </button>
                  </div>
                  <div className="form-group mt-3">
                    <label>OTP</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => verifyOtp(e)}
                    >
                      Submit
                    </button>
                  </div>
                  <p className="forgot-password text-right mt-2">
                    <a
                      href="/login"
                      className="hereLink"
                      style={{ fontWeight: "bold" }}
                    >
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

export default SignUp;
