import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const fetchPendingOrders = async () => {
  const response = await axios.get(`${BASE_URL}/pending`);
  return response.data;
};

export const fetchCompletedOrders = async () => {
  const response = await axios.get(`${BASE_URL}/completed`);
  return response.data;
};

export const addOrder = async (order) => {
  const response = await axios.post(`${BASE_URL}/order`, order);
  return response.data;
};
