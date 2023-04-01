import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  buyerId: {
    type: String,
    ref: 'User',
    required: true,
  },
  sellerId: {
    type: String,
    ref: 'User',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{ timestamps: true });

const OrderModel = mongoose.model("Order", OrderSchema);
export default OrderModel;
