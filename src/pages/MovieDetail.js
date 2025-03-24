import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movies as allMovies } from '../lib/MovieData';
import { FaStar, FaShareAlt, FaHeart } from 'react-icons/fa';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Find the movie by ID
    const foundMovie = allMovies.find(m => m.id === parseInt(id));
    if (foundMovie) {
      setMovie(foundMovie);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="container py-5 text-center">
        <h2>Movie not found</h2>
        <p>Sorry, we couldn't find the movie you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="movie-detail bg-dark text-white">
      <div className="hero-background py-4" style={{ backgroundColor: '#000' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <img 
                src={movie.posterUrl} 
                alt={movie.title} 
                className="img-fluid rounded shadow"
                style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
              />
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-danger py-2">Watch Trailer</button>
                <button className="btn btn-warning py-2">Review</button>
              </div>
            </div>
            
            <div className="col-md-8">
              <h1 className="mb-3">{movie.title.toUpperCase()} : {new Date(movie.releaseDate).getFullYear()}</h1>
              
              <div className="d-flex mb-4">
                <button className="btn btn-danger btn-sm me-3 d-flex align-items-center">
                  <FaHeart className="me-1" /> ADD TO FAVOURITES
                </button>
                <button className="btn btn-outline-light btn-sm d-flex align-items-center">
                  <FaShareAlt className="me-1" /> Share
                </button>
              </div>
              
              <div className="rating-box p-3 bg-dark border border-secondary rounded mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-warning p-2 rounded me-3">
                    <FaStar className="text-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-0">{movie.rating}/10</h4>
                    <small className="text-muted">5.6K reviews</small>
                  </div>
                </div>
                <div>
                  <p className="mb-0">Rating this Movie:</p>
                  <div className="d-flex">
                    {[...Array(10)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(movie.rating) ? "text-warning" : "text-secondary"} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="nav nav-tabs border-0 mb-3">
                <button 
                  className={`nav-link border-0 ${activeTab === 'overview' ? 'text-warning border-bottom border-warning' : 'text-white'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`nav-link border-0 ${activeTab === 'reviews' ? 'text-warning border-bottom border-warning' : 'text-white'}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
                <button 
                  className={`nav-link border-0 ${activeTab === 'cast' ? 'text-warning border-bottom border-warning' : 'text-white'}`}
                  onClick={() => setActiveTab('cast')}
                >
                  Cast & Crew
                </button>
                <button 
                  className={`nav-link border-0 ${activeTab === 'media' ? 'text-warning border-bottom border-warning' : 'text-white'}`}
                  onClick={() => setActiveTab('media')}
                >
                  Media
                </button>
                <button 
                  className={`nav-link border-0 ${activeTab === 'related' ? 'text-warning border-bottom border-warning' : 'text-white'}`}
                  onClick={() => setActiveTab('related')}
                >
                  Related Movies
                </button>
              </div>
              
              {activeTab === 'overview' && (
                <div>
                  <p>{movie.synopsis}</p>
                  
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <h6>Director:</h6>
                      <p className="text-info">{movie.director}</p>
                      
                      <h6>Writer:</h6>
                      <p className="text-info">{movie.director}</p>
                      
                      <h6>Stars:</h6>
                      <p className="text-info">{movie.cast.slice(0, 2).join(', ')}</p>
                    </div>
                    <div className="col-md-6">
                      <h6>Genres:</h6>
                      <p>
                        {movie.genre.map((g, i) => (
                          <span key={i} className="badge bg-info me-2">{g}</span>
                        ))}
                      </p>
                      
                      <h6>Release Date:</h6>
                      <p>{new Date(movie.releaseDate).toLocaleDateString()}</p>
                      
                      <h6>Run Time:</h6>
                      <p>148 mins</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'cast' && (
                <div>
                  <h5 className="mb-3">Cast</h5>
                  <div className="row">
                    {movie.cast.map((actor, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="d-flex">
                          <div className="me-2" style={{ width: '60px', height: '60px' }}>
                            <img 
                              src="https://via.placeholder.com/60" 
                              alt={actor} 
                              className="img-fluid rounded-circle"
                            />
                          </div>
                          <div>
                            <h6 className="mb-0 text-info">{actor}</h6>
                            <small className="text-muted">Character</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'media' && (
                <div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5>Videos & Photos</h5>
                    <small className="text-info">See all photos</small>
                  </div>
                  <div className="row">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="col-md-4 mb-3">
                        <img 
                          src="https://via.placeholder.com/150" 
                          alt="Media" 
                          className="img-fluid rounded"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;