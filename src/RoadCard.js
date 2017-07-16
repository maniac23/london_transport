import React from 'react';
import './RoadCard.css';

const RoadCard = (props) => (
  <li className="road-card">
    <h2>{props.name}</h2>
    <div>
      <p>From: <span>{props.fromDate}</span></p>
      <p>To: <span>{props.toDate}</span></p>
    </div>
  </li>
);

export default RoadCard;