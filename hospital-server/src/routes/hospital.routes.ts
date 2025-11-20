import { Router } from "express";
import {
  registerHospital,
  getHospitalById,
  getAllHospitals,
  getMyHospital,
  updateHospital,
  deleteHospital,
  searchHospitals,
  updateHospitalRating,
  getHospitalStatistics,
  updateHospitalStatistics,
} from "../controllers/hospital.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { requireSubscription } from "../middlewares/subscription.middleware";

const router = Router();

// Public routes (no subscription required)
router.get("/", getAllHospitals);
router.get("/search", searchHospitals);
router.get("/:id", getHospitalById);

// Protected routes (require authentication and subscription)
router.use(authenticate);
router.use(requireSubscription);
router.post("/register", registerHospital);
router.get("/me/hospital", getMyHospital);
router.get("/:id/statistics", getHospitalStatistics);
router.put("/:id/statistics", updateHospitalStatistics);
router.put("/:id", updateHospital);
router.delete("/:id", deleteHospital);

// Rating route (can be public or protected, depending on your needs)
router.post("/:id/rating", updateHospitalRating);

export default router;

