import React, { Component } from 'react';

import MovieList from './MovieList';
import Form from './Form';

import fetchMovies from '../apis';

import moviesStyle from './styles/Movies.module.css';

class App extends Component {
  state = { keyword: '', movies: [] };

  handleSubmit = async (e, keyword) => {
    e.preventDefault();
    await this.setState({ keyword });
    const movies = await fetchMovies(this.state.keyword);
    this.setState({ movies });
  };

  render() {
    console.log(moviesStyle.movies);
    return (
      <div style={{ margin: '0 1em' }}>
        <h1 style={{ textAlign: 'center' }}>Movies</h1>
        <Form handleSubmit={this.handleSubmit} />
        <div className={moviesStyle.movies}>
          <MovieList movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default App;
