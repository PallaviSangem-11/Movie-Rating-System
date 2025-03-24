import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieHero = ({ movies }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredMovie = movies[activeIndex];

  return (
    <div className="position-relative mb-4">
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${featuredMovie?.backgroundUrl})`,
          height: '500px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div className="position-absolute top-0 start-0 p-3">
          <div className="d-flex flex-column">
            <div className="brand-logo mb-4">
              <div className="d-flex align-items-center">
                <div className="bg-danger text-white p-2 rounded">
                  <strong>B</strong>
                </div>
                <div className="ms-2 text-white">
                  <strong>BLOCK BUSTER</strong>
                  <div><small>Film Review</small></div>
                </div>
              </div>
            </div>
            
            <div className="timeline d-flex flex-column my-3">
              <small className="text-white">TODAY</small>
              <div className="vr bg-white my-2" style={{ height: '20px', width: '2px', marginLeft: '2px' }}></div>
              <small className="text-white">SOON</small>
            </div>
          </div>
        </div>
        
        <div className="carousel-indicators position-absolute bottom-0 mb-5" style={{ zIndex: 2 }}>
          {movies.map((movie, index) => (
            <button
              key={index}
              type="button"
              className={`rounded-circle ${index === activeIndex ? 'active' : ''}`}
              style={{ width: '10px', height: '10px' }}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
        
        <div className="position-absolute bottom-0 start-0 w-100">
          <div className="container-fluid">
            <div className="row d-flex justify-content-start overflow-auto py-3">
              {movies.map((movie, index) => (
                <div 
                  key={movie.id} 
                  className="col-5 col-md-2 pe-2" 
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`position-relative ${index === activeIndex ? 'border border-2 border-primary' : ''}`}>
                    <img 
                      src={movie.posterUrl} 
                      className="img-fluid rounded" 
                      alt={movie.title}
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                    {index === activeIndex && (
                      <div className="position-absolute top-50 start-50 translate-middle">
                        <Link 
                          to={`/movie/${movie.id}`}
                          className="btn btn-sm btn-danger rounded"
                        >
                          Review
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHero;