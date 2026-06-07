import { useEffect, useState } from 'react';
import { getMovies, deleteMovie } from '../api/moviesApi.js';

export default function AllMovies() {
  const [movies, setMovies] = useState([]);

  const load = () => getMovies().then((res) => setMovies(res.data));

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    await deleteMovie(id);
    load();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Movies</h1>
      <div className="space-y-3">
        {movies.map((m) => (
          <div key={m._id} className="bg-white border rounded p-4">
            <h2 className="text-lg font-bold">{m.title}</h2>
            <p className="text-sm text-slate-500">{m.genre}</p>
            <p className="mt-1">{m.description}</p>
            <button
              onClick={() => handleDelete(m._id)}
              className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete Movie
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
