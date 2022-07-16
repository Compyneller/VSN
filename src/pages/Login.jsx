import React from "react";
import { Container } from "react-bootstrap";
import login from "../assets/login.svg";
const Login = () => {
  return (
    <div className="loginContainer">
      <Container>
        <div className="row">
          <div className="col-12 col-lg-4 hidemobile">
            <img className="w-100" src={login} alt="" />
          </div>
          <div className="col-12 col-lg-8 d-flex align-items-center justify-content-center">
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign In</h3>
                  <div className="form-group mt-3">
                    <label>Mobile Number / Email</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      placeholder="Enter Mobile Number / Email"
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
                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                  <p className="forgot-password text-right mt-2">
                    New User Sign Up <a href="/signup">here</a>
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

export default Login;
