import { Router } from "express";
import {
  createCheckoutSession,
  getMySubscription,
  cancelSubscription,
  reactivateSubscription,
  updateSubscriptionPlan,
  getAvailablePlans,
  handleStripeWebhook,
} from "../controllers/subscription.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// Webhook endpoint (must be before express.json() middleware in app.ts)
// This is handled separately in app.ts to allow raw body parsing

// Public route - get available plans
router.get("/plans", getAvailablePlans);

// Protected routes (require authentication)
router.use(authenticate);

// Create checkout session
router.post("/checkout", createCheckoutSession);

// Get current subscription
router.get("/me", getMySubscription);

// Cancel subscription
router.post("/cancel", cancelSubscription);

// Reactivate subscription
router.post("/reactivate", reactivateSubscription);

// Update subscription plan
router.put("/plan", updateSubscriptionPlan);

export default router;

