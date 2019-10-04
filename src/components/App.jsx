import React, { Component } from 'react';

import MovieList from './MovieList';
import Form from './Form';

import fetchMovies from '../apis';

class App extends Component {
  state = { keyword: '', movies: [] };

  handleSubmit = async (e, keyword) => {
    e.preventDefault();
    await this.setState({ keyword });
    const movies = await fetchMovies(this.state.keyword);
    this.setState({ movies });
  };

  render() {
    return (
      <div style={{ margin: '0 1em' }}>
        <h1>Movies</h1>
        <Form handleSubmit={this.handleSubmit} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
