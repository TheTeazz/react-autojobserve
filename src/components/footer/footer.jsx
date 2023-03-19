import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer p-3">
      <div className="d-flex justify-content-around">
        <div className="Company">
          <div className="">
            <p>
              <b className="fhead">Company</b>
            </p>
          </div>
          <div className="list d-flex flex-column">
            <Link className="foot-link">Home</Link>
            <Link className="foot-link">About us</Link>
            <Link className="foot-link">Our services</Link>
            <Link className="foot-link">Testimonials</Link>
            <Link className="foot-link">contact us</Link>
            <Link to="/faq" className="foot-link">FAQs</Link>
          </div>
        </div>

        <div className="Connect">
          <p>
            <b className="fhead">Connect with us</b>
          </p>
          <div className="list d-flex flex-column">
            <a className="">
              <BsFacebook /> Facebook
            </a>
            <a className="">
              <BsInstagram /> Instagram
            </a>
            <a className="">
              <BsLinkedin /> LinkedIn
            </a>
            <a className="">
              <BsTwitter /> Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-center text-success">
          <p>copyright 2022 Bincom</p>
        </div>
      </div>
    </div>
  );
};
