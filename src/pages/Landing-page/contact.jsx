import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact p-5">
      <div className="contactTitle text-center">
        <h4>Get in touch</h4>
      </div>

      <form className=" d-flex flex-column align-items-center justify-content-center">
        <div className="contactForm d-flex flex-column align-items-center">
          <input
            type="text"
            name="Full Name"
            placeholder="Full Name"
            className="my-1 p-1"
            id=""
          />

          <input
            type="text"
            name="Enter Email"
            placeholder="Enter email"
            id=""
            className="my-1 p-1"
          />

          <input
            type="text"
            name="Subject"
            placeholder="Subject"
            className="my-1 p-1"
            id=""
          />

          <textarea
            name="Send us a message"
            id=""
            cols="23"
            rows="5"
            placeholder="Type your message"
            className="my-1 p-1"
          ></textarea>
        </div>

        <button className="contactBtn p-2 my-3 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
