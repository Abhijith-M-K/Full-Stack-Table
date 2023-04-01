import express from "express";
import { addOrder, getCompletedOrders, getPendingOrders } from "../Controllers/OrderController.js";
const router = express.Router();


router.get('/pending', getPendingOrders);
router.get('/completed',getCompletedOrders);
router.post('/order', addOrder);

export default router;