import React, { useState } from "react";

export default function AddMovieForm({ AddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    if (!title) return;
    const newMovie = {
      id: Date.now(),
      title,
      watched: false,
    };

    AddMovie(newMovie);

    setTitle("");
  }

  return; // TODO: add a form to add a new movie
}

