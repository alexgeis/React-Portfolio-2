import userEvent from "@testing-library/user-event";
import React from "react";
import GitHubLogo from "./assets/GitHub-Mark-32px.png";
// import "./Nav.css";

export default function Nav() {
  const navStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontWeight: "300",
    border: "white 2px solid",
    borderRadius: "19px",
  };

  const navItemStyle = {
    display: "inline-block",
    position: "relative",
    verticalAlign: "middle",
    padding: "10px",
    marginLeft: "7px",
    marginRight: "7px",
    color: "black",
    fontSize: "15px",
    cursor: "pointer",
  };
  return (
    <>
      <header className="navigation" style={navStyle}>
        <a className="navItemStyle" style={navItemStyle} href="#work">
          Work
        </a>
        <a className="navItemStyle" style={navItemStyle} href="#contact">
          Contact
        </a>
        <a className="navItemStyle" style={navItemStyle} href="#about">
          About
        </a>
        <a
          className="github navItemStyle"
          style={navItemStyle}
          href="https://github.com/alexgeis/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GitHubLogo} alt="github logo"></img>
        </a>
      </header>
    </>
  );
}
