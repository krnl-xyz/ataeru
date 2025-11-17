import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import "../middlewares/auth.middleware";

// Add a hospital preference for a user
export const addPreference = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { hospitalId, preferenceType, notes } = req.body;

    // Validate required fields
    if (!hospitalId) {
      res.status(400).json({
        message: "hospitalId is required",
      });
      return;
    }

    // Validate preferenceType
    const validPreferenceTypes = ['FULL_TIME', 'PREFERRED', 'OCCASIONAL'];
    const finalPreferenceType = preferenceType && validPreferenceTypes.includes(preferenceType.toUpperCase())
      ? preferenceType.toUpperCase()
      : 'FULL_TIME';

    // Verify user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Verify hospital exists
    const hospital = await prisma.hospital.findUnique({
      where: { id: hospitalId },
    });

    if (!hospital) {
      res.status(404).json({ message: "Hospital not found" });
      return;
    }

    // Check if preference already exists
    const existingPreference = await prisma.userPreference.findUnique({
      where: {
        userId_hospitalId: {
          userId,
          hospitalId,
        },
      },
    });

    if (existingPreference) {
      res.status(409).json({
        message: "Preference for this hospital already exists. Use update to modify it.",
      });
      return;
    }

    // Create the preference
    const preference = await prisma.userPreference.create({
      data: {
        userId,
        hospitalId,
        preferenceType: finalPreferenceType,
        notes: notes || null,
      },
      include: {
        hospital: {
          select: {
            id: true,
            name: true,
            location: true,
            rating: true,
            specialties: true,
            imageUrl: true,
            verified: true,
          },
        },
      },
    });

    res.status(201).json({
      message: "Preference added successfully",
      preference,
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      res.status(409).json({ message: "Preference for this hospital already exists" });
      return;
    }
    next(error);
  }
};

// Get all preferences for the authenticated user
export const getMyPreferences = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const preferences = await prisma.userPreference.findMany({
      where: { userId },
      include: {
        hospital: {
          select: {
            id: true,
            name: true,
            location: true,
            rating: true,
            specialties: true,
            imageUrl: true,
            verified: true,
            totalRequests: true,
            totalCustomers: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(preferences);
  } catch (error) {
    next(error);
  }
};

// Update a preference
export const updatePreference = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { id } = req.params;
    const { preferenceType, notes } = req.body;

    // Get the preference
    const preference = await prisma.userPreference.findUnique({
      where: { id },
    });

    if (!preference) {
      res.status(404).json({ message: "Preference not found" });
      return;
    }

    // Verify user owns this preference
    if (preference.userId !== userId) {
      res.status(403).json({ message: "You are not authorized to update this preference" });
      return;
    }

    // Validate preferenceType if provided
    const updateData: any = {};
    if (preferenceType !== undefined) {
      const validPreferenceTypes = ['FULL_TIME', 'PREFERRED', 'OCCASIONAL'];
      if (validPreferenceTypes.includes(preferenceType.toUpperCase())) {
        updateData.preferenceType = preferenceType.toUpperCase();
      } else {
        res.status(400).json({
          message: "Invalid preferenceType. Must be one of: FULL_TIME, PREFERRED, OCCASIONAL",
        });
        return;
      }
    }
    if (notes !== undefined) {
      updateData.notes = notes;
    }

    const updatedPreference = await prisma.userPreference.update({
      where: { id },
      data: updateData,
      include: {
        hospital: {
          select: {
            id: true,
            name: true,
            location: true,
            rating: true,
            specialties: true,
            imageUrl: true,
            verified: true,
          },
        },
      },
    });

    res.status(200).json({
      message: "Preference updated successfully",
      preference: updatedPreference,
    });
  } catch (error) {
    next(error);
  }
};

// Remove a preference
export const removePreference = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { id } = req.params;

    // Get the preference
    const preference = await prisma.userPreference.findUnique({
      where: { id },
    });

    if (!preference) {
      res.status(404).json({ message: "Preference not found" });
      return;
    }

    // Verify user owns this preference
    if (preference.userId !== userId) {
      res.status(403).json({ message: "You are not authorized to delete this preference" });
      return;
    }

    // Delete the preference
    await prisma.userPreference.delete({
      where: { id },
    });

    res.status(200).json({ message: "Preference removed successfully" });
  } catch (error) {
    next(error);
  }
};

