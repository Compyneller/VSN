import { Container } from "react-bootstrap";
import AdditionalServices from "../components/AdditionalServices";
import BestOffers from "../components/BestOffers";
import BuyForCash from "../components/BuyForCash";
import BuyYourGadget from "../components/BuyYourGadget";
import ContactUs from "../components/ContactUs";
import CustomCarousel2 from "../components/Custom/CustomCarousel2";
import CustomCarousel from "../components/CustomCarousel";
import Footer from "../components/Footer";
import Lakhs from "../components/Lakhs";
import MobileCarousel from "../components/MobileCarousel";
import NavBarComp from "../components/NavBarComp";
import SellForCash from "../components/SellForCash";
import SellYourGadget from "../components/SellYourGadget";
import TopHeader from "../components/TopHeader/TopHeader";
import WhyPeopleTrustUs from "../components/WhyPeopleTrustUs";

const Home = () => {
  return (
    <>
      {/* {window.innerWidth <= 750 ? "" : <TopHeader />} */}
      <TopHeader />
      <SellForCash />
      <BuyForCash />
      <AdditionalServices />
      <SellYourGadget />
      <BuyYourGadget />
      <WhyPeopleTrustUs />
      {/* <BestOffers /> */}
      <Lakhs />

      <ContactUs />
    </>
  );
};

export default Home;
