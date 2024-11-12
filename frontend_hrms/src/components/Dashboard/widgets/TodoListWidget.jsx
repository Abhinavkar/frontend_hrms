// src/components/ToDoListWidget.jsx
import React from 'react';
import '../Dashboard/'

function ToDoListWidget() {
  const tasks = [
    { task: 'Call with Dave', time: '09:30 AM' },
    { task: 'Brunch Meeting', time: '11:00 AM' },
    { task: 'Argon Dashboard Launch', time: '02:00 PM' },
    { task: 'Winter Hackathon', time: '03:30 PM' },
    { task: 'Team Standup', time: '11:30 AM' },
  ];

  return (
    <div className="widget todo-list-widget">
      <h3>To Do List</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.task}</span>
            <span className="time">{task.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoListWidget;
