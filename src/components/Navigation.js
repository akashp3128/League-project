// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sleep-data">Sleep Data</Link>
        </li>
        {/* Add more navigation links for other pages */}
      </ul>
    </nav>
  );
};

export default Navigation;
