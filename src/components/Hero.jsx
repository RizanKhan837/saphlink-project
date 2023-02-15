import React from "react";
import Button from "./Button";
import "../styles/hero.css";
import Contact from "../pages/Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-container">
      <h1 id="hero-main-heading">
        They're your ideas & goals, we just bring them to life.
      </h1>
      <h3 id="hero-sub-main">
        Not your average digital agency, but your strategic business partner.
      </h3>
      <div className="hero-btn-container">
        <Button className="btn-1" name="Learn More" />
        <Link to="/contact">
        <Button className="btn-1" name="Contact Us"/>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
