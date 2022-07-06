import React, { useEffect, useState } from "react";
import { movieService } from "../../services/movieService";
import _ from "lodash";
import homepage from "./HomePage.css";
import MovieTrailer from "./MovieItem/MovieTrailer";
import MovieSlider from "./MovieSlider/MovieSlider";
import { useDispatch } from "react-redux";
import {
  SET_SPINNER_END,
  SET_SPINNER_STARTED,
} from "../../redux/constant/spinnerConstant";
import MovieCarouselRes from "./MovieCarousel/MovieCarouselRes";
import { useWindowSize } from "../../Hook/useWindowSize";
import MovieTabs from "./MovieTabs/MovieTabs";
export default function HomePage() {
  const [bannerList, setBannerList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  let dispatch = useDispatch();
  let windowSize = useWindowSize();
  useEffect(() => {
    let fetchBannerList = async () => {
      let result = await movieService.getBannerList();
      setBannerList(result.data.content);
    };
    fetchBannerList();
    let fetchMovieList = async () => {
      let result = await movieService.getMovieList();
      let chunkList = _.chunk(result.data.content, 8);
      setMovieList(chunkList);
    };
    fetchMovieList();
  }, []);
  if (bannerList.length === 0 || movieList.length === 0) {
    dispatch({
      type: SET_SPINNER_STARTED,
      payload: "",
    });
  } else {
    dispatch({
      type: SET_SPINNER_END,
      payload: "",
    });
  }
  let renderMovieTab = () => {
    if (windowSize.width >= 992) {
      return (
        <div>
          <h1
            className="font-bold text-2xl text-left mt-10 xl:mx-0 mx-10"
            id="cumRap-header"
          >
            CỤM RẠP
          </h1>
          <MovieTabs />
        </div>
      );
    } else {
      return <></>;
    }
  };
  return (
    <div>
      <div id="carousel_slider">
        <MovieSlider bannerList={bannerList} />
      </div>
      <div id="carousel_homepage" className="xl:mx-auto xl:container mx-0 mt-5">
        <h1
          className="xl:mx-0 mx-10 font-bold text-2xl text-left"
          id="phimDangChieu-header"
        >
          PHIM ĐANG CHIẾU
        </h1>
        <MovieCarouselRes chunkList={movieList} />

        {renderMovieTab()}
      </div>
      <MovieTrailer />
    </div>
  );
}
