import React from "react";
import "./notifications.css";
import nImage1 from "../../assets/testimonial1.jpeg";
import { Link, useNavigate } from "react-router-dom";

export const Notifications = () => {
  const history = useNavigate();

  function handleHistory() {
    history.goBack();
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid d-md-flex justify-content-between mx-3 px-md-5 pt-2 pb-2">
          <Link class="notifications-logo fs-6" to="/">
            AutoJobServe
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto text-center">
              <li class="nav-item">
                <Link to="/" class=" p-1 me-1">
                  <button class="notification-sign-out p-1" aria-hidden="true">
                    sign out
                  </button>
                </Link>
              </li>
              <li class="nav-item">
                <div
                  class="user-image d-flex align-items-center justify-content-center"
      
                >
                  ET
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <button
        onClick={handleHistory}
        className="notifications-back-btn d-inline-block p-2 mt-3 mb-4 ms-4 "
      >
        Go back
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
            <img className="notifications-image" src={nImage1} alt="" />
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
    </div>
  );
};
