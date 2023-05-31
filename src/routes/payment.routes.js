import { Router } from "express";
import { createSession } from "../controllers/payment.controller.js";

const router = Router();

// This route is when the user begin with the payment (Route name based on Stripe example)
router.get('/create-checkout-session', createSession);

// Payment successful
router.get('/success', (req, res) => res.send('Success'))

// Payment error
router.get('/cancel', (req, res) => res.send('Cancel'))

export default router;