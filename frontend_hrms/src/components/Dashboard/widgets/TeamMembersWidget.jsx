// src/components/TeamMembersWidget.jsx
import React from 'react';
import './TeamMembersWidget.css';

function TeamMembersWidget() {
  const teamMembers = [
    { name: 'John Michael', status: 'online' },
    { name: 'Alex Smith', status: 'in meeting' },
    { name: 'Samantha Ivy', status: 'offline' },
    { name: 'John Michael', status: 'online' },
  ];

  return (
    <div className="widget team-members-widget">
      <h3>Team Members</h3>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index} className={member.status}>
            <span>{member.name}</span>
            <span className="status">{member.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamMembersWidget;
