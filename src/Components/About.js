import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  console.log("about page");
  return (
    <div>
      <h1>About page</h1>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default About;
