import React from "react";
import "./hero.css";
import heroImage from "../../assets/heroImage.png";

export const Hero = () => {
  return (
    <div className="hero d-flex flex-column flex-sm-row p-5">

      <div className="heroLeft col-sm-6 mt-5 mt-sm-0 d-flex align-items-center justify-content-center order-2 order-sm-1">
        <div className="textArea">
          <span>WELCOME TO</span>
          <h1 className="headline">AutoJobServe</h1>
          <div className="heroBtns">
            <button className="p-2 me-2">Register</button>
            <button className="p-2">Login</button>
          </div>
        </div>
      </div>

      <div className="heroRight col-sm-6 d-flex align-items-center justify-content-center order-1 order-sm-2">
        <img className="col-5" src={heroImage} alt="" />
      </div>
    </div>
  );
};
