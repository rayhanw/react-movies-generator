import React from 'react';

import Movie from './Movie';
import useStyles from './styles';

const MovieList = ({ movies }) => {
  const styles = useStyles();

  if (!movies || movies.length === 0) {
    return <div className={styles.largeTopSpacing}>Search for a movie!</div>;
  }

  return movies.map(movie => {
    return <Movie movie={movie} key={movie.imdbID} />;
  });
};

export default MovieList;
