import React from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/Footer.Modules.css";

const Footer = () => {
  console.log("main footer");
  return (
    <footer>
      <section className="footer">
        <div className="foot-row">
          <Link to="/" className="foot-link">
            home
          </Link>
        </div>
        <div className="foot-row">
          <Link to="/services" className="foot-link">
            services
          </Link>
        </div>
        <div className="foot-row">
          <Link to="/portfolio" className="foot-link">
            portfolio
          </Link>
        </div>
        <div className="foot-row">
          <Link to="/contact" className="foot-link">
            contact me
          </Link>
        </div>
      </section>
      <section className="footer-2">
        <div>
          &copy;2022. tcdevengr, all rights reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
