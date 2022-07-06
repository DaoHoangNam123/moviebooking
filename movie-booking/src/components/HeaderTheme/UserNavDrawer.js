import React from "react";
import { useSelector } from "react-redux";
import { localStorageService } from "../../services/localStorageService.js";

export default function UserNavDrawer() {
  let userInfor = useSelector((state) => state.userReducer.userInfo);
  console.log("userInfor: ", userInfor);
  return (
    <div className="border-b-2 pb-6 mb-6">
      {userInfor ? (
        <div className="flex flex-col justify-start items-start">
          {" "}
          <span>{userInfor?.hoTen}</span>
          <button
            className="flex border-gray-700 py-2 mt-3 rounded text-gray-700 border-2 w-20 justify-center items-center"
            onClick={() => {
              localStorageService.removeUserInfor(userInfor);
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex space-x-3 flex-col justify-start items-start">
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
