import Order from "../Models/Order.js";
export const getPendingOrders = async (req, res) => {
  try {
    const orders = await Order.find({ status: 'pending' });
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export const getCompletedOrders = async (req, res) => {
  try {
    const orders = await Order.find({ status: 'completed' });
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export const addOrder = async (req, res) => {
  const { buyerId, sellerId, price } = req.body;
  try {
    const order = new Order({
      buyerId,
      sellerId,
      price,
      status: 'pending',
    });
    await order.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
