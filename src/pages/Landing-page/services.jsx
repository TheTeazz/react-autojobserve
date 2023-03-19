import React from "react";
import "./services.css";
import services from "./../../assets/services.png";

export const Services = () => {
  return (
    <div className="services p-5">

      <div className="serviceTitle text-center">
        <h4>Our services</h4>
      </div>

      <div className="serve d-flex align-items-center justify-content-center mt-3">
        <div className="d-flex flex-column align-items-center justify-content-center text-center">
          <img className="col-4" src={services} alt="" />
          <p className="services-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, assumenda!</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center justify-content-center text-center">
            <img className="col-4" src={services} alt="" />
            <p className="services-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sequi?</p>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center mt-5 text-center">
            <img className="col-4" src={services} alt="" />
            <p className="services-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, dolor.</p>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center text-center">
          <img className="col-4" src={services} alt="" />
          <p className="services-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, minus?</p>
        </div>
      </div>
    </div>
  );
};
