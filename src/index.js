import express from "express";
import paymentRoutes from "./routes/payment.routes.js";
import { PORT } from "./config.js";

const app = express();

app.use(express.json())

// Router
app.use(paymentRoutes);

// Init server
app.listen(PORT);
console.log("Server on port", PORT); 