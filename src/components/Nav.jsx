import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/menu">Menu</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
