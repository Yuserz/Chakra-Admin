import React from "react";
import "../Styles/Footer.less";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="site-info">
        © 2022, Made with ❤️ by <span className="site-brand">Tektorch </span>{" "}
        for a better web
      </div>
      <div className="footer-nav">
        <a href="">About us</a>
        <a href="">Privacy</a>
        <a href="">Blog</a>
        <a href="">License</a>
      </div>
    </footer>
  );
}
