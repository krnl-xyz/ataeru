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
} from "../controllers/hospital.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// Public routes
router.get("/", getAllHospitals);
router.get("/search", searchHospitals);
router.get("/:id", getHospitalById);

// Protected routes (require authentication)
router.post("/register", authenticate, registerHospital);
router.get("/me/hospital", authenticate, getMyHospital);
router.put("/:id", authenticate, updateHospital);
router.delete("/:id", authenticate, deleteHospital);

// Rating route (can be public or protected, depending on your needs)
router.post("/:id/rating", updateHospitalRating);

export default router;

