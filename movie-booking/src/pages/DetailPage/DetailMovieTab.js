import React from "react";
import moment from "moment";
export default function DetailMovieTab({ timeList }) {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
      {timeList.map((movieTime, index) => {
        return (
          <a
            href={`/purchase/${movieTime.maLichChieu}`}
            className="ml-0 mr-3 my-2 py-2 px-3 rounded"
            style={{
              color: "#9e9e9e",
              backgroundColor: "rgba(246, 246, 246, 0.5)",
              border: "1px solid #e4e4e4",
            }}
          >
            <div className="hover:scale-110">
              <span
                className="font-medium text-sm"
                style={{ color: "#0e8f3e" }}
              >
                {moment(movieTime.ngayChieuGioChieu).format("DD-MM-YYYY")}
              </span>
              <span> ~ </span>
              <span
                className="font-medium text-sm"
                style={{ color: "#fb4225" }}
              >
                {" "}
                {moment(movieTime.ngayChieuGioChieu).format("hh:mm")}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
