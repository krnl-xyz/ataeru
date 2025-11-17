import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import "../middlewares/auth.middleware";

// Add a hospital preference for a treatment
export const addTreatmentPreference = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { treatmentId, treatmentName, hospitalId, preferenceType, notes } = req.body;

    // Validate required fields
    if (!treatmentId || !treatmentName || !hospitalId) {
      res.status(400).json({
        message: "treatmentId, treatmentName, and hospitalId are required",
      });
      return;
    }

    // Validate preferenceType
    const validPreferenceTypes = ['FULL_TIME', 'PREFERRED', 'OCCASIONAL'];
    const finalPreferenceType = preferenceType && validPreferenceTypes.includes(preferenceType.toUpperCase())
      ? preferenceType.toUpperCase()
      : 'FULL_TIME';

    // Verify hospital exists
    const hospital = await prisma.hospital.findUnique({
      where: { id: hospitalId },
    });

    if (!hospital) {
      res.status(404).json({ message: "Hospital not found" });
      return;
    }

    // Check if preference already exists
    const existingPreference = await prisma.treatmentPreference.findUnique({
      where: {
        treatmentId_hospitalId: {
          treatmentId,
          hospitalId,
        },
      },
    });

    if (existingPreference) {
      res.status(409).json({
        message: "Preference for this treatment and hospital already exists. Use update to modify it.",
      });
      return;
    }

    // Create the preference
    const preference = await prisma.treatmentPreference.create({
      data: {
        treatmentId,
        treatmentName,
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
      message: "Treatment preference added successfully",
      preference,
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      res.status(409).json({ message: "Preference for this treatment and hospital already exists" });
      return;
    }
    next(error);
  }
};

// Get all preferences for a specific treatment
export const getTreatmentPreferences = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { treatmentId } = req.params;

    const preferences = await prisma.treatmentPreference.findMany({
      where: { treatmentId },
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
            totalTreatments: true,
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

// Update a treatment preference
export const updateTreatmentPreference = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const { preferenceType, notes, treatmentName } = req.body;

    // Get the preference
    const preference = await prisma.treatmentPreference.findUnique({
      where: { id },
    });

    if (!preference) {
      res.status(404).json({ message: "Preference not found" });
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
    if (treatmentName !== undefined) {
      updateData.treatmentName = treatmentName;
    }

    const updatedPreference = await prisma.treatmentPreference.update({
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
      message: "Treatment preference updated successfully",
      preference: updatedPreference,
    });
  } catch (error) {
    next(error);
  }
};

// Remove a treatment preference
export const removeTreatmentPreference = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;

    // Get the preference
    const preference = await prisma.treatmentPreference.findUnique({
      where: { id },
    });

    if (!preference) {
      res.status(404).json({ message: "Preference not found" });
      return;
    }

    // Delete the preference
    await prisma.treatmentPreference.delete({
      where: { id },
    });

    res.status(200).json({ message: "Treatment preference removed successfully" });
  } catch (error) {
    next(error);
  }
};

