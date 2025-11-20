import { Router } from "express";
import {
  createRequest,
  getMyRequests,
  getHospitalRequests,
  getRequestById,
  updateRequestStatus,
  updateRequest,
  deleteRequest,
  getRequestsByType,
  getRequestsByStatus,
} from "../controllers/request.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { requireSubscription } from "../middlewares/subscription.middleware";

const router = Router();

// All routes require authentication and subscription
router.use(authenticate);
router.use(requireSubscription);

// Create a new request
router.post("/", createRequest);

// Get all requests made by the authenticated user
router.get("/me", getMyRequests);

// Get all requests for a specific hospital (hospital owner only)
router.get("/hospital/:hospitalId", getHospitalRequests);

// Get requests by type
router.get("/type/:type", getRequestsByType);

// Get requests by status
router.get("/status/:status", getRequestsByStatus);

// Get request by ID
router.get("/:id", getRequestById);

// Update request
router.put("/:id", updateRequest);

// Update request status (hospital owner only)
router.patch("/:id/status", updateRequestStatus);

// Delete request
router.delete("/:id", deleteRequest);

export default router;

