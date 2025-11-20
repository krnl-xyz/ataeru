import { Router } from "express";
import {
  signup,
  login,
  getCurrentUser,
  updateProfile,
  changePassword,
  googleSSO,
  appleSSO,
  getAppleAuthorizationUrl,
} from "../controllers/auth.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// SSO routes (for both signin and signup)
router.post("/google", googleSSO);
router.get("/apple", getAppleAuthorizationUrl); // GET: Get Apple authorization URL
router.post("/apple", appleSSO); // POST: Handle Apple callback/token verification

// Protected routes (require authentication)
router.get("/me", authenticate, getCurrentUser);
router.put("/profile", authenticate, updateProfile);
router.put("/change-password", authenticate, changePassword);

export default router;

