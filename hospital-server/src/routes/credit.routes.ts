import { Router } from "express";
import {
  getMyCredits,
  getCreditTransactions,
} from "../controllers/credit.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// All routes require authentication
router.use(authenticate);

// Get my credit balance
router.get("/me", getMyCredits);

// Get credit transaction history
router.get("/transactions", getCreditTransactions);

export default router;

