import { Router } from "express";
import {
  createBooking,
  getMyBookings,
  getBookingById,
  getHospitalBookings,
  getMyHospitalBookings,
  updateBooking,
  cancelBooking,
  deleteBooking,
} from "../controllers/booking.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// All booking routes require authentication
router.use(authenticate);

// Get all bookings for the authenticated user
router.get("/me", getMyBookings);

// Get all bookings for hospitals owned by the authenticated user
router.get("/my-hospitals", getMyHospitalBookings);

// Get bookings for a specific hospital (hospital owner only)
router.get("/hospital/:hospitalId", getHospitalBookings);

// Get booking by ID
router.get("/:id", getBookingById);

// Create a new booking
router.post("/", createBooking);

// Update booking
router.put("/:id", updateBooking);

// Cancel booking
router.patch("/:id/cancel", cancelBooking);

// Delete booking
router.delete("/:id", deleteBooking);

export default router;

