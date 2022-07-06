import { Card, Typography } from "antd";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import movieitem from "./MovieItem.css";
import { GET_TRAILER_ID } from "../../../redux/constant/homePageContants";

export default function MovieItem({ movie }) {
  const { Meta } = Card;
  const { Paragraph, Text } = Typography;
  const dispatch = useDispatch();
  return (
    <Card
      hoverable
      style={{
        width: "100%",
        height: "100%",
      }}
      className="overflow-hidden"
      cover={
        <div style={{ height: "350px", minHeight: "300px", width: "100%" }}>
          <img alt="example" src={movie.hinhAnh} className="w-full h-full" />
          <div id="image-cover"></div>
          <button>
            <img
              src="/playbutton.png"
              alt="play trailer"
              id="trailer-button"
              onClick={() => {
                dispatch({
                  type: GET_TRAILER_ID,
                  payload: movie.trailer,
                });
              }}
            ></img>
          </button>
        </div>
      }
      id="movie-card"
    >
      <Meta
        title={
          <div className="text-left">
            <span
              className="text-white font-bold rounded py-1 px-1 mr-2"
              style={{ backgroundColor: "#fb4225" }}
            >
              C18
            </span>
            <Text ellipsis>{movie.tenPhim}</Text>
          </div>
        }
        description={
          <div className="text-left">
            <Paragraph ellipsis={{ rows: 2 }}>{movie.moTa}</Paragraph>
          </div>
        }
        id="movie-info"
      />
      <div className="mt-4">
        <NavLink
          id="buyTicket-button"
          to={`detail/${movie.maPhim}`}
          className="hidden rounded text-white w-full h-16 hover:text-white justify-center items-center"
          style={{ backgroundColor: "#fb4225" }}
        >
          <p className="h-full flex justify-center items-center">Mua Vé</p>
        </NavLink>
      </div>
    </Card>
  );
}
