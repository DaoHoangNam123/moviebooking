import { Carousel } from "antd";
import { useDispatch } from "react-redux";
import { GET_TRAILER_ID } from "../../../redux/constant/homePageContants";
import "./../../../assets/css/MovieSlider.css";
const MovieSlider = ({ bannerList }) => {
  let dispatch = useDispatch();
  return (
    <Carousel autoplay>
      {bannerList.map((movie, index) => {
        return (
          <div id="slider-banner" key={index}>
            <img
              src={movie.hinhAnh}
              alt="Banner"
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            ></img>
            <button>
              <img
                src="/playbutton.png"
                alt="play trailer"
                id="slider-trailer-button"
                onClick={() => {
                  dispatch({
                    type: GET_TRAILER_ID,
                    payload: movie.trailer,
                  });
                }}
              ></img>
            </button>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MovieSlider;
