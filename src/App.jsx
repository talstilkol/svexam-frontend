import { Routes, Route, Link } from 'react-router-dom';
import AllMovies from './pages/AllMovies.jsx';
import AddMovie from './pages/AddMovie.jsx';
import SearchMovies from './pages/SearchMovies.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="flex gap-4 bg-slate-800 text-white p-4">
        <Link to="/all-movies">All Movies</Link>
        <Link to="/add-movie">Add Movie</Link>
        <Link to="/search-movies">Search</Link>
      </nav>
      <Routes>
        <Route path="/all-movies" element={<AllMovies />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/search-movies" element={<SearchMovies />} />
        <Route path="*" element={<AllMovies />} />
      </Routes>
    </div>
  );
}
