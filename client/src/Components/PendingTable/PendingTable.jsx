import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchPendingOrders } from '../../Api/Api';

const PendingOrderTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    const response = await fetchPendingOrders();
  }, []);

  return (
    <div>
      <h2>Pending Orders</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Buyer</th>
            <th>Seller</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.buyer}</td>
              <td>{order.seller}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrderTable;
