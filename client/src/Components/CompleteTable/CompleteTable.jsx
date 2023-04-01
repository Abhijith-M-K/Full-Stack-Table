import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchCompletedOrders } from '../../Api/Api';

function CompletedOrder() {
  const [orders, setOrders] = useState([]);
  useEffect(async () => {
    const response = await fetchCompletedOrders();
  }, []);


  // useEffect(() => {
  //   axios.get('/api/completed-orders')
  //     .then(res => {
  //       setOrders(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <h1>Completed Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Buyer</th>
            <th>Seller</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.buyer}</td>
              <td>{order.seller}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompletedOrder;
