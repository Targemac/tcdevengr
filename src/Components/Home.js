import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  console.log("home page");
  return (
    <div>
      <h1>Home</h1>

      <h2>Welcome to the homepage!</h2>

      <p>You can do this, I believe in you.</p>

      <nav>
        <Link to="/about">About</Link>
      </nav>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Home;
