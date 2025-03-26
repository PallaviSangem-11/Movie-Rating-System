import React from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { movies } from "../lib/MovieData"; // Import movie data

const MovieListPage = () => {
  const { genre } = useParams(); // Get genre from URL

  // Filter movies based on the selected genre
  const filteredMovies = movies.filter((movie) => movie.genre.includes(genre));

  return (
    <div className="container py-4">
      <h3 className="fw-bold text-center mb-4">{genre} Movies</h3>
      <div className="row">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="col-6 col-md-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <p className="text-center">No movies found for this genre.</p>
        )}
      </div>
    </div>
  );
};

export default MovieListPage;
