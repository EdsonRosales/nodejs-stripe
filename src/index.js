import express from "express";
import paymentRoutes from "./routes/payment.routes.js";

const app = express();

app.use(express.json())

// Router
app.use(paymentRoutes);

// Init server
app.listen(3000);
console.log("Server on port 3000");