// component for showing status information;
import React from 'react';
import './StatusCard.css';


const StatusCard = (props) => (
  <div className="status-card">
    <h2>{props.name}</h2>
    <p>{props.status}</p>
    {props.reason ? <p className="status-card-reason">{props.reason}</p> : null}
  </div>
);

export default StatusCard;