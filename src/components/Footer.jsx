import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LgFooter from "./LgFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <div style={{ background: "#303F9F" }}>
      <Container>
        {window.innerWidth <= 750 ? <MobileFooter /> : <LgFooter />}
      </Container>
    </div>
  );
};

export default Footer;
