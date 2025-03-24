// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const MovieHero = ({ movies }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const featuredMovie = movies[activeIndex];
  
//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [movies.length]);

//   // Handle manual navigation
//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? movies.length - 1 : prevIndex - 1));
//   };
  
//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
//   };

//   return (
//     <div className="position-relative mb-4">
//       <div 
//         className="hero-background"
//         style={{
//           backgroundImage: `url(${featuredMovie?.backgroundUrl})`,
//           height: '600px',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           position: 'relative',
//         }}
//       >
//         {/* Logo Section */}
//         <div className="position-absolute top-0 start-0 p-3">
//           <div className="d-flex flex-column">
            
//             <div className="timeline d-flex flex-column my-3">
//               <small className="text-white">TODAY</small>
//               <div className="vr bg-white my-2" style={{ height: '20px', width: '2px', marginLeft: '2px' }}></div>
//               <small className="text-white">SOON</small>
//             </div>
//           </div>
//         </div>

//         {/* Carousel Indicators */}
//         <div className="carousel-indicators position-absolute top-50 end-0 me-4 d-flex flex-column" style={{ zIndex: 2 }}>
//           {movies.map((movie, index) => (
//             <button
//               key={index}
//               type="button"
//               className={`rounded-circle my-1 ${index === activeIndex ? 'active' : ''}`}
//               style={{ width: '10px', height: '10px' }}
//               onClick={() => setActiveIndex(index)}
//             />
//           ))}
//         </div>

//         {/* Carousel Controls */}
//         <button className="carousel-control-prev" type="button" onClick={handlePrev}>
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" onClick={handleNext}>
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>

//         {/* Movie Carousel */}
//         <div className="position-absolute bottom-0 start-0 w-100">
//           <div className="container-fluid">
//             <div className="row d-flex justify-content-start overflow-auto py-4" style={{ scrollSnapType: 'x mandatory' }}>
//               {movies.map((movie, index) => (
//                 <div
//                   key={movie.id}
//                   className="col-4 col-md-2 px-2"
//                   onClick={() => setActiveIndex(index)}
//                   style={{ scrollSnapAlign: 'start' }}
//                 >
//                   <div className={`position-relative movie-poster ${index === activeIndex ? 'active-poster' : ''}`}>
//                     <img
//                       src={movie.posterUrl}
//                       className="img-fluid rounded shadow"
//                       alt={movie.title}
//                       style={{
//                         height: '180px',
//                         width: '100%',
//                         objectFit: 'cover',
//                         transform: index === activeIndex ? 'scale(1.1)' : 'scale(1)',
//                         transition: 'transform 0.3s ease',
//                         border: index === activeIndex ? '3px solid #dc3545' : 'none',
//                       }}
//                     />
//                     {index === activeIndex && (
//                       <div className="position-absolute bottom-0 start-0 w-100 d-flex justify-content-center pb-2">
//                         <Link to={`/movie/${movie.id}`} className="btn btn-danger btn-sm rounded" onClick={(e) => e.stopPropagation()}>
//                           Review
//                         </Link>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieHero;
const MovieHero = ({ movies }) => {
  let activeIndex = 0;
  let interval;

  const updateBackground = () => {
    const featuredMovie = movies[activeIndex];
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground && featuredMovie) {
      heroBackground.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${featuredMovie.backgroundUrl})`;
    }
    updateActiveStates();
  };

  const updateActiveStates = () => {
    // Update indicators
    document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
      indicator.classList.toggle('active', index === activeIndex);
    });

    // Update movie posters
    document.querySelectorAll('.movie-poster').forEach((poster, index) => {
      if (index === activeIndex) {
        poster.classList.add('active-poster');
        poster.style.transform = 'scale(1.1)';
        poster.style.border = '3px solid #dc3545';
      } else {
        poster.classList.remove('active-poster');
        poster.style.transform = 'scale(1)';
        poster.style.border = 'none';
      }
    });
  };

  const handlePrev = () => {
    activeIndex = activeIndex === 0 ? movies.length - 1 : activeIndex - 1;
    updateBackground();
  };

  const handleNext = () => {
    activeIndex = (activeIndex + 1) % movies.length;
    updateBackground();
  };

  const startAutoSlide = () => {
    interval = setInterval(handleNext, 5000);
  };

  const stopAutoSlide = () => {
    if (interval) {
      clearInterval(interval);
    }
  };

  const init = () => {
    const container = document.createElement('div');
    container.className = 'position-relative mb-4';
    
    container.innerHTML = `
      <div class="hero-background" style="height: 600px; background-size: cover; background-position: center; position: relative;">
        <!-- Logo Section -->
        <div style="position: absolute; top: 0; left: 0; padding: 1rem;">
          <div style="display: flex; flex-direction: column;">
            <div class="timeline" style="display: flex; flex-direction: column; margin: 1rem 0;">
              <small style="color: white;">TODAY</small>
              <div style="height: 20px; width: 2px; background-color: white; margin: 0.5rem 0 0.5rem 2px;"></div>
              <small style="color: white;">SOON</small>
            </div>
          </div>
        </div>

        <!-- Carousel Indicators -->
        <div style="position: absolute; top: 50%; right: 1rem; display: flex; flex-direction: column; z-index: 2;">
          ${movies.map((_, index) => `
            <button
              class="carousel-indicator"
              style="width: 10px; height: 10px; border-radius: 50%; margin: 0.25rem; background: white; border: none; padding: 0;"
              data-index="${index}"
            ></button>
          `).join('')}
        </div>

        <!-- Carousel Controls -->
        <button id="prevButton" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); background: none; border: none; color: white;">
          ❮
        </button>
        <button id="nextButton" style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); background: none; border: none; color: white;">
          ❯
        </button>

        <!-- Movie Carousel -->
        <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: rgba(0,0,0,0.5);">
          <div style="padding: 1rem;">
            <div style="display: flex; gap: 1rem; overflow-x: auto; padding: 1rem 0;">
              ${movies.map((movie, index) => `
                <div class="movie-poster" style="flex: 0 0 auto; width: 180px; transition: all 0.3s ease;" data-index="${index}">
                  <img
                    src="${movie.posterUrl}"
                    alt="${movie.title}"
                    style="width: 100%; height: 240px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);"
                  />
                  ${index === activeIndex ? `
                    <div style="position: absolute; bottom: 0.5rem; left: 0; width: 100%; text-align: center;">
                      <a href="/movie/${movie.id}" class="review-button" style="background: #dc3545; color: white; padding: 0.5rem 1rem; border-radius: 4px; text-decoration: none;">
                        Review
                      </a>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // Event Listeners
    container.querySelector('#prevButton').addEventListener('click', handlePrev);
    container.querySelector('#nextButton').addEventListener('click', handleNext);

    container.querySelectorAll('.carousel-indicator').forEach((indicator) => {
      indicator.addEventListener('click', () => {
        activeIndex = parseInt(indicator.dataset.index);
        updateBackground();
      });
    });

    container.querySelectorAll('.movie-poster').forEach((poster) => {
      poster.addEventListener('click', () => {
        activeIndex = parseInt(poster.dataset.index);
        updateBackground();
      });
    });

    // Initialize background and start auto-slide
    updateBackground();
    startAutoSlide();

    // Stop auto-slide when user interacts with carousel
    container.addEventListener('mouseenter', stopAutoSlide);
    container.addEventListener('mouseleave', startAutoSlide);

    return container;
  };

  return init();
};

export default MovieHero;