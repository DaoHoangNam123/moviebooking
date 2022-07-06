import React from "react";
import {
  RightOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  AppleOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
export default function FooterTheme() {
  return (
    <div
      className="h-full w-full bg-blue-300"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div
        className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 md:mx-20 mx-5 my-5"
        style={{ color: "#b2b2b2" }}
      >
        <div className="text-left">
          <p className="lg:text-lg text-base font-bold px-2 border-l-4 border-orange-500">
            GIỚI THIỆU
          </p>
          <a
            className="flex items-center my-3 hover:text-orange-500 text-gray-500"
            href="#"
          >
            <RightOutlined />
            <p className=" mb-0 mx-1 text-sm">VỀ CHÚNG TÔI</p>
          </a>
          <a
            className="flex items-center my-3 hover:text-orange-500 text-gray-500"
            href="#"
          >
            <RightOutlined />
            <p className=" mb-0 mx-1 text-sm">THOẢ THUẬN SỬ DỤNG</p>
          </a>
          <a
            className="flex items-center my-3 hover:text-orange-500 text-gray-500"
            href="#"
          >
            <RightOutlined />
            <p className=" mb-0 mx-1 text-sm">QUY CHẾ HOẠT ĐỘNG</p>
          </a>
          <a
            className="flex items-center my-3 hover:text-orange-500 text-gray-500"
            href="#"
          >
            <RightOutlined />
            <p className=" mb-0 mx-1 text-sm">CHÍNH SÁCH BẢO MẬT</p>
          </a>
        </div>
        <div className="text-left">
          <p className="lg:text-lg text-base font-bold px-2 border-l-4 border-orange-500">
            GÓC ĐIỆN ẢNH
          </p>
          <a
            className="flex items-center my-3 hover:text-orange-500 text-gray-500"
            href="#"
          >
            <RightOutlined />
            <p className=" mb-0 mx-1 text-sm">THỂ LOẠI PHIM</p>
          </a>

          <a
            className="flex items-center my-3 hover:text-orange-500 text-gray-500"
            href="#"
          >
            <RightOutlined />
            <p className=" mb-0 mx-1 text-sm">BÌNH LUẬN PHIM</p>
          </a>
          <a
            className="flex items-center my-3 hover:text-orange-500 text-gray-500"
            href="#"
          >
            <RightOutlined />
            <p className=" mb-0 mx-1 text-sm">BLOG ĐIỆN ẢNH</p>
          </a>
          <a
            className="flex items-center my-3 hover:text-orange-500 text-gray-500"
            href="#"
          >
            <RightOutlined />
            <p className=" mb-0 mx-1 text-sm">PHIM HAY THÁNG</p>
          </a>
        </div>
        <div className="text-left">
          <p className="lg:text-lg text-base font-bold px-2 border-l-4 border-orange-500">
            HỖ TRỢ
          </p>
          <a
            className="flex items-center my-3 hover:text-orange-500 text-gray-500"
            href="#"
          >
            <RightOutlined />
            <p className=" mb-0 mx-1 text-sm">GÓP Ý</p>
          </a>

          <a
            className="flex items-center my-3 hover:text-orange-500 text-gray-500"
            href="#"
          >
            <RightOutlined />
            <p className=" mb-0 mx-1 text-sm">SALESS/SERVICES</p>
          </a>
          <a
            className="flex items-center my-3 hover:text-orange-500 text-gray-500"
            href="#"
          >
            <RightOutlined />
            <p className=" mb-0 mx-1 text-sm">RẠP/GIÁ VÉ</p>
          </a>
          <a
            className="flex items-center my-3 hover:text-orange-500 text-gray-500"
            href="#"
          >
            <RightOutlined />
            <p className=" mb-0 mx-1 text-sm">TUYỂN DỤNG</p>
          </a>
        </div>
        <div className="text-left">
          <p className="lg:text-lg text-base font-bold px-2 border-l-4 border-orange-500">
            KẾT NỐI
          </p>
          <div className="flex mb-4 items-center">
            <a className="flex justify-center mx-1 hover:text-orange-500 text-gray-500 text-4xl">
              <FacebookOutlined />
            </a>
            <a className=" flex justify-center mx-1 hover:text-orange-500 text-gray-500 text-4xl">
              <YoutubeOutlined />
            </a>
            <a className="flex justify-center mx-1 hover:text-orange-500 text-gray-500 text-4xl">
              <InstagramOutlined />
            </a>
          </div>
          <p className="lg:text-lg text-base font-bold px-2 border-l-4 border-orange-500">
            DOWNLOAD APP
          </p>
          <div className="flex mb-4 items-center">
            <a className="flex justify-center mx-1 hover:text-orange-500 text-gray-500 text-4xl">
              <AppleOutlined />
            </a>
            <a className="flex justify-center mx-1 hover:text-orange-500 text-gray-500 text-4xl">
              <AppstoreAddOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
