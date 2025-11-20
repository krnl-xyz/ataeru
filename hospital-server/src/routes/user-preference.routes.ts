import { Router } from "express";
import {
  addPreference,
  getMyPreferences,
  updatePreference,
  removePreference,
} from "../controllers/user-preference.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { requireSubscription } from "../middlewares/subscription.middleware";

const router = Router();

// All routes require authentication and subscription
router.use(authenticate);
router.use(requireSubscription);

// Add a preference
router.post("/", addPreference);

// Get all preferences for the authenticated user
router.get("/me", getMyPreferences);

// Update a preference
router.put("/:id", updatePreference);

// Remove a preference
router.delete("/:id", removePreference);

export default router;

