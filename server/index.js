import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { createServer } from "http";
import connectDB from "./config/dbConnect.js";

import cors from "cors";
import { addOrder, getCompletedOrders, getPendingOrders } from "./Controllers/OrderController.js";

const app = express();
const httpServer = createServer(app);

app.use(express.static("public"));
app.use(cors());
app.use("/images", express.static("images"));
dotenv.config();
connectDB();

//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, console.log(`server up and running on ${PORT}`));


app.get('/order',getCompletedOrders)
app.get('/order-pending',getPendingOrders)
app.post('/add-order',addOrder)