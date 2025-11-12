import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import "../middlewares/auth.middleware";

// Register a new hospital (requires authentication and MEDICAL_FACILITY user type)
export const registerHospital = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const { name, location, rating, specialties, imageUrl, walletAddress } = req.body;

    // Validate required fields
    if (!name || !location || !walletAddress) {
      return res.status(400).json({
        message: "Missing required fields: name, location, and walletAddress are required",
      });
    }

    // Verify user exists and is a MEDICAL_FACILITY
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.userType !== 'MEDICAL_FACILITY') {
      return res.status(403).json({
        message: "Only MEDICAL_FACILITY users can register hospitals",
      });
    }

    // Check if user already has a registered hospital
    const existingHospital = await prisma.hospital.findUnique({
      where: { ownerId: userId },
    });

    if (existingHospital) {
      return res.status(409).json({
        message: "You have already registered a hospital. Update your existing hospital instead.",
      });
    }

    // Validate specialties is an array
    const specialtiesArray = Array.isArray(specialties) ? specialties : [];
    
    // Validate rating if provided (should be between 0 and 5)
    const finalRating = rating !== undefined 
      ? Math.max(0, Math.min(5, parseFloat(rating))) 
      : 0;

    // Create the hospital
    const hospital = await prisma.hospital.create({
      data: {
        name,
        location,
        rating: finalRating,
        specialties: specialtiesArray,
        imageUrl: imageUrl || null,
        walletAddress,
        ownerId: userId,
        verified: false, // New hospitals start as unverified
        isFavorite: false,
        reviews: 0,
      },
      include: {
        owner: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
            userType: true,
          },
        },
      },
    });

    res.status(201).json({
      message: "Hospital registered successfully",
      hospital,
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      if (error.meta?.target?.includes('ownerId')) {
        return res.status(409).json({ 
          message: "You have already registered a hospital" 
        });
      }
    }
    next(error);
  }
};

// Get hospital by ID
export const getHospitalById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const hospital = await prisma.hospital.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
            userType: true,
          },
        },
      },
    });

    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    res.status(200).json(hospital);
  } catch (error) {
    next(error);
  }
};

// Get all hospitals
export const getAllHospitals = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hospitals = await prisma.hospital.findMany({
      include: {
        owner: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
            userType: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(hospitals);
  } catch (error) {
    next(error);
  }
};

// Get hospital by owner (current authenticated user)
export const getMyHospital = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const hospital = await prisma.hospital.findUnique({
      where: { ownerId: userId },
      include: {
        owner: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
            userType: true,
          },
        },
      },
    });

    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found. Please register a hospital first." });
    }

    res.status(200).json(hospital);
  } catch (error) {
    next(error);
  }
};

// Update hospital (only owner can update)
export const updateHospital = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const { id } = req.params;
    const { name, location, rating, specialties, imageUrl, walletAddress, verified, isFavorite } = req.body;

    // Check if hospital exists
    const hospital = await prisma.hospital.findUnique({
      where: { id },
    });

    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    // Verify user is the owner
    if (hospital.ownerId !== userId) {
      return res.status(403).json({
        message: "You are not authorized to update this hospital",
      });
    }

    // Build update data
    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (location !== undefined) updateData.location = location;
    if (rating !== undefined) updateData.rating = Math.max(0, Math.min(5, parseFloat(rating)));
    if (specialties !== undefined) {
      updateData.specialties = Array.isArray(specialties) ? specialties : [];
    }
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
    if (walletAddress !== undefined) updateData.walletAddress = walletAddress;
    if (isFavorite !== undefined) updateData.isFavorite = isFavorite;
    // Only allow admins to update verified status (you can add admin check here)
    // if (verified !== undefined) updateData.verified = verified;

    const updatedHospital = await prisma.hospital.update({
      where: { id },
      data: updateData,
      include: {
        owner: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
            userType: true,
          },
        },
      },
    });

    res.status(200).json({
      message: "Hospital updated successfully",
      hospital: updatedHospital,
    });
  } catch (error) {
    next(error);
  }
};

// Delete hospital (only owner can delete)
export const deleteHospital = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const { id } = req.params;

    // Check if hospital exists
    const hospital = await prisma.hospital.findUnique({
      where: { id },
    });

    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    // Verify user is the owner
    if (hospital.ownerId !== userId) {
      return res.status(403).json({
        message: "You are not authorized to delete this hospital",
      });
    }

    await prisma.hospital.delete({
      where: { id },
    });

    res.status(200).json({ message: "Hospital deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// Search hospitals by name, location, or specialties
export const searchHospitals = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { query, location, specialty, minRating } = req.query;

    const where: any = {};

    if (query) {
      where.OR = [
        { name: { contains: query as string, mode: 'insensitive' } },
        { location: { contains: query as string, mode: 'insensitive' } },
      ];
    }

    if (location) {
      where.location = { contains: location as string, mode: 'insensitive' };
    }

    if (specialty) {
      where.specialties = { has: specialty as string };
    }

    if (minRating) {
      where.rating = { gte: parseFloat(minRating as string) };
    }

    const hospitals = await prisma.hospital.findMany({
      where,
      include: {
        owner: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
            userType: true,
          },
        },
      },
      orderBy: {
        rating: 'desc',
      },
    });

    res.status(200).json(hospitals);
  } catch (error) {
    next(error);
  }
};

// Update hospital rating and reviews (for patients/users to rate)
export const updateHospitalRating = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { rating, review } = req.body;

    // Validate rating
    if (rating === undefined || rating < 0 || rating > 5) {
      return res.status(400).json({
        message: "Rating must be between 0 and 5",
      });
    }

    // Get current hospital data
    const hospital = await prisma.hospital.findUnique({
      where: { id },
    });

    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    // Calculate new average rating
    const newReviews = hospital.reviews + 1;
    const newRating = ((hospital.rating * hospital.reviews) + rating) / newReviews;

    // Update hospital
    const updatedHospital = await prisma.hospital.update({
      where: { id },
      data: {
        rating: newRating,
        reviews: newReviews,
      },
      include: {
        owner: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
            userType: true,
          },
        },
      },
    });

    res.status(200).json({
      message: "Rating updated successfully",
      hospital: updatedHospital,
    });
  } catch (error) {
    next(error);
  }
};

