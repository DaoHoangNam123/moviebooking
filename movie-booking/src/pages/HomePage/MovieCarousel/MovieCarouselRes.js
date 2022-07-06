import React from "react";
import { useWindowSize } from "../../../Hook/useWindowSize";
import MovieCarousel from "./MovieCarousel";
import MovieCarouselMobile from "./MovieCarouselMobile";
import MovieCarouselTablet from "./MovieCarouselTablet";

export default function MovieCarouselRes({ chunkList }) {
  let windowSize = useWindowSize();
  let renderMovieCarousel = () => {
    if (windowSize.width > 992) {
      return <MovieCarousel chunkList={chunkList} />;
    } else if (windowSize.width > 768) {
      return <MovieCarouselTablet chunkList={chunkList} />;
    } else {
      return <MovieCarouselMobile chunkList={chunkList} />;
    }
  };
  return <div>{renderMovieCarousel()}</div>;
}
