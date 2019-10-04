import React from 'react';

import Movie from './Movie';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <div>Search for a movie!</div>;
  }

  return movies.map(movie => {
    return <Movie movie={movie} key={movie.imdbID} />;
  });
};

export default MovieList;
