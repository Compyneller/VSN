import React from "react";
import { Container } from "react-bootstrap";
import otp from "../assets/otp.svg";
const SignUp = () => {
  return (
    <div className="loginContainer">
      <Container>
        <div className="row">
          <div className="col-12 col-lg-4 hidemobile">
            <img src={otp} className="w-100" alt="" />
          </div>
          <div className="col-12 col-lg-8 d-flex align-items-center justify-content-center">
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign Up</h3>
                  <div className="form-group mt-3">
                    <label>Mobile Number</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      placeholder="Enter Mobile Number"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-dark">
                      Send OTP
                    </button>
                  </div>
                  <div className="form-group mt-3">
                    <label>OTP</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Enter OTP"
                    />
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

export default SignUp;
