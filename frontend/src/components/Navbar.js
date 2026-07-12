import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">⚙</span>
        <span className="logo-text">Automatify</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#ocr">OCR</a></li>
        <li><a href="#speech">Speech</a></li>
        <li><a href="#translate">Translate</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;