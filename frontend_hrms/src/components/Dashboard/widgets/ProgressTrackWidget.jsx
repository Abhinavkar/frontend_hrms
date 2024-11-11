// src/components/ProgressTrackWidget.jsx
import React from 'react';
import './ProgressTrackWidget.css';

function ProgressTrackWidget() {
  const progressItems = [
    { project: 'React Material Dashboard', progress: 75 },
    { project: 'Argon Design System', progress: 50 },
    { project: 'VueJs Now UI Kit PRO', progress: 30 },
    { project: 'Soft UI Dashboard', progress: 60 },
    { project: 'Next.js Enterprise Starter', progress: 90 },
  ];

  return (
    <div className="widget progress-track-widget">
      <h3>Progress Track</h3>
      <ul>
        {progressItems.map((item, index) => (
          <li key={index}>
            <span>{item.project}</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressTrackWidget;
