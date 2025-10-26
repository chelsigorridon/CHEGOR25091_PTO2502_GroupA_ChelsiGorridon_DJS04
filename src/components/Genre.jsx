
import React from "react";

const Genre = ({ selectedGenre, onGenreChange, genres }) => {
  return (
    <div className="genre-filter">
      <label htmlFor="genre">Filter by Genre:</label>
      <select
        id="genre"
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
      >
        <option value="">All</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Genre;