import React from "react";
import { NavLink } from "react-router-dom";
import FormRegister from "./FormRegister/FormRegister";
import "../../assets/css/RegisterPage.css";
export default function RegisterPage() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full items-center justify-center">
        <NavLink to="/">
          <span>
            <img
              className="w-60 h-20 mx-5 py-5"
              src="https://www.galaxycine.vn/website/images/galaxy-logo.png"
              alt="logo"
            />
          </span>
        </NavLink>
        <div
          id="login-panel"
          className="flex h-2/3 mx-auto p-5 rounded justify-center items-center"
          style={{ minHeight: "500px" }}
        >
          <div className="lg:w-1/3 w-2/3">
            <FormRegister />
          </div>
        </div>
      </div>
    </div>
  );
}
