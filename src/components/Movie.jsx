import React from 'react';

import movieStyles from './styles/Movie.module.css';

const Movie = ({ movie }) => {
  console.log(movie);

  return (
    <div className={movieStyles.movie}>
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
      <a
        href={`https://imdb.com/title/${movie.imdbID}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={movie.Poster} alt={movie.Title} width="200" height="300" />
      </a>
    </div>
  );
};

export default Movie;
