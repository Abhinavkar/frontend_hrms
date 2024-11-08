// src/components/Dashboard/Dashboard.jsx
import React from 'react';
import TableComponent from '../Function';
import StatsWidget from '../Dashboard/widgets/StatsWidget'
import './Dashboard.css';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Dataset 1',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40],
        },
    ],
};
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: { beginAtZero: true },
        y: { beginAtZero: true },
    },
    plugins: {
        legend: { display: false }
    }
};
function Dashboard() {
  return (
   
    <div className="dashboard-container">
            <div className="widget-container">
                <div className="widget">
                    <h3>Total Revenue</h3>
                    <p>$10,540</p>
                </div>
                <div className="widget">
                    <h3>Orders</h3>
                    <p>1,056</p>
                </div>
                <div className="widget">
                    <h3>Active Sessions</h3>
                    <p>56</p>
                </div>
                <div className="widget">
                    <h3>Total Sessions</h3>
                    <p>56</p>
                </div>
            </div>
            
        </div>
    );
  
}

export default Dashboard;
