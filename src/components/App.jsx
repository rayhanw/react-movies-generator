import React, { useState } from 'react';

import MovieList from './MovieList';
import Form from './Form';

import fetchMovies from '../apis';

import moviesStyle from './styles/Movies.module.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e, keyword) => {
    e.preventDefault();

    // Call OMDB API with user input
    const movies = await fetchMovies(keyword);
    // Set movie list to the result of API call
    setMovies(movies);
  };

  return (
    <div style={{ margin: '0 1em' }}>
      <h1 style={{ textAlign: 'center' }}>Movies</h1>
      <Form handleSubmit={handleSubmit} />
      <div className={moviesStyle.movies}>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
