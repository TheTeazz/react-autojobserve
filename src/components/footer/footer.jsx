import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

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
            <a className="">Home</a>
            <a className="">About us</a>
            <a className="">Our services</a>
            <a className="">Testimonials</a>
            <a className="">contact us</a>
            <a className="">FAQs</a>
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
