import { Router } from "express";
import {
  signup,
  login,
  getCurrentUser,
  updateProfile,
  changePassword,
  googleSSO,
  appleSSO,
} from "../controllers/auth.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// SSO routes (for both signin and signup)
router.post("/google", googleSSO);
router.post("/apple", appleSSO);

// Protected routes (require authentication)
router.get("/me", authenticate, getCurrentUser);
router.put("/profile", authenticate, updateProfile);
router.put("/change-password", authenticate, changePassword);

export default router;

