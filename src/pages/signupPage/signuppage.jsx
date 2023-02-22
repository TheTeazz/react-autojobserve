import React from "react";
import { Link } from "react-router-dom";
import "./signuppage.css";
import signupImg from "../../assets/signupImg.jpeg";

export const Signuppage = () => {
  return (
    <div className="signup d-flex flex-column align-items-center justify-content-between">
      <div className="col-12 d-flex justify-content-start p-2">
        <p className="col-4 mb-0 p-2">
          <Link className="autojob" to="/">
            AutoJobServe
          </Link>
        </p>
      </div>

      <div className="d-flex flex-column flex-md-row">
        <div className="signUpImage d-flex align-items-center justify-content-center col-md-5 ">
          <img className="col-7 rounded-5" src={signupImg} alt="" />
        </div>

        <div className="col-md-7 p-2 mt-4">
          <form className="hag shadow col-md-9 p-4" action="">
            <p className="signupHeaderText text-center">
              <b>Sign Up</b>
            </p>

            <div className="firstAndLastName col-12 d-flex justify-content-between mb-2">
              <input className="col-5" type="text" placeholder="First Name" />
              <input className="col-6" type="text" placeholder="Last Name" />
            </div>
            <div className="email mb-2">
              <input
                className="col-12"
                type="email"
                name=""
                id=""
                placeholder="Email address"
              />
            </div>
            <div className="usernameAndJobTitle d-flex justify-content-between mb-2">
              <input
                className="col-5"
                type="text"
                name=""
                id=""
                placeholder="Username"
              />
              <input
                className="col-6"
                type="text"
                name=""
                id=""
                placeholder="Job Title"
              />
            </div>
            <div className="password d-flex justify-content-between mb-2">
              <input
                className="col-5"
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
              <input
                className="col-6"
                type="password"
                name=""
                id=""
                placeholder="Confirm Password"
              />
            </div>
            <div className="location mb-2">
              <textarea
                className="signupLocation col-12"
                name=""
                id=""
                placeholder="Enter your location"
              ></textarea>
            </div>
          </form>

          <div className="signupMisc d-flex flex-column align-items-center flex-md-row mt-3">
            <button className="col-6 col-sm-2 p-3 p-sm-2 rounded mx-2 my-2">Sign Up</button>
            <Link className="sMiscBtn" to="/login">
              Already have an AutoJobServe account? Log in
            </Link>
          </div>
        </div>
      </div>

      <div className="signupFooter">
        <p>copyright @bincom 2022</p>
      </div>
    </div>
  );
};
