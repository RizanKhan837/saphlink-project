//import "bootstrap/dist/css/bootstrap.min.css";
import { Button as BsButton } from "react-bootstrap";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "../styles/footer.css";
import { Link } from 'react-router-dom';
import Contact from "../pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-4-dark">
      <footer className="background" />
      <div className="footer-ui">
        <div className="bostel-llc">© 2019 Saphlink, LLC</div>
        <b className="request-more-informa">Bring Your Ideas To Life</b>
        <b className="upskill-for-a">Do It Today.</b>
        <div className="bostel-technologies">
        Saphlink is a group of individuals with numerous decades of experience in the fields marketing and software.
        </div>
        <Button
          className="contact-us"
          variant="solid"
          w="197.3953094482422px"
          colorScheme="cyan"
          onclick={<Route path="contact" element={<Contact />} />}
          rightIcon={<ArrowForwardIcon />}
        >
          Contact Us
        </Button>
        <img className="footer-ui-child" alt="" src="../line-2.svg" />
        <nav className="team-parent">
          <button className="team">About Us</button>
          <button className="case-studies">Services</button>
          <button className="publications">Contact Us</button>
        </nav>
        <nav className="social">
          <BsButton className="facebook" variant="outline-primary" background-image="https://icons8.com/icon/118490/facebook">
            f
          </BsButton>
          <BsButton className="youtube" variant="outline-primary" background-image="https://icons8.com/icon/84884/instagram">
            yt
          </BsButton>
          <BsButton className="instagram" variant="outline-primary" background-image="https://icons8.com/icon/84884/instagram">
            in
          </BsButton>
          <BsButton className="linkedin" variant="outline-primary" background-image="https://icons8.com/icon/102907/twitter">
            li
          </BsButton>
        </nav>
        <img
          className="logo-icon"
          alt=""
          loading="eager"
          src="../logo@2x.png"
        />
      </div>
    </div>
  );
};

export default Footer;
