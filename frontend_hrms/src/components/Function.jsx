import React, { useEffect, useState } from 'react';

const TableComponent = ({ title, apiUrl }) => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      console.log("API HIT");
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const result = await response.json();
        setData(result);
        if (result.length > 0) {
          const filteredColumns = Object.keys(result[0]).filter(
            column => column !== 'dept_id' && column !== 'bu_id' && column !== 'skills_id'&& column !== 'techstack_id' && column !== 'role_id'
          );
          setColumns(filteredColumns);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl, token]);

  return (
    <div>
      <h2>{title}</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse',}}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column.replace('_', ' ').toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column}>{item[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
