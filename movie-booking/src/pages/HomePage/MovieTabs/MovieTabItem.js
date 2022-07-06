import React from "react";
import { Typography } from "antd";
import MovieList from "./MovieList";

export default function MovieTabItem({ movie }) {
  const { Text } = Typography;
  return (
    <div className="flex border-b-2 p-5 border-gray-300 space-x-5">
      <div className="w-40">
        <img src={movie.hinhAnh} className="w-full" />
      </div>
      <div className="w-2/3">
        <div className="flex h-7">
          <span
            className="flex text-white font-bold rounded justify-center items-center px-2 mr-2"
            style={{ backgroundColor: "#fb4225" }}
          >
            C18
          </span>
          <Text className="font-bold text-xl">{movie.tenPhim}</Text>
        </div>
        <MovieList movieTimeList={movie.lstLichChieuTheoPhim} />
      </div>
    </div>
  );
}
