import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <img src="icons_assets/Logo.svg" alt="" />
      <nav>
        <ul className="footer__menu">
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Menu">Menu</a>
          </li>
          <li>
            <a href="Reservations">Reservations</a>
          </li>
          <li>
            <a href="Login">Login</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
