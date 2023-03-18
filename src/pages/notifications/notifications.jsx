import React from "react";
import "./notifications.css";
import nImage1 from "../../assets/testimonial1.jpeg";
import nImage2 from "../../assets/testimonial2.jpeg";

export const Notifications = () => {
  return (
    <div>
      <button
        className="notifications-back-btn d-inline-block p-2 mt-4 mb-4 ms-4 rounded"
        aria-hidden="true"
      >
        go back
      </button>

      <div className="bell">
        <i className="fa fa-bell-o fa-3x mb-2 mt-2" aria-hidden="true"></i>
      </div>

      <div className="container mb-4">
        <div className="header  d-flex justify-content-between align-items-center px-2 pt-3 pb-0">
          <div className="">
            <p>
              A new feature is coming!
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </p>
          </div>

          <div className="date">
            <p>12/12/2022</p>
          </div>
        </div>

        <div className="content shadow d-md-flex p-3">
          <div className="img rounded me-2 col-md-5 d-flex align-items-center justify-content-center">
            <img src={nImage1} alt="" />
          </div>

          <div className="story col-md-6 mt-4">
            <p className="head mb-0">New Feature</p>
            <br />
            <p className="text mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat....
            </p>
            <br />

            <div className="text-center mt-0">
              <button className="readMoreBtn p-2 rounded">Read more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-2">
        <div className="header container-fluid d-flex justify-content-between align-items-center px-2 pt-3 pb-0">
          <div className="">
            <p>
              You can now upload videos!
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </p>
          </div>

          <div className="date">
            <p>31/07/2022</p>
          </div>
        </div>

        <div className="content shadow d-md-flex p-3">
          <div className="img rounded me-2 col-md-5 d-flex align-items-center justify-content-center">
            <img src={nImage2} alt="" />
          </div>

          <div className="story col-md-6 mt-4">
            <p className="head mb-0">Videos update now available</p>
            <br />
            <p className="text mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat....
            </p>
            <br />

            <div className="text-center mt-0">
              <button className="readMoreBtn p-2 rounded">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
