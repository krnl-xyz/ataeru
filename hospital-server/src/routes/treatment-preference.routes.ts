import { Router } from "express";
import {
  addTreatmentPreference,
  getTreatmentPreferences,
  updateTreatmentPreference,
  removeTreatmentPreference,
} from "../controllers/treatment-preference.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// All routes require authentication
router.use(authenticate);

// Add a treatment preference
router.post("/", addTreatmentPreference);

// Get all preferences for a specific treatment
router.get("/treatment/:treatmentId", getTreatmentPreferences);

// Update a treatment preference
router.put("/:id", updateTreatmentPreference);

// Remove a treatment preference
router.delete("/:id", removeTreatmentPreference);

export default router;

