import { Carousel } from "antd";
import MovieItem from "../MovieItem/MovieItem";
const MovieCarousel = ({ chunkList }) => {
  return (
    <Carousel className=" py-5 shadow-2xl xl:px-20 px-10">
      {chunkList.map((movie, index) => {
        return (
          <div className="h-max w-full py-10 px-2" key={index}>
            <div className="grid grid-cols-4 gap-10">
              {movie.map((item, index) => {
                return <MovieItem movie={item} key={index} />;
              })}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MovieCarousel;
