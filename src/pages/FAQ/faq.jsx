import React from "react";
import { Link } from "react-router-dom";
import './faq.css'

export const Faq = () => {
  return (
    <div>
      <div class="bod container-fluid col-md-8 d-flex flex-column justify-content-center">
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container-fluid d-md-flex justify-content-between mx-3 px-md-5 pt-2 pb-2">
            <a class="navbar-brand fs-6 fw-bold" href="/">
              AutoJobServe
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto text-center">
                <Link class="nav-item" to='/login'>
                  <input
                    type="button"
                    value="Log in"
                    class="loginBtn p-2"
                  />
                </Link>
                <Link class="nav-item" to="/signup">
                  <input
                    type="button"
                    value="Sign up"
                    class="signupBtn p-2"
        
                  />
                </Link>
              </ul>
            </div>
          </div>
        </nav>

        <h5 class="text-center">Frequently asked questions</h5>
        <div class="">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Is there a free trial available?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostru
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Is there a free trial available?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostru
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Is there a free trial available?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostru
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="" class="mt-3">
          Return to home
        </a>
      </div>

      <div class="foot fixed-bottom container-fluid d-flex flex-column align-items-center justify-content-center">
        <b>Still have questions?</b>
        <p class="col-9 text-center">
          Can’t find the answer you were looking for? Please chat to our
          friendly team
        </p>
        <button class="footerBtn p-2 rounded">Contact us</button>
      </div>
    </div>
  );
};
