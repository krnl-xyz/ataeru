import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config";
import crypto from "crypto";
// Import middleware to ensure type declarations are loaded
import "../middlewares/auth.middleware";

// Generate a unique witnesshash for the user
function generateWitnessHash(): string {
  return crypto.randomBytes(32).toString('hex');
}

// Generate JWT token
function generateToken(userId: string, email: string): string {
  return jwt.sign(
    { userId, email },
    config.jwtSecret,
    { expiresIn: config.jwtExpiresIn } as jwt.SignOptions
  );
}

// Signup - Register a new user
export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { fullname, email, password, phone, address, about, hospitalId, userType } = req.body;

    // Validate required fields
    if (!fullname || !email || !password || !phone || !address || !hospitalId) {
      return res.status(400).json({
        message: "Missing required fields: fullname, email, password, phone, address, and hospitalId are required",
      });
    }

    // Validate userType if provided (must be USER or MEDICAL_FACILITY)
    const validUserTypes = ['USER', 'MEDICAL_FACILITY'];
    const finalUserType = userType && validUserTypes.includes(userType.toUpperCase())
      ? userType.toUpperCase()
      : 'USER'; // Default to USER if not provided or invalid

    // Validate password strength (minimum 6 characters)
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User with this email already exists",
      });
    }

    // Verify that the hospital exists
    const hospital = await prisma.hospitalInformation.findUnique({
      where: { facilityId: hospitalId },
    });

    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate witnesshash automatically
    const witnesshash = generateWitnessHash();

    // Create the user
    const user = await prisma.user.create({
      data: {
        fullname,
        email,
        password: hashedPassword,
        witnesshash,
        phone,
        address,
        about: about || null,
        userType: finalUserType as 'USER' | 'MEDICAL_FACILITY',
        hospitalId,
      },
      select: {
        id: true,
        fullname: true,
        email: true,
        witnesshash: true,
        phone: true,
        address: true,
        about: true,
        userType: true,
        hospitalId: true,
        createdAt: true,
        updatedAt: true,
        hospital: {
          select: {
            facilityId: true,
            facilityName: true,
            address: true,
            city: true,
            zip: true,
            state: true,
            country: true,
            telephone: true,
            hospitalType: true,
            hospitalOwnership: true,
            hospitalOverallRating: true,
            hospitalOverallRatingFootnote: true,
            emergencyServices: true,
          },
        },
      },
    });

    // Generate JWT token
    const token = generateToken(user.id, user.email);

    res.status(201).json({
      message: "User created successfully",
      user,
      token,
    });
  } catch (error: any) {
    // Handle unique constraint violations
    if (error.code === 'P2002') {
      if (error.meta?.target?.includes('email')) {
        return res.status(409).json({ message: "Email already exists" });
      }
      if (error.meta?.target?.includes('witnesshash')) {
        // Regenerate if collision (extremely rare)
        return res.status(500).json({ message: "Error generating witness hash. Please try again." });
      }
    }
    next(error);
  }
};

// Login - Authenticate user
export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // Find user by email (include password for verification)
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        hospital: true,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Generate JWT token
    const token = generateToken(user.id, user.email);

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = user;

    res.status(200).json({
      message: "Login successful",
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    next(error);
  }
};

// Get current user profile (requires authentication)
export const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // User ID is attached to request by auth middleware
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        fullname: true,
        email: true,
        witnesshash: true,
        phone: true,
        address: true,
        about: true,
        userType: true,
        hospitalId: true,
        createdAt: true,
        updatedAt: true,
        hospital: {
          select: {
            facilityId: true,
            facilityName: true,
            address: true,
            city: true,
            zip: true,
            state: true,
            country: true,
            telephone: true,
            hospitalType: true,
            hospitalOwnership: true,
            hospitalOverallRating: true,
            hospitalOverallRatingFootnote: true,
            emergencyServices: true,
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Update current user profile (requires authentication)
export const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }
    const { fullname, phone, address, about, hospitalId, userType } = req.body;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // If hospitalId is being updated, verify it exists
    if (hospitalId && hospitalId !== existingUser.hospitalId) {
      const hospital = await prisma.hospitalInformation.findUnique({
        where: { facilityId: hospitalId },
      });

      if (!hospital) {
        return res.status(404).json({ message: "Hospital not found" });
      }
    }

    // Update user (email and password should be updated through separate endpoints)
    const updateData: any = {};
    if (fullname !== undefined) updateData.fullname = fullname;
    if (phone !== undefined) updateData.phone = phone;
    if (address !== undefined) updateData.address = address;
    if (about !== undefined) updateData.about = about;
    if (hospitalId !== undefined) updateData.hospitalId = hospitalId;
    if (userType !== undefined) {
      const validUserTypes = ['USER', 'MEDICAL_FACILITY'];
      if (validUserTypes.includes(userType.toUpperCase())) {
        updateData.userType = userType.toUpperCase();
      }
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        fullname: true,
        email: true,
        witnesshash: true,
        phone: true,
        address: true,
        about: true,
        userType: true,
        hospitalId: true,
        createdAt: true,
        updatedAt: true,
        hospital: {
          select: {
            facilityId: true,
            facilityName: true,
            address: true,
            city: true,
            zip: true,
            state: true,
            country: true,
            telephone: true,
            hospitalType: true,
            hospitalOwnership: true,
            hospitalOverallRating: true,
            hospitalOverallRatingFootnote: true,
            emergencyServices: true,
          },
        },
      },
    });

    res.status(200).json({
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

// Change password (requires authentication)
export const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }
    const { currentPassword, newPassword } = req.body;

    // Validate required fields
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        message: "Current password and new password are required",
      });
    }

    // Validate new password strength
    if (newPassword.length < 6) {
      return res.status(400).json({
        message: "New password must be at least 6 characters long",
      });
    }

    // Get user with password
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Current password is incorrect",
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (error) {
    next(error);
  }
};

