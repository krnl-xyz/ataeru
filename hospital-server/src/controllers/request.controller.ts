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
    if (!hospitalId || !requestType || !title) {
      res.status(400).json({
        message: "Missing required fields: hospitalId, requestType, and title are required",
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

    // Verify hospital exists
    const hospital = await prisma.hospital.findUnique({
      where: { id: hospitalId },
    });

    if (!hospital) {
      res.status(404).json({ message: "Hospital not found" });
      return;
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
        hospitalId,
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

    // Update hospital statistics
    await prisma.hospital.update({
      where: { id: hospitalId },
      data: {
        totalRequests: { increment: 1 },
      },
    });

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

    // Check authorization: user must be the requester or hospital owner
    const hospital = await prisma.hospital.findUnique({
      where: { id: request.hospitalId },
    });

    if (request.userId !== userId && hospital?.ownerId !== userId) {
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

    // Verify user is the hospital owner
    const hospital = await prisma.hospital.findUnique({
      where: { id: request.hospitalId },
    });

    if (!hospital || hospital.ownerId !== userId) {
      res.status(403).json({ message: "You are not authorized to update this request" });
      return;
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
    const { title, description, priority, requestedDate } = req.body;

    // Get the request
    const request = await prisma.hospitalRequest.findUnique({
      where: { id },
    });

    if (!request) {
      res.status(404).json({ message: "Request not found" });
      return;
    }

    // Check authorization: user must be the requester or hospital owner
    const hospital = await prisma.hospital.findUnique({
      where: { id: request.hospitalId },
    });

    const isOwner = hospital?.ownerId === userId;
    const isRequester = request.userId === userId;

    if (!isOwner && !isRequester) {
      res.status(403).json({ message: "You are not authorized to update this request" });
      return;
    }

    // Only requester can update these fields (unless it's the owner)
    const updateData: any = {};
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

    // Check authorization: user must be the requester or hospital owner
    const hospital = await prisma.hospital.findUnique({
      where: { id: request.hospitalId },
    });

    const isOwner = hospital?.ownerId === userId;
    const isRequester = request.userId === userId;

    if (!isOwner && !isRequester) {
      res.status(403).json({ message: "You are not authorized to delete this request" });
      return;
    }

    // Delete the request
    await prisma.hospitalRequest.delete({
      where: { id },
    });

    // Update hospital statistics (decrement totalRequests)
    await prisma.hospital.update({
      where: { id: request.hospitalId },
      data: {
        totalRequests: { decrement: 1 },
      },
    });

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
        // Only show requests where user is requester or hospital owner
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
        // Only show requests where user is requester or hospital owner
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

