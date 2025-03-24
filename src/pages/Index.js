// src/pages/Index.js
import React from 'react';
import MovieHero from '../components/MovieHero';
import MovieSection from '../components/MovieSection';
import { movies } from '../lib/MovieData';

const Index = () => {
  const nowPlayingMovies = movies.filter(movie => movie.nowPlaying);
  const thrillerMovies = movies.filter(movie => movie.isThriller);
  const actionMovies = movies.filter(movie => movie.genre.includes('Action'));

  return (
    <div>
      <MovieHero movies={nowPlayingMovies} />
      <div className="py-4">
        <MovieSection title="Currently playing" movies={nowPlayingMovies} seeMoreLink="/now-playing" />
        <MovieSection title="Thriller Movies" movies={thrillerMovies} seeMoreLink="/thriller" />
        <MovieSection title="Action Movies" movies={actionMovies} seeMoreLink="/action" />
      </div>
    </div>
  );
};

export default Index;
