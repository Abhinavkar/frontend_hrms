// src/components/TransactionsWidget.jsx
import React from 'react';
import './TransactionsWidget.css';

function TransactionsWidget() {
  const transactions = [
    { name: 'John Doe', date: '04.01.2024', amount: 100, status: 'pending' },
    { name: 'Jane Smith', date: '05.02.2024', amount: 150, status: 'pending' },
    { name: 'Alice Johnson', date: '14.03.2024', amount: 200, status: 'paid' },
    { name: 'Bob Williams', date: '04.03.2024', amount: 120, status: 'pending' },
    { name: 'Eva Brown', date: '30.05.2024', amount: 180, status: 'paid' },
  ];

  return (
    <div className="widget transactions-widget">
      <h3>Recent Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.name}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td className={`status ${transaction.status}`}>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsWidget;
