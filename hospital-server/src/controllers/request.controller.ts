import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import "../middlewares/auth.middleware";

// Create a new hospital request
export const createRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { hospitalId, requestType, title, description, bookingId, treatmentId, priority, requestedDate } = req.body;

    // Validate required fields
    if (!requestType || !title) {
      res.status(400).json({
        message: "Missing required fields: requestType and title are required",
      });
      return;
    }

    // Validate requestType
    const validRequestTypes = ['DONOR_REQUEST', 'CONSULTATION', 'HELP_REQUEST', 'TREATMENT_REQUEST'];
    if (!validRequestTypes.includes(requestType.toUpperCase())) {
      res.status(400).json({
        message: "Invalid requestType. Must be one of: DONOR_REQUEST, CONSULTATION, HELP_REQUEST, TREATMENT_REQUEST",
      });
      return;
    }

    // Validate priority
    const validPriorities = ['LOW', 'NORMAL', 'HIGH', 'URGENT'];
    const finalPriority = priority && validPriorities.includes(priority.toUpperCase())
      ? priority.toUpperCase()
      : 'NORMAL';

    // Verify user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Verify hospital exists if hospitalId is provided
    let hospital = null;
    if (hospitalId) {
      hospital = await prisma.hospital.findUnique({
        where: { id: hospitalId },
      });

      if (!hospital) {
        res.status(404).json({ message: "Hospital not found" });
        return;
      }
    }

    // Verify booking exists if bookingId is provided
    if (bookingId) {
      const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
      });

      if (!booking) {
        res.status(404).json({ message: "Booking not found" });
        return;
      }

      // Verify booking belongs to the user
      if (booking.userId !== userId) {
        res.status(403).json({ message: "You can only link requests to your own bookings" });
        return;
      }
    }

    // Parse requestedDate if provided
    let parsedRequestedDate: Date | null = null;
    if (requestedDate) {
      parsedRequestedDate = new Date(requestedDate);
      if (isNaN(parsedRequestedDate.getTime())) {
        res.status(400).json({ message: "Invalid requestedDate format" });
        return;
      }
    }

    // Create the request
    const request = await prisma.hospitalRequest.create({
      data: {
        hospitalId: hospitalId || null,
        userId,
        requestType: requestType.toUpperCase() as 'DONOR_REQUEST' | 'CONSULTATION' | 'HELP_REQUEST' | 'TREATMENT_REQUEST',
        title,
        description: description || null,
        bookingId: bookingId || null,
        treatmentId: treatmentId || null,
        priority: finalPriority,
        requestedDate: parsedRequestedDate,
        status: 'PENDING',
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
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
          },
        },
        booking: {
          select: {
            id: true,
            appointmentDate: true,
            purpose: true,
            status: true,
          },
        },
      },
    });

    // Update hospital statistics if hospitalId is provided
    if (hospitalId) {
      await prisma.hospital.update({
        where: { id: hospitalId },
        data: {
          totalRequests: { increment: 1 },
        },
      });
    }

    res.status(201).json({
      message: "Request created successfully",
      request,
    });
  } catch (error: any) {
    next(error);
  }
};

// Get all requests made by the authenticated user
export const getMyRequests = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { requestType, status } = req.query;

    const where: any = { userId };

    if (requestType) {
      const validRequestTypes = ['DONOR_REQUEST', 'CONSULTATION', 'HELP_REQUEST', 'TREATMENT_REQUEST'];
      if (validRequestTypes.includes((requestType as string).toUpperCase())) {
        where.requestType = (requestType as string).toUpperCase();
      }
    }

    if (status) {
      const validStatuses = ['PENDING', 'APPROVED', 'REJECTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];
      if (validStatuses.includes((status as string).toUpperCase())) {
        where.status = (status as string).toUpperCase();
      }
    }

    const requests = await prisma.hospitalRequest.findMany({
      where,
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
        booking: {
          select: {
            id: true,
            appointmentDate: true,
            purpose: true,
            status: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(requests);
  } catch (error) {
    next(error);
  }
};

// Get all requests for a hospital (hospital owner only)
export const getHospitalRequests = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { hospitalId } = req.params;
    const { requestType, status } = req.query;

    // Verify hospital exists
    const hospital = await prisma.hospital.findUnique({
      where: { id: hospitalId },
    });

    if (!hospital) {
      res.status(404).json({ message: "Hospital not found" });
      return;
    }

    // Verify user is the hospital owner
    if (hospital.ownerId !== userId) {
      res.status(403).json({ message: "You are not authorized to view requests for this hospital" });
      return;
    }

    const where: any = { hospitalId };

    if (requestType) {
      const validRequestTypes = ['DONOR_REQUEST', 'CONSULTATION', 'HELP_REQUEST', 'TREATMENT_REQUEST'];
      if (validRequestTypes.includes((requestType as string).toUpperCase())) {
        where.requestType = (requestType as string).toUpperCase();
      }
    }

    if (status) {
      const validStatuses = ['PENDING', 'APPROVED', 'REJECTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];
      if (validStatuses.includes((status as string).toUpperCase())) {
        where.status = (status as string).toUpperCase();
      }
    }

    const requests = await prisma.hospitalRequest.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
            address: true,
          },
        },
        booking: {
          select: {
            id: true,
            appointmentDate: true,
            purpose: true,
            status: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(requests);
  } catch (error) {
    next(error);
  }
};

// Get request by ID
export const getRequestById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { id } = req.params;

    const request = await prisma.hospitalRequest.findUnique({
      where: { id },
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
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
            address: true,
          },
        },
        booking: {
          select: {
            id: true,
            appointmentDate: true,
            purpose: true,
            status: true,
          },
        },
      },
    });

    if (!request) {
      res.status(404).json({ message: "Request not found" });
      return;
    }

    // Check authorization: user must be the requester or hospital owner (if hospital exists)
    let isAuthorized = request.userId === userId;

    if (!isAuthorized && request.hospitalId) {
      const hospital = await prisma.hospital.findUnique({
        where: { id: request.hospitalId },
      });
      isAuthorized = hospital?.ownerId === userId;
    }

    if (!isAuthorized) {
      res.status(403).json({ message: "You are not authorized to view this request" });
      return;
    }

    res.status(200).json(request);
  } catch (error) {
    next(error);
  }
};

// Update request status (hospital owner only)
export const updateRequestStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { id } = req.params;
    const { status, notes } = req.body;

    // Validate status
    const validStatuses = ['PENDING', 'APPROVED', 'REJECTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];
    if (!status || !validStatuses.includes(status.toUpperCase())) {
      res.status(400).json({
        message: "Valid status is required. Must be one of: PENDING, APPROVED, REJECTED, IN_PROGRESS, COMPLETED, CANCELLED",
      });
      return;
    }

    // Get the request
    const request = await prisma.hospitalRequest.findUnique({
      where: { id },
    });

    if (!request) {
      res.status(404).json({ message: "Request not found" });
      return;
    }

    // Verify user is the hospital owner (if hospital exists)
    if (request.hospitalId) {
      const hospital = await prisma.hospital.findUnique({
        where: { id: request.hospitalId },
      });

      if (!hospital || hospital.ownerId !== userId) {
        res.status(403).json({ message: "You are not authorized to update this request" });
        return;
      }
    } else {
      // If no hospital, only the requester can update
      if (request.userId !== userId) {
        res.status(403).json({ message: "You are not authorized to update this request" });
        return;
      }
    }

    // Prepare update data
    const updateData: any = {
      status: status.toUpperCase(),
    };

    if (notes !== undefined) {
      updateData.notes = notes;
    }

    // Set completedDate if status is COMPLETED
    if (status.toUpperCase() === 'COMPLETED') {
      updateData.completedDate = new Date();
    }

    // Update the request
    const updatedRequest = await prisma.hospitalRequest.update({
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
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
          },
        },
        booking: {
          select: {
            id: true,
            appointmentDate: true,
            purpose: true,
            status: true,
          },
        },
      },
    });

    res.status(200).json({
      message: "Request status updated successfully",
      request: updatedRequest,
    });
  } catch (error) {
    next(error);
  }
};

// Update request (user can update their own requests, hospital owner can update any field)
export const updateRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { id } = req.params;
    const { hospitalId, title, description, priority, requestedDate } = req.body;

    // Get the request
    const request = await prisma.hospitalRequest.findUnique({
      where: { id },
    });

    if (!request) {
      res.status(404).json({ message: "Request not found" });
      return;
    }

    // Check authorization: user must be the requester or hospital owner (if hospital exists)
    let isOwner = false;
    if (request.hospitalId) {
      const hospital = await prisma.hospital.findUnique({
        where: { id: request.hospitalId },
      });
      isOwner = hospital?.ownerId === userId;
    }
    const isRequester = request.userId === userId;

    if (!isOwner && !isRequester) {
      res.status(403).json({ message: "You are not authorized to update this request" });
      return;
    }

    // Prepare update data
    const updateData: any = {};

    // Validate and verify hospital if hospitalId is being updated
    let newHospital = null;
    let oldHospitalId = request.hospitalId;
    if (hospitalId !== undefined) {
      if (hospitalId === null) {
        // Allow setting hospitalId to null (unlink from hospital)
        // Only requester can do this
        if (!isRequester) {
          res.status(403).json({ message: "Only the requester can unlink a hospital from their request" });
          return;
        }
        updateData.hospitalId = null;
      } else {
        // Verify the new hospital exists
        newHospital = await prisma.hospital.findUnique({
          where: { id: hospitalId },
        });

        if (!newHospital) {
          res.status(404).json({ message: "Hospital not found" });
          return;
        }

        // Requester can link any hospital, hospital owner can only link their own
        if (newHospital.ownerId !== userId && !isRequester) {
          res.status(403).json({ message: "You are not authorized to link this hospital to the request" });
          return;
        }

        updateData.hospitalId = hospitalId;
      }
    }

    // Only requester can update these fields (unless it's the owner)
    if (title !== undefined && (isRequester || isOwner)) {
      updateData.title = title;
    }
    if (description !== undefined && (isRequester || isOwner)) {
      updateData.description = description;
    }
    if (priority !== undefined && (isRequester || isOwner)) {
      const validPriorities = ['LOW', 'NORMAL', 'HIGH', 'URGENT'];
      if (validPriorities.includes(priority.toUpperCase())) {
        updateData.priority = priority.toUpperCase();
      }
    }
    if (requestedDate !== undefined && (isRequester || isOwner)) {
      const parsedDate = new Date(requestedDate);
      if (!isNaN(parsedDate.getTime())) {
        updateData.requestedDate = parsedDate;
      }
    }

    const updatedRequest = await prisma.hospitalRequest.update({
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
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
          },
        },
        booking: {
          select: {
            id: true,
            appointmentDate: true,
            purpose: true,
            status: true,
          },
        },
      },
    });

    // Update hospital statistics if hospitalId was changed
    if (hospitalId !== undefined && oldHospitalId !== hospitalId) {
      // Decrement old hospital if it existed
      if (oldHospitalId) {
        await prisma.hospital.update({
          where: { id: oldHospitalId },
          data: {
            totalRequests: { decrement: 1 },
          },
        });
      }
      // Increment new hospital if it exists
      if (hospitalId) {
        await prisma.hospital.update({
          where: { id: hospitalId },
          data: {
            totalRequests: { increment: 1 },
          },
        });
      }
    }

    res.status(200).json({
      message: "Request updated successfully",
      request: updatedRequest,
    });
  } catch (error) {
    next(error);
  }
};

// Delete request (user can delete their own, hospital owner can delete any)
export const deleteRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { id } = req.params;

    // Get the request
    const request = await prisma.hospitalRequest.findUnique({
      where: { id },
    });

    if (!request) {
      res.status(404).json({ message: "Request not found" });
      return;
    }

    // Check authorization: user must be the requester or hospital owner (if hospital exists)
    let isOwner = false;
    if (request.hospitalId) {
      const hospital = await prisma.hospital.findUnique({
        where: { id: request.hospitalId },
      });
      isOwner = hospital?.ownerId === userId;
    }
    const isRequester = request.userId === userId;

    if (!isOwner && !isRequester) {
      res.status(403).json({ message: "You are not authorized to delete this request" });
      return;
    }

    // Store hospitalId before deletion for statistics update
    const requestHospitalId = request.hospitalId;

    // Delete the request
    await prisma.hospitalRequest.delete({
      where: { id },
    });

    // Update hospital statistics (decrement totalRequests) if hospital exists
    if (requestHospitalId) {
      await prisma.hospital.update({
        where: { id: requestHospitalId },
        data: {
          totalRequests: { decrement: 1 },
        },
      });
    }

    res.status(200).json({ message: "Request deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// Get requests by type
export const getRequestsByType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { type } = req.params;

    const validRequestTypes = ['DONOR_REQUEST', 'CONSULTATION', 'HELP_REQUEST', 'TREATMENT_REQUEST'];
    if (!validRequestTypes.includes(type.toUpperCase())) {
      res.status(400).json({
        message: "Invalid requestType. Must be one of: DONOR_REQUEST, CONSULTATION, HELP_REQUEST, TREATMENT_REQUEST",
      });
      return;
    }

    const requests = await prisma.hospitalRequest.findMany({
      where: {
        requestType: type.toUpperCase() as 'DONOR_REQUEST' | 'CONSULTATION' | 'HELP_REQUEST' | 'TREATMENT_REQUEST',
        // Only show requests where user is requester or hospital owner (if hospital exists)
        OR: [
          { userId },
          {
            hospital: {
              ownerId: userId,
            },
          },
        ],
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
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(requests);
  } catch (error) {
    next(error);
  }
};

// Get requests by status
export const getRequestsByStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { status } = req.params;

    const validStatuses = ['PENDING', 'APPROVED', 'REJECTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];
    if (!validStatuses.includes(status.toUpperCase())) {
      res.status(400).json({
        message: "Invalid status. Must be one of: PENDING, APPROVED, REJECTED, IN_PROGRESS, COMPLETED, CANCELLED",
      });
      return;
    }

    const requests = await prisma.hospitalRequest.findMany({
      where: {
        status: status.toUpperCase() as 'PENDING' | 'APPROVED' | 'REJECTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED',
        // Only show requests where user is requester or hospital owner (if hospital exists)
        OR: [
          { userId },
          {
            hospital: {
              ownerId: userId,
            },
          },
        ],
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
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
            phone: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(requests);
  } catch (error) {
    next(error);
  }
};

