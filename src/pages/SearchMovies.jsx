import { useEffect, useState } from 'react';
import { searchMovies } from '../api/moviesApi.js';

export default function SearchMovies() {
  const [name, setName] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchMovies(name).then((res) => setResults(res.data));
  }, [name]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Search Movies</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search by title..."
        className="w-full border p-2 rounded mb-4"
      />
      <div className="space-y-3">
        {results.map((m) => (
          <div key={m._id} className="bg-white border rounded p-4">
            <h2 className="font-bold">{m.title}</h2>
            <p className="text-sm text-slate-500">{m.genre}</p>
            <p className="mt-1">{m.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
