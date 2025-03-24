
// src/components/AuthModal.js
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const { login } = useAuth();
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email }, isAdmin);
    onClose();
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className={`modal auth-modal fade ${isOpen ? 'show' : ''}`} 
         style={{ display: isOpen ? 'block' : 'none' }} 
         tabIndex="-1"
         aria-hidden={!isOpen}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title text-primary">{isLoginForm ? 'Login' : 'Sign Up'}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <div className="mb-3 form-check">
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  id="isAdmin" 
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="isAdmin">I am an admin</label>
              </div>
              <button type="submit" className="btn btn-primary-custom w-100">
                {isLoginForm ? 'Login' : 'Sign Up'}
              </button>
            </form>
          </div>
          <div className="modal-footer border-0 justify-content-center">
            <p>
              {isLoginForm ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={toggleForm} 
                className="btn btn-link text-primary text-decoration-none"
              >
                {isLoginForm ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
