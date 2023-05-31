import { Router } from "express";

const router = Router();

// This route is when the user begin with the payment (Route name based on Stripe example)
router.get('/create-checkout-session', (req, res) => res.send('Send'));

// Payment successful
router.get('/success', (req, res) => res.send('Success'))

// Payment error
router.get('/cancel', (req, res) => res.send('Cancel'))

export default router;