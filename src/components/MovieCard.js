import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card mb-3">
      <Link to={`/movie/${movie.id}`} className="text-decoration-none">
        <div className="position-relative">
          <img 
            src={movie.posterUrl} 
            className="img-fluid rounded"
            alt={movie.title}
            style={{ height: '200px', width: '100%', objectFit: 'cover' }}
          />
          <div className="position-absolute bottom-0 start-0 w-100 p-2" 
               style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
            <h6 className="text-white mb-0">{movie.title}</h6>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-light">{new Date(movie.releaseDate).getFullYear()}</small>
              <div className="d-flex align-items-center">
                <small className="me-1 text-warning">★</small>
                <small className="text-light">{movie.rating}</small>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
