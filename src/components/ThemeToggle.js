import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`btn rounded-circle d-flex align-items-center justify-content-center ${
        theme === 'dark' 
          ? 'btn-outline-light' 
          : 'btn-outline-dark'
      }`}
      style={{ width: "38px", height: "38px" }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <BsMoon /> : <BsSun />}
    </button>
  );
};

export default ThemeToggle;