import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', theme);
    
    // Apply theme classes to body
    if (theme === 'dark') {
      document.body.classList.add('dark-theme', 'bg-dark', 'text-light');
      document.body.classList.remove('light-theme', 'bg-light', 'text-dark');
    } else {
      document.body.classList.add('light-theme', 'bg-light', 'text-dark');
      document.body.classList.remove('dark-theme', 'bg-dark', 'text-light');
    }
    
    // Set data-bs-theme attribute for Bootstrap 5.3+ (if using)
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};