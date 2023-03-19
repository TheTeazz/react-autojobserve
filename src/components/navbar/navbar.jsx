import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export const Navbar = () => {
  return (
    <div className="">
      <div className="navbar p-3 m-0">
        <div className="">
          <p className="navbar-logo m-0">AutoJobServe</p>
        </div>

        <div className="links">
          <Link to="/" className="navLink">
            About us
          </Link>
          <Link className="navLink">our services</Link>
          <Link className="navLink" to="/dashboard">
            How it works
          </Link>
          <button className="navBtn p-2 rounded">Contact us</button>
        </div>
      </div>
    </div>
  );
};
