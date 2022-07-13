import React from "react";
import moment from "moment";
export default function MovieList({ movieTimeList }) {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2">
      {movieTimeList.map((movieTime, index) => {
        return (
          <a
            href={`/purchase/${movieTime.maLichChieu}`}
            className="ml-0 mr-3 my-2 py-2 px-3 rounded"
            style={{
              color: "#9e9e9e",
              backgroundColor: "rgba(246, 246, 246, 0.5)",
              border: "1px solid #e4e4e4",
            }}
            key={index}
          >
            <div className=" hover:scale-110">
              <span className="font-medium" style={{ color: "#0e8f3e" }}>
                {moment(movieTime.ngayChieuGioChieu).format("DD-MM-YYYY")}
              </span>
              <span> ~ </span>
              <span className="font-medium" style={{ color: "#fb4225" }}>
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
