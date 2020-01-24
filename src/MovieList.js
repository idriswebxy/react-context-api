import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";



const MovieList = () => {

  const [movies, setMovies] = useContext(MovieContext);

 

  return (
    <div>
      {movies.map((movie, key) => (
        <Movie movieName={movie.name} moviePrice={movie.price} key={key} />
      ))}
    </div>
  );
};

export default MovieList;
