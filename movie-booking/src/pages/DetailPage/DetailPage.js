import React, { useEffect, useState } from "react";
import { Rate, Tabs, Typography } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";
import moment from "moment";
import "./../../assets/css/DetailPage.css";
import DetailMovieTab from "./DetailMovieTab";
import { useDispatch } from "react-redux";
import { GET_TRAILER_ID } from "../../redux/constant/homePageContants";
import MovieTrailer from "../HomePage/MovieItem/MovieTrailer";
import { useWindowSize } from "../../Hook/useWindowSize";

export default function DetailPage() {
  const { TabPane } = Tabs;
  const { Paragraph, Text } = Typography;
  let { id } = useParams();
  let [movie, setMovie] = useState({});
  let [movieTime, setMovieTime] = useState([]);
  let [isOpen, setOpen] = useState(false);
  let dispatch = useDispatch();
  let windowSize = useWindowSize();
  useEffect(() => {
    movieService
      .getDetailMovie(id)
      .then((res) => {
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
    movieService
      .getMovieTime(id)
      .then((res) => {
        setMovieTime(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderContent = () => {
    return movieTime.heThongRapChieu?.map((heThongRap, index) => {
      if (windowSize.width < 500) {
        return (
          <TabPane
            tab={
              <img src={heThongRap.logo} className="w-10 h-10" alt="logo rap" />
            }
            key={index}
          >
            {heThongRap.cumRapChieu.map((cumRap, index) => {
              return (
                <div className="mx-4 mt-4">
                  <div className="whitespace-normal text-left ">
                    <Text type="success">{cumRap.tenCumRap}</Text>
                    <Paragraph type="secondary">{cumRap.diaChi}</Paragraph>
                  </div>
                  <div
                    className="border-b-2"
                    style={{ minHeight: "100px", overflowY: "scroll" }}
                  >
                    <DetailMovieTab
                      key={index}
                      timeList={cumRap.lichChieuPhim}
                    />
                  </div>
                </div>
              );
            })}
          </TabPane>
        );
      } else {
        return (
          <TabPane
            tab={
              <img src={heThongRap.logo} className="w-10 h-10" alt="logo rap" />
            }
            key={index}
          >
            <Tabs
              style={{ height: "500px" }}
              tabPosition="left"
              defaultActiveKey="1"
              size="small"
              id="cumRap-panel"
            >
              {heThongRap.cumRapChieu.map((cumRap, index) => {
                return (
                  <TabPane
                    tab={
                      <div className="whitespace-normal text-left">
                        <Text ellipsis type="success">
                          {cumRap.tenCumRap}
                        </Text>
                        <Paragraph ellipsis={{ rows: 2 }} type="secondary">
                          {cumRap.diaChi}
                        </Paragraph>
                      </div>
                    }
                    key={index}
                  >
                    <div style={{ height: "500px", overflowY: "scroll" }}>
                      <DetailMovieTab
                        key={index}
                        timeList={cumRap.lichChieuPhim}
                      />
                    </div>
                  </TabPane>
                );
              })}
            </Tabs>
          </TabPane>
        );
      }
    });
  };
  return (
    <div className="xl:container xl:mx-auto mx-10 py-10 space-y-10">
      <div className="grid md:grid-cols-5 sm:space-x-10 items-start justify-center">
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

        <div className="text-left md:col-span-4">
          <p className="font-bold text-2xl mb-0">{movie.tenPhim}</p>
          <div className="flex items-center justify-start my-3">
            <StarFilled classID="  text-xl mx-2" style={{ color: "#fadb15" }} />
            <span> {movie.danhGia}/100 điểm </span>
            <button
              className="py-2 px-3 rounded text-white mx-3"
              style={{ backgroundColor: "#fb4225" }}
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              Rate
            </button>
            <div className={isOpen ? "block" : "hidden"}>
              <Rate />
            </div>
          </div>
          <p className="text-base font-bold">
            Ngày khởi chiếu:{" "}
            <span className="font-normal">
              {" "}
              {moment(movie.ngayChieuGioChieu).format("DD/MM/YYYY")}
            </span>
          </p>
          <div className="text-base">
            <p className="font-bold ">Nội dung phim:</p>
            <Paragraph ellipsis={{ rows: 6 }}>{movie.moTa}</Paragraph>
          </div>
        </div>
      </div>
      <h2
        className="text-left text-xl font-bold w-max"
        style={{ borderBottom: "2px solid #fb4225" }}
      >
        LỊCH CHIẾU
      </h2>
      <Tabs
        style={{ height: "max-content" }}
        tabPosition="left"
        defaultActiveKey="1"
        className="border"
      >
        {renderContent()}
      </Tabs>
      <MovieTrailer />
    </div>
  );
}
