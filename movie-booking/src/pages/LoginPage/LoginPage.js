import React from "react";
import { NavLink } from "react-router-dom";
import FormLogin from "./FormLogin/FormLogin";
import loginpage from "./LoginPage.css";
export default function LoginPage() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full items-center justify-center">
        <NavLink to="/">
          <span>
            <img
              className="w-60 h-20 mx-5 py-5"
              src="https://www.galaxycine.vn/website/images/galaxy-logo.png"
            />
          </span>
        </NavLink>
        <div
          id="login-panel"
          className="flex h-2/3 mx-auto rounded justify-center items-center"
          style={{ minHeight: "500px" }}
        >
          <div className="lg:w-1/2 w-2/3">
            <FormLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
