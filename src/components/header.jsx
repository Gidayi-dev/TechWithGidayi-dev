import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "/src/assets/icon.png";

function Header() {
  return (
    <div className="header-section">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h4>Tech With Gidayi</h4>
      </div>
      <div className="bar">
        <div className="links">
          <Link to="/blogs">Blogs</Link>
        </div>
        <div className="links">
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
