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
        setData(result.results);
        if (result.results.length > 0) {
          const filteredColumns = Object.keys(result.results[0]).filter(
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
          {/* {data && data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column}>{item[column]}</td>
              ))}
            </tr> */}
            
          {data && data.length > 0 ? (
             data.map((item, index) => (
                <tr key={index}>
                    {columns && columns.map((column, colIndex) => (
                        <td key={colIndex}>{item[column] !== undefined ? item[column] : 'N/A'}</td>
            ))}
        </tr>
    ))
) : (
    <tr>
        <td colSpan={columns ? columns.length : 1} style={{ textAlign: 'center' }}>
            No data available
        </td>
    </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
