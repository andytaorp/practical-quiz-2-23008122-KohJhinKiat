import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [title, setMovies] = useState([]);

  const handleAddMovie= (movie) => {
    // TODO: Implement adding a new movie to the list
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  const handleToggleWatched = (id) => {
    // TODO: Implement toggling a movie's watched status
    setMovies((prevMovies) =>
      prevMovies.map((title) =>
        title.id === id ? { ...title, watched: !title.watched } : title
      )
    );
  };

  const handleDeleteMovie = (id) => {
    // TODO: Implement deleting a movie from the list
    setMovies((prevMovies) => prevMovies.filter((title) => title.id !== id));
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {/* TODO: Add AddMovieForm Component */}
      AddMovieForm={handleAddMovie}
      {/* TODO: Add MovieList Component */}
      <MovieList
      movies={title}
      onDeleteMovie={handleDeleteMovie}
      onToggleWatched={handleToggleWatched}
      />
    </div>
  );
}

export default App;
