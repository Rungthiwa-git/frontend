import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Import the CSS file

function Nav() {
  return (
    <div className="nav-container">
      <Link to="/" className="nav-link">Login</Link>
      <Link to="/Register" className="nav-link">Register</Link>
    </div>
  );
}

export default Nav;

