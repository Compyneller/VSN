import React from "react";
import { Button, NavDropdown } from "react-bootstrap";

const LoginuserDetail = () => {
  const datas = JSON.parse(localStorage.getItem("userDetail"));

  return (
    <NavDropdown
      id="nav-dropdown-dark-example"
      title={datas?.data[0].name}
      menuVariant="light"
    >
      <NavDropdown.Item>Mobile no. {datas?.data[0].mobile_no}</NavDropdown.Item>
      <NavDropdown.Item>{datas?.data[0].email}</NavDropdown.Item>

      <NavDropdown.Item>
        <Button
          variant="danger"
          onClick={() => {
            localStorage.removeItem("userDetail");
            localStorage.setItem("in", false);
            window.location.reload();
          }}
        >
          Logout
        </Button>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default LoginuserDetail;
