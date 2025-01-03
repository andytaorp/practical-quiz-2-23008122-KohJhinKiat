import React from "react";

/**
 * TODO: implement the Movie component
 * A single movie item in the movie list, with a checkbox to mark it
 * watched, a text span for the title, and a delete button.
 */
function Movie({ movie, onDeleteMovie, onToggleWatch }) {
    return (
      <li>
        <input
          type="checkbox"
          value={movie.watched}
          onChange={() => onToggleWatch(movie.id)}
        />
  
        <span style={movie.watched ? { textDecoration: "line-through" } : {}}>
          {movie.title}
        </span>
  
        <button onClick={() => onDeleteMovie(movie.id)}>Remove</button>
      </li>
    );
  }



export default Movie;

