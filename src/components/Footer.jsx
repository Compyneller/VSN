import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LgFooter from "./LgFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom right , #007FFE, #005FC0",
      }}
    >
      <Container>
        {window.innerWidth <= 750 ? <MobileFooter /> : <LgFooter />}
      </Container>
    </div>
  );
};

export default Footer;
