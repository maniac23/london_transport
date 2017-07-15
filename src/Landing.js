import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => (
  <div className="landing">
    <h1>London transport system</h1>
    <div className="wrapper">
      <Link to="/search">Check Tube status</Link>
      <Link to="/search">Check Buses status</Link>
      <Link to="/search">Check Buses status</Link>
      <Link to="/search">Check Buses status</Link>
    </div>
  </div>
);

export default Landing;