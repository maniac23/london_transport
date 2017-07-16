import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => (
  <div className="landing">
    <h1>London transport system</h1>
    <div className="wrapper">
      <Link to="/tube">Check Tube status</Link>
      <Link to="/carparks">Check Car parks occupancy</Link>
      <Link to="/roads">Check road works</Link>
    </div>
  </div>
);

export default Landing;