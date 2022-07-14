import { Container } from "react-bootstrap";
import BestOffers from "../components/BestOffers";
import ContactUs from "../components/ContactUs";
import CustomCarousel from "../components/CustomCarousel";
import Footer from "../components/Footer";
import Lakhs from "../components/Lakhs";
import MobileCarousel from "../components/MobileCarousel";
import NavBarComp from "../components/NavBarComp";
import SellForCash from "../components/SellForCash";
import SellYourGadget from "../components/SellYourGadget";
import WhyPeopleTrustUs from "../components/WhyPeopleTrustUs";

const Home = () => {
  return (
    <>
      {window.innerWidth <= 750 ? "" : <CustomCarousel />}
      <SellForCash />
      <SellYourGadget />
      <WhyPeopleTrustUs />
      {/* <BestOffers /> */}
      <Lakhs />
      <Container>
        <ContactUs />
      </Container>
    </>
  );
};

export default Home;
