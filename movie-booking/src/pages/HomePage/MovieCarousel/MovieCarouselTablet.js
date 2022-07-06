import { Carousel } from "antd";
import MovieItem from "../MovieItem/MovieItem";
const MovieCarouselTablet = ({ chunkList }) => {
  return (
    <Carousel className="py-8 shadow-2xl px-10">
      {chunkList.map((movie, index) => {
        return (
          <div className="h-max w-full py-10 px-2">
            <div className="grid grid-cols-3 gap-10">
              {movie.map((item) => {
                return <MovieItem movie={item} />;
              })}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MovieCarouselTablet;
