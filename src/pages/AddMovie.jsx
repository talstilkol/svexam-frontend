import { useState } from 'react';
import { addMovie, generateDescription } from '../api/moviesApi.js';

export default function AddMovie() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length < 1 || title.length > 20) {
      alert('Title must be between 1 and 20 characters');
      return;
    }
    if (genre.length < 1) {
      alert('Genre is required');
      return;
    }
    if (description.length > 200) {
      alert('Description must be up to 200 characters');
      return;
    }
    await addMovie({ title, genre, description });
    setTitle('');
    setGenre('');
    setDescription('');
    alert('Movie added!');
  };

  const handleGenerate = async () => {
    if (!title || !genre) {
      alert('Enter title and genre first');
      return;
    }
    const res = await generateDescription(title, genre);
    setDescription(res.data.description);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-3">
      <h1 className="text-2xl font-bold">Add Movie</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border p-2 rounded"
      />
      <input
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
        className="w-full border p-2 rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full border p-2 rounded"
      />
      <button
        type="button"
        onClick={handleGenerate}
        className="bg-purple-600 text-white px-3 py-2 rounded w-full"
      >
        ✨ Generate description with AI
      </button>
      <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded w-full">
        Add Movie
      </button>
    </form>
  );
}
