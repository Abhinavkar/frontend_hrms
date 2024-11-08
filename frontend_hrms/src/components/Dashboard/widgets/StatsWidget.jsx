// src/components/Dashboard/widgets/StatsWidget.jsx
import React from 'react';
import './StatsWidget.css';

const StatsWidget = ({ title, value, icon }) => {
  return (
    <div className="stats-widget">
      <div className="stats-widget-icon">{icon}</div>
      <div className="stats-widget-content">
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default StatsWidget;
