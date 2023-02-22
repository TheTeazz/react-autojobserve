import React from "react";
import "./callToAction.css";
import ctaImage from "./../../assets/ctaImage.png";

export const CallToAction = () => {
  return (
    <div className="cta p-3">
      <div className="d-flex align-items-center justify-content-center p-4">
        <div className="ctaLeft col-sm-5">
          <h4>Looking to take the next step in your career?</h4>
          <button className="p-2">Get started</button>
        </div>
        <div className="ctaRight col-sm-5 d-flex align-items-center justify-content-center">
          <img className="col-6" src={ctaImage} alt="" />
        </div>
      </div>
    </div>
  );
};
