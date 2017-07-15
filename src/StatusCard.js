// component for showing status information;
import React from 'react';
import './StatusCard.css';


const StatusCard = (props) => {
  // change card color dependent on severity status
  let bgColor = '';  
  if (props.severity < 3) {
    bgColor = 'red';
  } else if (props.severity > 3 && props.severity < 10) {
    bgColor = '#f9f981';
  } else {
    bgColor = '#a0f7a0';
  }
  
  const cardStyle = {
    backgroundColor: bgColor
  };

  return (
    <div className="status-card" style={cardStyle}>
      <h2>{props.name}</h2>
      <p>{props.status}</p>
      {props.reason ? <p className="status-card-reason">{props.reason}</p> : null}
    </div>
  )
};

export default StatusCard;