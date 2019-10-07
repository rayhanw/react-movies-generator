import React, { useState } from "react";
import Loader from "react-loader-spinner";

import MovieList from "./MovieList";
import Form from "./Form";
import SEO from "./seo";

import fetchMovies from "../apis";

import "./styles/Movies.css";

const App = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e, keyword) => {
		e.preventDefault();
		setLoading(true);

		// Call OMDB API with user input
		const movies = await fetchMovies(keyword);
		// Set movie list to the result of API call
		setMovies(movies);
		setLoading(false);
	};

	if (loading) {
		return (
			<div className="spinner">
				<Loader type="Oval" color="#FE6B8B" height={300} width={300} />
			</div>
		);
	}

	return (
		<div style={{ margin: "0 1em" }}>
			<SEO />
			<h1 style={{ textAlign: "center" }}>Movies</h1>
			<Form handleSubmit={handleSubmit} />
			<div className="movies">
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;
