// Footer.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer
      className="bg-dark text-white py-4 mt-auto"
      style={{ borderTop: "3px solid #25b49c" }}
    >
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5 className="font-weight-bold">
              SnapBuy.{" "}
              <span style={{ color: "#25b49c", fontStyle: "italic" }}>
                MarketPlace
              </span>
            </h5>
            <p>Shop the best products, hassle-free.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/help" className="text-white text-decoration-none">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/terms" className="text-white text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-3">
            <h5>Connect with Us</h5>
            <a
              href="https://facebook.com"
              className="text-white me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-white me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-white me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center mt-3">
          <small>&copy; {new Date().getFullYear()} SnapBuy. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
