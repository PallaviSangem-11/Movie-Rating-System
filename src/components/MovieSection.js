import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieSection = ({ title, movies, seeMoreLink }) => {
  return (
    <div className="movie-section py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0 fw-bold">{title}</h5>
          <Link to={seeMoreLink} className="text-decoration-none d-flex align-items-center">
            <small className="text-muted">see more</small>
            <i className="ms-1 bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="row flex-nowrap overflow-auto pb-3 movie-row">
          {movies.map(movie => (
            <div key={movie.id} className="col-6 col-md-3 pe-2">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
