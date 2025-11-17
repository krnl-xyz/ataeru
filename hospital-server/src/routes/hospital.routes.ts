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

const router = Router();

// Public routes
router.get("/", getAllHospitals);
router.get("/search", searchHospitals);
router.get("/:id", getHospitalById);

// Protected routes (require authentication)
router.use(authenticate);
router.post("/register", registerHospital);
router.get("/me/hospital", getMyHospital);
router.get("/:id/statistics", getHospitalStatistics);
router.put("/:id/statistics", updateHospitalStatistics);
router.put("/:id", updateHospital);
router.delete("/:id", deleteHospital);

// Rating route (can be public or protected, depending on your needs)
router.post("/:id/rating", updateHospitalRating);

export default router;

