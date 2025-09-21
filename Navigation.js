import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Student Career Platform</h2>
        </div>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/profile" 
              className={location.pathname === '/profile' ? 'active' : ''}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link 
              to="/roadmap" 
              className={location.pathname === '/roadmap' ? 'active' : ''}
            >
              Roadmap
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className={location.pathname === '/resume' ? 'active' : ''}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link 
              to="/interview" 
              className={location.pathname === '/interview' ? 'active' : ''}
            >
              Interview
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
