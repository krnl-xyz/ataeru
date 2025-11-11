import { Router } from "express";
import {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  getUsersByHospital,
  getUsersByType,
} from "../controllers/user.controller";

const router = Router();

// Get all users
router.get("/", getUsers);

// Get user by email (must come before /:id to avoid route conflicts)
router.get("/email/:email", getUserByEmail);

// Get users by type (must come before /:id to avoid route conflicts)
router.get("/type/:userType", getUsersByType);

// Get users by hospital (must come before /:id to avoid route conflicts)
router.get("/hospital/:hospitalId", getUsersByHospital);

// Get user by ID
router.get("/:id", getUserById);

// Create a new user
router.post("/", createUser);

// Update user
router.put("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

export default router;

