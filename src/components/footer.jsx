import React from "react";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-logo">
          <h4>Tech With Gidayi</h4>
          <p>
            Stay updated with the latest in tech, trends, and tutorials every
            week!
          </p>
        </div>

        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <Link to="/blogs">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-socials">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a
              href="https://github.com/Gidayi-Dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/IMillyannah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="https://linkedin.com/millyannah-gidayi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Tech With Gidayi. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
