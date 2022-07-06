import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserNavDrawer from "./UserNavDrawer";
const HeaderDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  let navigate = useNavigate();
  return (
    <div className="h-14 w-full flex items-center justify-between shadow-lg px-2 py-10">
      <NavLink to="/" className="h-14 w-52">
        <span>
          <img
            className="w-full h-full"
            src="https://www.galaxycine.vn/website/images/galaxy-logo.png"
          />
        </span>
      </NavLink>
      <button onClick={showDrawer} className=" text-2xl mx-3">
        <MenuOutlined style={{ color: "#fb4225" }} />
      </button>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div>
          <UserNavDrawer />
          <div
            className=" flex flex-col space-y-5 text-sm font-bold"
            id="header-navBar"
          >
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              <span className="text-black">Trang chủ</span>
            </a>
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
        </div>
      </Drawer>
    </div>
  );
};

export default HeaderDrawer;
