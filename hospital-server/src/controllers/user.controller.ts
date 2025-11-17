import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import crypto from "crypto";
import bcrypt from "bcryptjs";

// Generate a unique witnesshash for the user
function generateWitnessHash(): string {
  return crypto.randomBytes(32).toString('hex');
}

// Get all users
export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await prisma.user.findMany({
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
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Get user by ID
export const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id },
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
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Get user by email
export const getUserByEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email } = req.params;
    const user = await prisma.user.findUnique({
      where: { email },
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
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Create a new user (Admin/internal use - use /api/auth/signup for regular user registration)
export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { fullname, email, password, phone, address, about, hospitalId, userType } = req.body;

    // Validate required fields
    if (!fullname || !email || !password || !phone || !address || !hospitalId) {
      res.status(400).json({
        message: "Missing required fields: fullname, email, password, phone, address, and hospitalId are required",
      });
      return;
    }

    // Validate password strength
    if (password.length < 6) {
      res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
      return;
    }

    // Verify that the hospital exists
    const hospital = await prisma.hospitalInformation.findUnique({
      where: { facilityId: hospitalId },
    });

    if (!hospital) {
      res.status(404).json({ message: "Hospital not found" });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate witnesshash automatically
    const witnesshash = generateWitnessHash();

    // Validate userType if provided
    const validUserTypes = ['USER', 'MEDICAL_FACILITY'];
    const finalUserType = userType && validUserTypes.includes(userType.toUpperCase())
      ? userType.toUpperCase()
      : 'USER';

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

    res.status(201).json(user);
  } catch (error: any) {
    // Handle unique constraint violations
    if (error.code === 'P2002') {
      if (error.meta?.target?.includes('email')) {
        res.status(409).json({ message: "Email already exists" });
        return;
      }
      if (error.meta?.target?.includes('witnesshash')) {
        // Regenerate if collision (extremely rare)
        res.status(500).json({ message: "Error generating witness hash. Please try again." });
        return;
      }
    }
    next(error);
  }
};

// Update user
export const updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const { fullname, email, phone, address, about, hospitalId, userType } = req.body;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // If hospitalId is being updated, verify it exists
    if (hospitalId && hospitalId !== existingUser.hospitalId) {
      const hospital = await prisma.hospitalInformation.findUnique({
        where: { facilityId: hospitalId },
      });

      if (!hospital) {
        res.status(404).json({ message: "Hospital not found" });
        return;
      }
    }

    // Update user (witnesshash should not be updated)
    const updateData: any = {};
    if (fullname !== undefined) updateData.fullname = fullname;
    if (email !== undefined) updateData.email = email;
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
      where: { id },
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

    res.status(200).json(user);
  } catch (error: any) {
    if (error.code === 'P2002') {
      if (error.meta?.target?.includes('email')) {
        res.status(409).json({ message: "Email already exists" });
        return;
      }
    }
    next(error);
  }
};

// Delete user
export const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// Get users by hospital
export const getUsersByHospital = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { hospitalId } = req.params;

    // Verify hospital exists
    const hospital = await prisma.hospitalInformation.findUnique({
      where: { facilityId: hospitalId },
    });

    if (!hospital) {
      res.status(404).json({ message: "Hospital not found" });
      return;
    }

    const users = await prisma.user.findMany({
      where: { hospitalId },
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
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Get users by type
export const getUsersByType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { userType } = req.params;

    // Validate userType
    const validUserTypes = ['USER', 'MEDICAL_FACILITY'];
    if (!validUserTypes.includes(userType.toUpperCase())) {
      res.status(400).json({
        message: "Invalid user type. Must be USER or MEDICAL_FACILITY",
      });
      return;
    }

    const users = await prisma.user.findMany({
      where: {
        userType: userType.toUpperCase() as 'USER' | 'MEDICAL_FACILITY',
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
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
