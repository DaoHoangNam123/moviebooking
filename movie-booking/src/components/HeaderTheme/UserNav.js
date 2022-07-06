import React from "react";
import { useSelector } from "react-redux";
import { localStorageService } from "../../services/localStorageService.js";

export default function UserNav() {
  let userInfor = useSelector((state) => state.userReducer.userInfo);
  return (
    <div>
      {userInfor ? (
        <div className=" space-x-3">
          {" "}
          <span>{userInfor?.hoTen}</span>
          <button
            className=" border-gray-700 px-5 py-2 rounded text-gray-700 border-2"
            onClick={() => {
              localStorageService.removeUserInfor(userInfor);
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="space-x-3">
          {" "}
          <button
            className=" border-red-500 px-5 py-2 rounded border-2 text-red-500 hover:bg-red-500 hover:text-white"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
