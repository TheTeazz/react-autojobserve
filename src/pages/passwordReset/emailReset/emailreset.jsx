import React from "react";
import { Link } from "react-router-dom";
import "./emailreset.css";

export const EmailReset = () => {
  return (
    <div className="emailreset d-flex flex-column align-items-center justify-content-center">
      <div className="col-12">
        <div className="text-center">
          <h3 ><Link className="resetHeader" to="/">AutoJobServe</Link> </h3>
        </div>

        <div className="d-flex flex-column align-items-center justify-content-center">
          <p className="passwordResetInstruction col-sm-6 p-3 text-center">Enter the email address associated with your account and we'll send you a link to reset your password</p>

          <form className="forma d-flex flex-column col-sm-3" action="">
            <input className="resetInput p-2" type="email" name="" placeholder="Enter email" id="" />
            <button className="resetBtn col-sm-4 mt-2 p-2"><Link className="resetBtn" to="/newpassword">Reset password</Link> </button>
          </form>

          <Link className="returnToLogin mt-5" to="/login">Return to login</Link>
        </div>
      </div>
    </div>
  );
};
