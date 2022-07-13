import { Typography } from "antd";
import { useDispatch } from "react-redux";
import "../../../assets/css/MovieItem.css";
import moment from "moment";
import { GET_TRAILER_ID } from "../../../redux/constant/homePageContants";

export default function MovieItemMobile({ movie }) {
  const { Paragraph } = Typography;
  const dispatch = useDispatch();
  return (
    <div className="space-x-10 space-y-10 ">
      <div className="grid grid-cols-2 space-x-5 items-start justify-center py-3">
        <div id="movie-image">
          <img
            src={movie.hinhAnh}
            className="w-full h-full"
            alt="hinh anh phim"
          ></img>
          <button>
            <img
              src="/playbutton.png"
              alt="play trailer"
              id="detail-trailer-button"
              onClick={() => {
                dispatch({
                  type: GET_TRAILER_ID,
                  payload: movie.trailer,
                });
              }}
            ></img>
          </button>
        </div>

        <div className="text-left text-sm">
          <Typography.Title ellipsis level={5}>
            {movie.tenPhim}
          </Typography.Title>
          <p className="font-bold">
            Ngày khởi chiếu:{" "}
            <span className="font-normal">
              {" "}
              {moment(movie.ngayChieuGioChieu).format("DD/MM/YYYY")}
            </span>
          </p>
          <div>
            <p className="font-bold ">Nội dung phim:</p>
            <Paragraph ellipsis={{ rows: 6 }}>{movie.moTa}</Paragraph>
          </div>
          <div>
            <button
              onClick={() => {
                window.location.href = `/detail/${movie.maPhim}`;
              }}
              className="block rounded text-white w-full h-16 hover:text-white justify-center items-center"
              style={{ backgroundColor: "#fb4225" }}
            >
              <p className="h-full flex justify-center items-center">Mua Vé</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
