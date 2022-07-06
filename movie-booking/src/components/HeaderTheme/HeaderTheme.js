import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserNav from "./UserNav";
import headertheme from "./HeaderTheme.css";
import { useWindowSize } from "../../Hook/useWindowSize";
import HeaderDrawer from "./HeaderDrawer";
export default function HeaderTheme() {
  let navigate = useNavigate();
  let windowSize = useWindowSize();
  let renderHeader = () => {
    if (windowSize.width > 992) {
      return (
        <div className="h-14 w-full flex items-center justify-between shadow-lg px-20 py-10">
          <NavLink to="/" className="h-14 w-52">
            <span>
              <img
                className="w-full h-full"
                src="https://www.galaxycine.vn/website/images/galaxy-logo.png"
              />
            </span>
          </NavLink>
          <div className="space-x-5 text-sm font-bold" id="header-navBar">
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              <span className="text-black">Phim đang chiếu</span>
            </a>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              <span className="text-black">Cụm rạp</span>
            </a>
          </div>
          <UserNav />
        </div>
      );
    } else {
      return <HeaderDrawer />;
    }
  };
  return <div>{renderHeader()}</div>;
}
