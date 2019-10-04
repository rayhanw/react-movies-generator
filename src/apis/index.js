import axios from 'axios';
require('dotenv').config();

const fetchMovies = async keyword => {
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API}&s=${keyword}`
  );

  return response.data.Search;
};

export default fetchMovies;
