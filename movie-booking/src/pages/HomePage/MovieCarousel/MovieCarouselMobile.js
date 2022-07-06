import { Carousel } from "antd";
import MovieItemMobile from "../MovieItem/MovieItemMobile";
const MovieCarouselMobile = ({ chunkList }) => {
  return (
    <Carousel className="py-8 shadow-2xl px-10">
      {chunkList.map((movie, index) => {
        return (
          <div className="grid grid-cols-1 h-full w-full">
            {movie.map((item) => {
              return <MovieItemMobile movie={item} />;
            })}
          </div>
        );
      })}
    </Carousel>
  );
};

export default MovieCarouselMobile;
