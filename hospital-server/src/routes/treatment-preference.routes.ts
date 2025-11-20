import { Router } from "express";
import {
  addTreatmentPreference,
  getTreatmentPreferences,
  updateTreatmentPreference,
  removeTreatmentPreference,
} from "../controllers/treatment-preference.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { requireSubscription } from "../middlewares/subscription.middleware";

const router = Router();

// All routes require authentication and subscription
router.use(authenticate);
router.use(requireSubscription);

// Add a treatment preference
router.post("/", addTreatmentPreference);

// Get all preferences for a specific treatment
router.get("/treatment/:treatmentId", getTreatmentPreferences);

// Update a treatment preference
router.put("/:id", updateTreatmentPreference);

// Remove a treatment preference
router.delete("/:id", removeTreatmentPreference);

export default router;

