import React from "react";
// import logo from "./assets/logo.svg";
import "./App.css";
import Cards from "./components/Cards";
// import Nav from "./Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import "./Nav.css";

function App() {
  return (
    <>
      <div
        style={{ background: "linear-gradient(135deg,#ff1b6b,#45caff)" }}
        // style={{ background: "black" }}
      >
        <Hero />
        {/* <Nav /> */}
        <Cards />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
