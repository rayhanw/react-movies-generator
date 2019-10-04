import React from 'react';

import movieStyles from './styles/Movie.module.css';

const Movie = ({ movie }) => {
  return (
    <div className={movieStyles.movie}>
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default Movie;
