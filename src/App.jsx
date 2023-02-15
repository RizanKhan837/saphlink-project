import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cube from "./components/Cube";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById("root"));
