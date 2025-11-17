import { Router } from "express";
import {
  addPreference,
  getMyPreferences,
  updatePreference,
  removePreference,
} from "../controllers/user-preference.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// All routes require authentication
router.use(authenticate);

// Add a preference
router.post("/", addPreference);

// Get all preferences for the authenticated user
router.get("/me", getMyPreferences);

// Update a preference
router.put("/:id", updatePreference);

// Remove a preference
router.delete("/:id", removePreference);

export default router;

