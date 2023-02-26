import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="matter_navbar">
      <div className="matter_navbar-contents">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#wmatter">What is Matter</a>
        </p>
        <p>
          <a href="#creators">Creators</a>
        </p>
        <p>
          <a href="#features">Features</a>
        </p>
      </div>
      <div className="matter_navbar-signup">
      <a href="#signup">
          <button type="button">Sign Up</button>
          </a>
      </div>
    </div>
  );
};

export default Navbar;
