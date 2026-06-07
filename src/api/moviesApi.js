import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export const getMovies = () => axios.get(`${API}/movies`);
export const addMovie = (movie) => axios.post(`${API}/movies`, movie);
export const deleteMovie = (id) => axios.delete(`${API}/movies/${id}`);
export const searchMovies = (name) => axios.get(`${API}/movies/search?name=${encodeURIComponent(name)}`);
export const generateDescription = (title, genre) =>
  axios.post(`${API}/movies/generate`, { title, genre });
export const suggestMovies = (query) =>
  axios.get(`${API}/movies/suggest?query=${encodeURIComponent(query)}`);
