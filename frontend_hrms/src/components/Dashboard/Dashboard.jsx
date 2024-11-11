// src/components/Dashboard/Dashboard.jsx
import React from 'react';
import TableComponent from '../Function';
import StatsWidget from '../Dashboard/widgets/StatsWidget'
import './Dashboard.css';
import TeamMembersWidget from './widgets/TeamMembersWidget';
import ProgressTrackWidget from './widgets/ProgressTrackWidget';
import TransactionsWidget from './widgets/TransactionsWidget';
import TodoListWidget from './widgets/TodoListWidget';
import ProductsWidget from './widgets/ProductsWidget';
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
            <div className="dashboard">
      <div className="row">
        <TransactionsWidget />
        <ProductsWidget />
      </div>
      <div className="row">
        <TeamMembersWidget />
        <TodoListWidget />
        <ProgressTrackWidget />
      </div>
    </div>
            
    </div>
        
    );
  
}


export default Dashboard;
