import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="splash">
      <nav className="splash-banner">
        <h2>WallStreetBets</h2>
      </nav>

      <div className="splash-nav">
        <ul className="links">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><a href=''>Careers</a></li>
          <li><a href=''>Help</a></li>
        </ul>
      </div>

      <div className='container'>
        <h1>Investing.</h1>
        <h1>For the average degenerate</h1>
      </div>
    </div>
  );
};

export default Splash;
