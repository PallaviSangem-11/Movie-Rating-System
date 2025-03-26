// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const MovieHero = ({ movies }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const featuredMovie = movies[activeIndex];

//   return (
//     <div className="position-relative mb-4">
//       <div 
//         className="hero-background"
//         style={{
//           backgroundImage: `url(${featuredMovie?.backgroundUrl})`,
//           height: '500px',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           position: 'relative',
//         }}
//       >
//         <div className="position-absolute top-0 start-0 p-3">
//           <div className="d-flex flex-column">
            
            
//             <div className="timeline d-flex flex-column my-3">
//               <small className="text-white">TODAY</small>
//               <div className="vr bg-white my-2" style={{ height: '20px', width: '2px', marginLeft: '2px' }}></div>
//               <small className="text-white">SOON</small>
//             </div>
//           </div>
//         </div>
        
//         <div className="carousel-indicators position-absolute bottom-0 mb-5" style={{ zIndex: 2 }}>
//           {movies.map((movie, index) => (
//             <button
//               key={index}
//               type="button"
//               className={`rounded-circle ${index === activeIndex ? 'active' : ''}`}
//               style={{ width: '10px', height: '10px' }}
//               onClick={() => setActiveIndex(index)}
//             ></button>
//           ))}
//         </div>
        
//         <div className="position-absolute bottom-0 start-0 w-100">
//           <div className="container-fluid">
//             <div className="row d-flex justify-content-start overflow-auto py-3">
//               {movies.map((movie, index) => (
//                 <div 
//                   key={movie.id} 
//                   className="col-5 col-md-2 pe-2" 
//                   onClick={() => setActiveIndex(index)}
//                 >
//                   <div className={`position-relative ${index === activeIndex ? 'border border-2 border-primary' : ''}`}>
//                     <img 
//                       src={movie.posterUrl} 
//                       className="img-fluid rounded" 
//                       alt={movie.title}
//                       style={{ height: '120px', width: '100%', objectFit: 'cover' }}
//                     />
//                     {index === activeIndex && (
//                       <div className="position-absolute top-50 start-50 translate-middle">
//                         <Link 
//                           to={`/movie/${movie.id}`}
//                           className="btn btn-sm btn-danger rounded"
//                         >
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
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { movies } from '../lib/MovieData';

// const MovieHero = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const featuredMovie = movies[activeIndex];
//   const [imageLoaded, setImageLoaded] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
//       setImageLoaded(true); // Reset image load state
//     }, 5000); // Automatically move to the next slide every 5 seconds
//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   return (
//     <div className="position-relative vh-100 w-100 overflow-hidden">
//       <div
//         className="hero-background position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
//         style={{
//           backgroundImage: imageLoaded && featuredMovie?.backgroundUrl ? `url(${featuredMovie.backgroundUrl})` : 'none',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           transition: 'background-image 1s ease-in-out',
//         }}
//         onError={() => setImageLoaded(false)}
//       >
//         <div className="container text-white text-center">
//           {imageLoaded && featuredMovie?.backgroundUrl ? (
//             <>
//               <h1 className="fw-bold">{featuredMovie.title}</h1>
//               <p className="fs-5">{featuredMovie.synopsis}</p>
//               <p className="mb-1"><strong>Director:</strong> {featuredMovie.director}</p>
//               <p className="mb-1"><strong>Cast:</strong> {featuredMovie.cast.join(', ')}</p>
//               <p><strong>Genre:</strong> {featuredMovie.genre.join(', ')}</p>
//               <Link to={`/movie/${featuredMovie.id}`} className="btn btn-danger btn-lg mt-3">
//                 Review
//               </Link>
//             </>
//           ) : (
//             <p className="text-white">Image not available</p>
//           )}
//         </div>
//       </div>
      
//       {/* Carousel Indicators */}
//       <div className="position-absolute bottom-0 w-100 pb-3 d-flex justify-content-center">
//         {movies.map((movie, index) => (
//           <button
//             key={index}
//             className={`mx-1 rounded-circle ${index === activeIndex ? 'bg-white' : 'bg-secondary'}`}
//             style={{ width: '12px', height: '12px', border: 'none' }}
//             onClick={() => setActiveIndex(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieHero;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../lib/MovieData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MovieHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredMovie = movies[activeIndex];
  const [imageLoaded, setImageLoaded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
      setImageLoaded(true); // Reset image load state
    }, 2000); // Automatically move to the next slide every 5 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  return (
    <div className="position-relative min-vh-100 w-100 overflow-hidden">
      <div
        className="hero-background position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: imageLoaded && featuredMovie?.backgroundUrl ? `url(${featuredMovie.backgroundUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
        }}
        onError={() => setImageLoaded(false)}
      >
         <div className="container text-white text-end position-absolute bottom-0 end-50 translate-middle-y p-4">
          {imageLoaded && featuredMovie?.backgroundUrl ? (
            <>
           
           
              <Link to={`/movie/${featuredMovie.id}`} className="btn btn-danger btn-lg mt-3">
                Review
              </Link>
            </>
          ) : (
            <p className="text-white">Image not available</p>
          )}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button className="position-absolute top-50 start-0 translate-middle-y btn  p-3" onClick={handlePrev}>
        <FaChevronLeft size={24} />
      </button>
      <button className="position-absolute top-50 end-0 translate-middle-y btn  p-3" onClick={handleNext}>
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default MovieHero;
