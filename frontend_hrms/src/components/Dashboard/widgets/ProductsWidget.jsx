// src/components/ProductsWidget.jsx
import React from 'react';
import './ProductsWidget.css';

function ProductsWidget() {
  const products = [
    { name: 'Men Grey Hoodie', price: '$99.9', unitsSold: 5 },
    { name: 'Women Striped T-Shirt', price: '$54.9', unitsSold: 5 },
    { name: 'Women White T-Shirt', price: '$24.7', unitsSold: 5 },
    { name: 'Men White T-Shirt', price: '$44.4', unitsSold: 5 },
    { name: 'Men White T-Shirt', price: '$34.9', unitsSold: 5 },
    
  ];

  return (
    <div className="widget products-widget">
      <h3>Top Products by Units Sold</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Units Sold</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.unitsSold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsWidget;
