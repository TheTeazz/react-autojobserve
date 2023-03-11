import React from "react";
import "./newpassword.css";
import { Link } from "react-router-dom";

export const NewPassword = () => {
  return (
    <div className="newPassword d-flex flex-column align-items-center justify-content-center">
      <div className="">


        <div className="text-center">
          <h3>
            <Link className="resetHeader" to="/">
              AutoJobServe
            </Link>{" "}
          </h3>
        </div>

        <form className="">
          <div className="d-flex flex-column mb-2 mt-4">
            <label className="npLabel" htmlFor="new password">New password</label>
          <input className="mb-2" type="password" name="new password"  id="" />
          <label className="npLabel" htmlFor="confirm new password">Confirm new password</label>
          <input type="password" name="confirm new password" id="" />
          <p className="newPasswordErrorMessage">New password and confirm new password do not match</p>
          </div>
          
          <div className="col-12 bbh d-flex justify-content-between">
            <button className="cancelBtn col-5 p-1">Cancel</button>
            <button className="changePasswordBtn col-5 p-1">Change</button>
          </div>
        </form>
      </div>
    </div>
  );
};
