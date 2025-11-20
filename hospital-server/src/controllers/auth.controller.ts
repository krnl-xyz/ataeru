import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config";
import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";
import appleSignin from "apple-signin-auth";
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
export const signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { fullname, email, password, phone, address, about, hospitalId, userType } = req.body;

    // Validate userType if provided (must be USER or MEDICAL_FACILITY)
    const validUserTypes = ['USER', 'MEDICAL_FACILITY'];
    const finalUserType = userType && validUserTypes.includes(userType.toUpperCase())
      ? userType.toUpperCase()
      : 'USER'; // Default to USER if not provided or invalid

    // Validate required fields
    // hospitalId is required for USER type, optional for MEDICAL_FACILITY
    if (!fullname || !email || !password || !phone || !address) {
      res.status(400).json({
        message: "Missing required fields: fullname, email, password, phone, and address are required",
      });
      return;
    }

    // hospitalId is required for regular USERs, optional for MEDICAL_FACILITY
    // if (finalUserType === 'USER' && !hospitalId) {
    //   res.status(400).json({
    //     message: "hospitalId is required for USER type",
    //   });
    //   return;
    // }

    // Validate password strength (minimum 6 characters)
    if (password.length < 6) {
      res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        message: "Invalid email format",
      });
      return;
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      res.status(409).json({
        message: "User with this email already exists",
      });
      return;
    }

    // Verify that the hospital exists (only if hospitalId is provided)
    if (hospitalId) {
      const hospital = await prisma.hospitalInformation.findUnique({
        where: { facilityId: hospitalId },
      });

      if (!hospital) {
        res.status(404).json({ message: "Hospital not found" });
        return;
      }
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
        hospitalId: hospitalId || null, // Optional for MEDICAL_FACILITY
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
        registeredHospital: {
          select: {
            id: true,
            name: true,
            location: true,
            rating: true,
            specialties: true,
            imageUrl: true,
            isFavorite: true,
            reviews: true,
            verified: true,
            walletAddress: true,
            createdAt: true,
            updatedAt: true,
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

// Login - Authenticate user
export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      res.status(400).json({
        message: "Email and password are required",
      });
      return;
    }

    // Find user by email (we need password for verification, so we'll fetch it separately)
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(401).json({
        message: "Invalid email or password",
      });
      return;
    }

    // Check if user has a password (OAuth users don't have passwords)
    if (!user.password) {
      res.status(401).json({
        message: `This account uses ${user.authProvider} authentication. Please sign in with ${user.authProvider}.`,
      });
      return;
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password!);

    if (!isPasswordValid) {
      res.status(401).json({
        message: "Invalid email or password",
      });
      return;
    }

    // Fetch user data without password for response
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
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
        registeredHospital: {
          select: {
            id: true,
            name: true,
            location: true,
            rating: true,
            specialties: true,
            imageUrl: true,
            isFavorite: true,
            reviews: true,
            verified: true,
            walletAddress: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    // Generate JWT token
    const token = generateToken(user.id, user.email);

    res.status(200).json({
      message: "Login successful",
      user: userData,
      token,
    });
  } catch (error) {
    next(error);
  }
};

// Get current user profile (requires authentication)
export const getCurrentUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // User ID is attached to request by auth middleware
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
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
        registeredHospital: {
          select: {
            id: true,
            name: true,
            location: true,
            rating: true,
            specialties: true,
            imageUrl: true,
            isFavorite: true,
            reviews: true,
            verified: true,
            walletAddress: true,
            createdAt: true,
            updatedAt: true,
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

// Update current user profile (requires authentication)
export const updateProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }
    const { fullname, phone, address, about, hospitalId, userType } = req.body;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
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
        registeredHospital: {
          select: {
            id: true,
            name: true,
            location: true,
            rating: true,
            specialties: true,
            imageUrl: true,
            isFavorite: true,
            reviews: true,
            verified: true,
            walletAddress: true,
            createdAt: true,
            updatedAt: true,
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
export const changePassword = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }
    const { currentPassword, newPassword } = req.body;

    // Validate required fields
    if (!currentPassword || !newPassword) {
      res.status(400).json({
        message: "Current password and new password are required",
      });
      return;
    }

    // Validate new password strength
    if (newPassword.length < 6) {
      res.status(400).json({
        message: "New password must be at least 6 characters long",
      });
      return;
    }

    // Get user with password
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Verify current password
    if (!user.password) {
      res.status(400).json({
        message: "Password change is not available for OAuth users",
      });
      return;
    }
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

    if (!isPasswordValid) {
      res.status(401).json({
        message: "Current password is incorrect",
      });
      return;
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

// Google SSO - Sign in/Sign up with Google
export const googleSSO = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { idToken, userType, hospitalId, phone, address, about } = req.body;

    // Validate required fields
    if (!idToken) {
      res.status(400).json({
        message: "Google ID token is required",
      });
      return;
    }

    // Validate userType if provided
    const validUserTypes = ['USER', 'MEDICAL_FACILITY'];
    const finalUserType = userType && validUserTypes.includes(userType.toUpperCase())
      ? userType.toUpperCase()
      : 'USER';

    // hospitalId is required for regular USERs, optional for MEDICAL_FACILITY
    // if (finalUserType === 'USER' && !hospitalId) {
    //   res.status(400).json({
    //     message: "hospitalId is required for USER type",
    //   });
    //   return;
    // }

    // Verify Google ID token
    const client = new OAuth2Client(config.googleClientId);

    let ticket;
    try {
      ticket = await client.verifyIdToken({
        idToken,
        audience: config.googleClientId,
      });
    } catch (error) {
      res.status(401).json({
        message: "Invalid Google ID token",
      });
      return;
    }

    const payload = ticket.getPayload();
    if (!payload) {
      res.status(401).json({
        message: "Failed to verify Google ID token",
      });
      return;
    }

    const { sub: providerId, email, name, picture } = payload;

    if (!email) {
      res.status(400).json({
        message: "Email not provided by Google",
      });
      return;
    }

    // Check if user already exists
    let user = await prisma.user.findUnique({
      where: { email },
    });
    let wasJustCreated = false;

    if (user) {
      // User exists - check if they're using the same provider
      if (user.authProvider !== 'GOOGLE') {
        res.status(409).json({
          message: `User already exists with ${user.authProvider} authentication. Please use your original sign-in method.`,
        });
        return;
      }

      // Update providerId if it has changed
      if (user.providerId !== providerId) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { providerId: providerId || null },
          select: {
            id: true,
            fullname: true,
            email: true,
            witnesshash: true,
            phone: true,
            address: true,
            about: true,
            userType: true,
            authProvider: true,
            providerId: true,
            password: true,
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
            registeredHospital: {
              select: {
                id: true,
                name: true,
                location: true,
                rating: true,
                specialties: true,
                imageUrl: true,
                isFavorite: true,
                reviews: true,
                verified: true,
                walletAddress: true,
                createdAt: true,
                updatedAt: true,
              },
            },
          },
        });
      } else {
        // Fetch user data for response
        user = await prisma.user.findUnique({
          where: { id: user.id },
          select: {
            id: true,
            fullname: true,
            email: true,
            witnesshash: true,
            phone: true,
            address: true,
            about: true,
            userType: true,
            authProvider: true,
            providerId: true,
            password: true,
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
            registeredHospital: {
              select: {
                id: true,
                name: true,
                location: true,
                rating: true,
                specialties: true,
                imageUrl: true,
                isFavorite: true,
                reviews: true,
                verified: true,
                walletAddress: true,
                createdAt: true,
                updatedAt: true,
              },
            },
          },
        });
      }
    } else {
      // New user - create account
      // Validate required fields for new users
      if (!phone || !address) {
        res.status(400).json({
          message: "phone and address are required for new users",
        });
        return;
      }

      // Verify hospital exists if hospitalId is provided
      if (hospitalId) {
        const hospital = await prisma.hospitalInformation.findUnique({
          where: { facilityId: hospitalId },
        });

        if (!hospital) {
          res.status(404).json({ message: "Hospital not found" });
          return;
        }
      }

      // Generate witnesshash automatically
      const witnesshash = generateWitnessHash();

      // Create the user
      wasJustCreated = true;
      user = await prisma.user.create({
        data: {
          fullname: name || email.split('@')[0], // Use Google name or fallback to email prefix
          email,
          password: null, // No password for OAuth users
          witnesshash,
          phone,
          address,
          about: about || null,
          userType: finalUserType as 'USER' | 'MEDICAL_FACILITY',
          authProvider: 'GOOGLE',
          providerId: providerId || null,
          hospitalId: hospitalId || null,
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
          authProvider: true,
          providerId: true,
          password: true,
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
          registeredHospital: {
            select: {
              id: true,
              name: true,
              location: true,
              rating: true,
              specialties: true,
              imageUrl: true,
              isFavorite: true,
              reviews: true,
              verified: true,
              walletAddress: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      });
    }

    if (!user) {
      res.status(500).json({
        message: "Failed to process user",
      });
      return;
    }

    // Generate JWT token
    const token = generateToken(user.id, user.email);

    res.status(wasJustCreated ? 201 : 200).json({
      message: wasJustCreated ? "User created successfully" : "Login successful",
      user,
      token,
    });
  } catch (error: any) {
    // Handle unique constraint violations
    if (error.code === 'P2002') {
      if (error.meta?.target?.includes('email')) {
        res.status(409).json({ message: "Email already exists" });
        return;
      }
      if (error.meta?.target?.includes('witnesshash')) {
        res.status(500).json({ message: "Error generating witness hash. Please try again." });
        return;
      }
    }
    next(error);
  }
};

// Apple SSO - Get authorization URL (GET endpoint)
export const getAppleAuthorizationUrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { redirectUri, state, scope } = req.query;

    // Validate required fields
    if (!config.appleClientId) {
      res.status(500).json({
        message: "Apple Client ID is not configured",
      });
      return;
    }

    if (!redirectUri || typeof redirectUri !== 'string') {
      res.status(400).json({
        message: "redirectUri query parameter is required",
      });
      return;
    }

    // Generate authorization URL
    const options: any = {
      clientID: config.appleClientId,
      redirectUri: redirectUri,
    };

    // Optional parameters
    if (state && typeof state === 'string') {
      options.state = state;
    }

    if (scope && typeof scope === 'string') {
      options.scope = scope;
    } else {
      // Default to email scope if not provided
      options.scope = 'email';
    }

    // If scope includes email, force responseMode to form_post
    if (options.scope.includes('email')) {
      options.responseMode = 'form_post';
    }

    try {
      const authorizationUrl = appleSignin.getAuthorizationUrl(options);

      res.status(200).json({
        authorizationUrl,
        clientId: config.appleClientId,
        redirectUri: redirectUri,
      });
    } catch (error: any) {
      res.status(500).json({
        message: "Failed to generate Apple authorization URL",
        error: error.message || String(error),
      });
      return;
    }
  } catch (error: any) {
    next(error);
  }
};

// Apple SSO - Sign in/Sign up with Apple (POST endpoint - handles callback)
export const appleSSO = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { identityToken, userType, hospitalId, phone, address, about, fullname } = req.body;

    // Validate required fields
    if (!identityToken) {
      res.status(400).json({
        message: "Apple identity token is required",
      });
      return;
    }

    // Validate userType if provided
    const validUserTypes = ['USER', 'MEDICAL_FACILITY'];
    const finalUserType = userType && validUserTypes.includes(userType.toUpperCase())
      ? userType.toUpperCase()
      : 'USER';

    // hospitalId is required for regular USERs, optional for MEDICAL_FACILITY
    // if (finalUserType === 'USER' && !hospitalId) {
    //   res.status(400).json({
    //     message: "hospitalId is required for USER type",
    //   });
    //   return;
    // }

    // Verify Apple identity token using apple-signin-auth
    let decodedToken: any;
    try {
      decodedToken = await appleSignin.verifyIdToken(identityToken, {
        audience: config.appleClientId, // client id
        // Optional: can add nonce verification if needed
        // nonce: 'NONCE', // if you're using nonce
      });
    } catch (error: any) {
      res.status(401).json({
        message: "Invalid or expired Apple identity token",
        error: error.message || String(error),
      });
      return;
    }

    const { sub: providerId, email } = decodedToken;

    if (!email) {
      res.status(400).json({
        message: "Email not provided by Apple",
      });
      return;
    }

    // Check if user already exists
    let user = await prisma.user.findUnique({
      where: { email },
    });
    let wasJustCreated = false;

    if (user) {
      // User exists - check if they're using the same provider
      if (user.authProvider !== 'APPLE') {
        res.status(409).json({
          message: `User already exists with ${user.authProvider} authentication. Please use your original sign-in method.`,
        });
        return;
      }

      // Update providerId if it has changed
      if (user.providerId !== providerId) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { providerId: providerId || null },
          select: {
            id: true,
            fullname: true,
            email: true,
            witnesshash: true,
            phone: true,
            address: true,
            about: true,
            userType: true,
            authProvider: true,
            providerId: true,
            password: true,
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
            registeredHospital: {
              select: {
                id: true,
                name: true,
                location: true,
                rating: true,
                specialties: true,
                imageUrl: true,
                isFavorite: true,
                reviews: true,
                verified: true,
                walletAddress: true,
                createdAt: true,
                updatedAt: true,
              },
            },
          },
        });
      } else {
        // Fetch user data for response
        user = await prisma.user.findUnique({
          where: { id: user.id },
          select: {
            id: true,
            fullname: true,
            email: true,
            witnesshash: true,
            phone: true,
            address: true,
            about: true,
            userType: true,
            authProvider: true,
            providerId: true,
            password: true,
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
            registeredHospital: {
              select: {
                id: true,
                name: true,
                location: true,
                rating: true,
                specialties: true,
                imageUrl: true,
                isFavorite: true,
                reviews: true,
                verified: true,
                walletAddress: true,
                createdAt: true,
                updatedAt: true,
              },
            },
          },
        });
      }
    } else {
      // New user - create account
      // Validate required fields for new users
      if (!phone || !address) {
        res.status(400).json({
          message: "phone and address are required for new users",
        });
        return;
      }

      // Verify hospital exists if hospitalId is provided
      if (hospitalId) {
        const hospital = await prisma.hospitalInformation.findUnique({
          where: { facilityId: hospitalId },
        });

        if (!hospital) {
          res.status(404).json({ message: "Hospital not found" });
          return;
        }
      }

      // Generate witnesshash automatically
      const witnesshash = generateWitnessHash();

      // Create the user
      wasJustCreated = true;
      user = await prisma.user.create({
        data: {
          fullname: fullname || email.split('@')[0], // Use provided name or fallback to email prefix
          email,
          password: null, // No password for OAuth users
          witnesshash,
          phone,
          address,
          about: about || null,
          userType: finalUserType as 'USER' | 'MEDICAL_FACILITY',
          authProvider: 'APPLE',
          providerId: providerId || null,
          hospitalId: hospitalId || null,
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
          authProvider: true,
          providerId: true,
          password: true,
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
          registeredHospital: {
            select: {
              id: true,
              name: true,
              location: true,
              rating: true,
              specialties: true,
              imageUrl: true,
              isFavorite: true,
              reviews: true,
              verified: true,
              walletAddress: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      });
    }

    if (!user) {
      res.status(500).json({
        message: "Failed to process user",
      });
      return;
    }

    // Generate JWT token
    const token = generateToken(user.id, user.email);

    res.status(wasJustCreated ? 201 : 200).json({
      message: wasJustCreated ? "User created successfully" : "Login successful",
      user,
      token,
    });
  } catch (error: any) {
    // Handle unique constraint violations
    if (error.code === 'P2002') {
      if (error.meta?.target?.includes('email')) {
        res.status(409).json({ message: "Email already exists" });
        return;
      }
      if (error.meta?.target?.includes('witnesshash')) {
        res.status(500).json({ message: "Error generating witness hash. Please try again." });
        return;
      }
    }
    next(error);
  }
};

