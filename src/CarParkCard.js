import React from 'react';
import './CarParkCard.css';

const CarParkCard = (props) => (
  <div className="car-park-card">
    <h2>{props.name}</h2>
    <p>Capacity: <span>{props.capacity}</span></p>
    <div className="capacity-wrapper">
      <p>Occupied: <span>{props.occupied}</span></p>
      <p>Free: <span>{props.free}</span></p>
    </div>
  </div>
);  

export default CarParkCard;