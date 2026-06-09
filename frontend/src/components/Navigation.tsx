import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaDatabase, FaChartBar, FaHome } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar-vertical">
      <div className="navbar-brand">
        <h1>🔍 ATLAS</h1>
        <p className="tagline">OSINT Platform</p>
      </div>
      
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            <FaHome className="icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/collectors" className="nav-link">
            <FaDatabase className="icon" /> Collectors
          </Link>
        </li>
        <li>
          <Link to="/search" className="nav-link">
            <FaSearch className="icon" /> Search
          </Link>
        </li>
        <li>
          <Link to="/analyzer" className="nav-link">
            <FaChartBar className="icon" /> Analyzer
          </Link>
        </li>
      </ul>
      
      <div className="navbar-footer">
        <p>v1.0.0</p>
      </div>
    </nav>
  );
};

export default Navigation;
