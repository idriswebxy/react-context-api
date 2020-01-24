import React from "react";


const Movie = ({ movieName, moviePrice }) => {
  return (
    <div>
      <h4>{movieName}</h4>
      <h4>{moviePrice}</h4>
    </div>
  );
};

export default Movie;
