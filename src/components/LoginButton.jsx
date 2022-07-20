import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/login" onClick={() => window.scroll(0, 0)}>
      Login / Sign Up
    </Link>
  );
};

export default LoginButton;
