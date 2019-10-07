import React, { useState } from 'react';

import MovieList from './MovieList';
import Form from './Form';

import fetchMovies from '../apis';

import moviesStyle from './styles/Movies.module.css';

const App = () => {
  const [keyword, setKeyword] = useState('');
  const [movies, setMovies] = useState([]);
  const [previousKeyword, setPreviousKeyword] = useState('');

  const handleSubmit = async (e, inputKeyword) => {
    e.preventDefault();
    await setPreviousKeyword(keyword);
    await setKeyword(inputKeyword);
    if (keyword !== previousKeyword) {
      const movies = await fetchMovies(keyword);
      setMovies(movies);
    }
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
