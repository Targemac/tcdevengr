import React from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/Header.Modules.css";

const Header = () => {
  console.log("main header");
  return (
    <div className="header">
      <div className="brand-name-box"> <Link to="/" className="brand-name">tcdevengr</Link></div>
      <nav className="main-nav-links">
        <div className="nav-links">
          <Link to="/" className="nav-link">home</Link>
        </div>
        <div className="nav-links">
          <Link to="/services" className="nav-link">services</Link>
        </div>
        <div className="nav-links">
          <Link to="/portfolio" className="nav-link">portfolio</Link>
        </div>
        <div className="nav-links">
          <Link to="/contact" className="nav-link">contact me</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
