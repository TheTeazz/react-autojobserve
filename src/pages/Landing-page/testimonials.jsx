import React from "react";
import "./testimonials.css";
import image1 from "./../../assets/testimonial1.jpeg";
import image2 from "./../../assets/testimonial2.jpeg";
import image3 from "./../../assets/testimonial3.jpeg";

export const Testimonials = () => {
  return (
    <div className="testimonials p-5">
      <div className="testimonialTitle text-center mb-4">
        <h4>Testimonials</h4>
      </div>

      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-around">
        <div className="testimonialCard col-10 col-sm-2 my-4">
          <div className="testTop p-2 text-center">
            <img className="col-4 rounded-5" src={image1} alt="" />
            <p className="testifier m-0">Baba Voss</p>
          </div>
          <div className="testBottom p-3">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              facere reiciendis aliquam cum ex totam.
            </p>
          </div>
        </div>
        <div className="testimonialCard col-10 col-sm-2 my-4">
          <div className="testTop p-2 text-center">
            <img className="col-4 rounded-5" src={image2} alt="" />
            <p className="testifier m-0">Harley Quinn</p>
          </div>
          <div className="testBottom p-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              similique fugiat sit doloribus voluptatibus tenetur?
            </p>
          </div>
        </div>
        <div className="testimonialCard col-10 col-sm-2 my-4">
          <div className="testTop p-2 text-center">
            <img className="col-4 rounded-5" src={image1} alt="" />
            <p className="testifier m-0">Tyrion Lannister</p>
          </div>
          <div className="testBottom p-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              vitae, atque consectetur repellat sapiente dignissimos?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
