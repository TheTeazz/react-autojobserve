import React from "react";
import "./loginpage.css";
import { Link } from "react-router-dom";
import loginImg from "../../assets/loginImg.png";

export const LoginPage = () => {
  return (
    <div className="login d-flex flex-column align-items-center justify-content-between">
      <div className="col-12 d-flex justify-content-start p-2">
        <p className="col-4 mb-0 p-2">
          <Link className="autojob" to="/">AutoJobServe</Link>
        </p>
      </div>

      <div className="d-flex flex-column flex-md-row">
        <div className="loginImage d-flex align-items-center justify-content-center col-md-5 ">
          <img className="col-5 rounded-5" src={loginImg} alt="" />
        </div>

        <div className="col-md-7 p-2 mt-4">
          <p className="loginHeaderText text-center">
            <b>Good to see you again!</b>
          </p>
          <form
            className="loginForm d-flex flex-column align-items-center justify-content-center p-5 rounded shadow"
            action=""
          >
            <div className="loginInput w-100 d-flex flex-column">
              <input
                className="rounded shadow"
                type="text"
                name=""
                placeholder="Enter Username"
                id=""
              />
              <input
                className="rounded shadow"
                type="password"
                name=""
                placeholder="Enter Password"
                id=""
              />
            </div>

            <button className="signInBtn w-50 p-1 rounded-5"> Sign in</button>

            <div className="loginCta d-flex justify-content-between mt-4">
              <Link className="loginCta mx-4" to="/signup">Sign up</Link>
              <Link className="loginCta mx-4" to="/emailreset">Forgot password?</Link>
            </div>
          </form>
        </div>
      </div>

      <div className="loginFooter">
        <p>copyright @bincom 2022</p>
      </div>
    </div>
  );
};
