import React from "react";
// import logo from "./assets/logo.svg";
import "./App.css";
import Cards from "./Cards";
// import Nav from "./Nav";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
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
        {/* <div className="App">
  </div> */}
        <Cards />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
