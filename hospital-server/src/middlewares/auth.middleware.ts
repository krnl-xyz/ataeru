import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";

// Extend Express Request type to include userId
declare global {
  namespace Express {
    interface Request {
      userId?: string;
      userEmail?: string;
    }
  }
}

// Authentication middleware to verify JWT token
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Authentication required. Please provide a token.",
      });
    }

    // Extract token from "Bearer <token>"
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : authHeader;

    if (!token) {
      return res.status(401).json({
        message: "Authentication required. Please provide a token.",
      });
    }

    // Verify token
    try {
      const decoded = jwt.verify(token, config.jwtSecret) as {
        userId: string;
        email: string;
      };

      // Attach user info to request
      req.userId = decoded.userId;
      req.userEmail = decoded.email;

      next();
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({
          message: "Token has expired. Please login again.",
        });
      }
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({
          message: "Invalid token. Please login again.",
        });
      }
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

// Optional authentication middleware (doesn't fail if no token)
export const optionalAuthenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.startsWith("Bearer ")
        ? authHeader.slice(7)
        : authHeader;

      if (token) {
        try {
          const decoded = jwt.verify(token, config.jwtSecret) as {
            userId: string;
            email: string;
          };

          req.userId = decoded.userId;
          req.userEmail = decoded.email;
        } catch (error) {
          // Ignore token errors for optional auth
        }
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};

