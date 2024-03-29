import "./App.css";
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarComp from "./components/NavBarComp";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import Footer from "./components/Footer";
import FooterStrip from "./components/FooterStrip";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Pricing from "./pages/Pricing";
import WarrantyPolicy from "./pages/WarrantyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Term from "./pages/Term";
import Legal from "./pages/Legal";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./components/Comp.scss";
import EnterUserDetail from "./pages/EnterUserDetail";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "toastify-js/src/toastify.css";
import HowVsnWork from "./pages/HowVsnWork";
import OnlineReg from "./pages/OnlineReg";
import Vendors from "./pages/Vendors";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/warranty" element={<WarrantyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/tc" element={<Term />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userdetail" element={<EnterUserDetail />} />
          <Route path="/how" element={<HowVsnWork />} />
          <Route path="/onlinereg" element={<OnlineReg />} />
          <Route path="/vendor" element={<Vendors />} />
        </Routes>
        <Footer />
        <FooterStrip />
      </BrowserRouter>
    </div>
  );
}

export default App;
