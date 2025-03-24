//src/app.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
