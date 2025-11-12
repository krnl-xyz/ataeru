import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import "../middlewares/auth.middleware";

// Create a new booking
export const createBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const { hospitalId, date, time, duration, purpose, additionalNotes } = req.body;

    // Validate required fields
    if (!hospitalId || !date || !time || !purpose) {
      return res.status(400).json({
        message: "Missing required fields: hospitalId, date, time, and purpose are required",
      });
    }

    // Verify user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify hospital exists
    const hospital = await prisma.hospital.findUnique({
      where: { id: hospitalId },
    });

    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    // Parse date and time
    // Date format: dd/mm/yyyy (preferred) or yyyy-mm-dd
    // Time format: HH:mm (24-hour format)
    let appointmentDateTime: Date;
    try {
      // Parse time in HH:mm format
      const timeParts = time.split(':');
      if (timeParts.length !== 2 || !timeParts[0] || !timeParts[1]) {
        return res.status(400).json({
          message: "Invalid time format. Please use HH:mm format (24-hour, e.g., 14:30)",
        });
      }

      const hours = parseInt(timeParts[0]);
      const minutes = parseInt(timeParts[1]);

      // Validate time values
      if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return res.status(400).json({
          message: "Invalid time values. Hours must be 0-23 and minutes must be 0-59",
        });
      }

      // Parse date - try dd/mm/yyyy format first
      const dateParts = date.split('/');
      if (dateParts.length === 3) {
        // dd/mm/yyyy format
        const day = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const year = parseInt(dateParts[2]);

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
          return res.status(400).json({
            message: "Invalid date format. Please use dd/mm/yyyy format (e.g., 25/12/2024)",
          });
        }

        appointmentDateTime = new Date(year, month - 1, day, hours, minutes);
      } else {
        // Try other formats (yyyy-mm-dd, ISO, etc.)
        const dateObj = new Date(date);
        if (isNaN(dateObj.getTime())) {
          return res.status(400).json({
            message: "Invalid date format. Please use dd/mm/yyyy format (e.g., 25/12/2024)",
          });
        }
        // Combine date with time
        appointmentDateTime = new Date(dateObj);
        appointmentDateTime.setHours(hours, minutes, 0, 0);
      }

      // Validate the date is valid
      if (isNaN(appointmentDateTime.getTime())) {
        return res.status(400).json({
          message: "Invalid date or time format",
        });
      }

      // Check if the appointment date is in the past
      const now = new Date();
      now.setSeconds(0, 0); // Remove seconds and milliseconds for comparison
      if (appointmentDateTime < now) {
        return res.status(400).json({
          message: "Cannot book appointments in the past",
        });
      }
    } catch (error) {
      return res.status(400).json({
        message: "Invalid date or time format. Please use dd/mm/yyyy for date (e.g., 25/12/2024) and HH:mm for time (e.g., 14:30)",
      });
    }

    // Validate duration (default to 30 minutes)
    const bookingDuration = duration && duration > 0 ? parseInt(duration) : 30;

    // Create the booking
    const booking = await prisma.booking.create({
      data: {
        hospitalId,
        userId,
        appointmentDate: appointmentDateTime,
        duration: bookingDuration,
        purpose,
        additionalNotes: additionalNotes || null,
        status: "PENDING",
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
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (error: any) {
    next(error);
  }
};

// Get all bookings for the authenticated user
export const getMyBookings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const bookings = await prisma.booking.findMany({
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
          },
        },
      },
      orderBy: {
        appointmentDate: 'asc',
      },
    });

    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};

// Get booking by ID
export const getBookingById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const { id } = req.params;

    const booking = await prisma.booking.findUnique({
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
          },
        },
      },
    });

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Verify user has access to this booking (either owner or hospital owner)
    if (booking.userId !== userId) {
      // Check if user is the hospital owner
      const hospital = await prisma.hospital.findUnique({
        where: { id: booking.hospitalId },
      });

      if (!hospital || hospital.ownerId !== userId) {
        return res.status(403).json({
          message: "You are not authorized to view this booking",
        });
      }
    }

    res.status(200).json(booking);
  } catch (error) {
    next(error);
  }
};

// Get bookings for a hospital (hospital owner only)
export const getHospitalBookings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const { hospitalId } = req.params;

    // Verify hospital exists and user is the owner
    const hospital = await prisma.hospital.findUnique({
      where: { id: hospitalId },
    });

    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    if (hospital.ownerId !== userId) {
      return res.status(403).json({
        message: "You are not authorized to view bookings for this hospital",
      });
    }

    const bookings = await prisma.booking.findMany({
      where: { hospitalId },
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
      },
      orderBy: {
        appointmentDate: 'asc',
      },
    });

    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};

// Get all bookings for hospitals owned by the authenticated user
export const getMyHospitalBookings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    // Get all hospitals owned by this user
    const hospitals = await prisma.hospital.findMany({
      where: { ownerId: userId },
      select: { id: true },
    });

    const hospitalIds = hospitals.map(h => h.id);

    if (hospitalIds.length === 0) {
      return res.status(200).json([]);
    }

    // Get all bookings for these hospitals
    const bookings = await prisma.booking.findMany({
      where: {
        hospitalId: {
          in: hospitalIds,
        },
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
            address: true,
          },
        },
      },
      orderBy: {
        appointmentDate: 'asc',
      },
    });

    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};

// Update booking
export const updateBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const { id } = req.params;
    const { date, time, duration, purpose, additionalNotes, status } = req.body;

    // Check if booking exists
    const existingBooking = await prisma.booking.findUnique({
      where: { id },
      include: {
        hospital: true,
      },
    });

    if (!existingBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Verify user has access (either booking owner or hospital owner)
    const isBookingOwner = existingBooking.userId === userId;
    const isHospitalOwner = existingBooking.hospital.ownerId === userId;

    if (!isBookingOwner && !isHospitalOwner) {
      return res.status(403).json({
        message: "You are not authorized to update this booking",
      });
    }

    // Build update data
    const updateData: any = {};

    // Update date/time if provided
    if (date && time) {
      try {
        // Parse time in HH:mm format
        const timeParts = time.split(':');
        if (timeParts.length !== 2 || !timeParts[0] || !timeParts[1]) {
          return res.status(400).json({
            message: "Invalid time format. Please use HH:mm format (24-hour)",
          });
        }

        const hours = parseInt(timeParts[0]);
        const minutes = parseInt(timeParts[1]);

        // Validate time values
        if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
          return res.status(400).json({
            message: "Invalid time values. Hours must be 0-23 and minutes must be 0-59",
          });
        }

        // Parse date - try dd/mm/yyyy format first
        const dateParts = date.split('/');
        if (dateParts.length === 3) {
          // dd/mm/yyyy format
          const day = parseInt(dateParts[0]);
          const month = parseInt(dateParts[1]);
          const year = parseInt(dateParts[2]);

          if (isNaN(day) || isNaN(month) || isNaN(year)) {
            return res.status(400).json({
              message: "Invalid date format. Please use dd/mm/yyyy format",
            });
          }

          const appointmentDateTime = new Date(year, month - 1, day, hours, minutes);

          if (isNaN(appointmentDateTime.getTime())) {
            return res.status(400).json({
              message: "Invalid date or time format",
            });
          }

          updateData.appointmentDate = appointmentDateTime;
        } else {
          // Try other formats
          const dateObj = new Date(date);
          if (isNaN(dateObj.getTime())) {
            return res.status(400).json({
              message: "Invalid date format. Please use dd/mm/yyyy format",
            });
          }
          const appointmentDateTime = new Date(dateObj);
          appointmentDateTime.setHours(hours, minutes, 0, 0);
          updateData.appointmentDate = appointmentDateTime;
        }
      } catch (error) {
        return res.status(400).json({
          message: "Invalid date or time format",
        });
      }
    }

    if (duration !== undefined) updateData.duration = parseInt(duration);
    if (purpose !== undefined) updateData.purpose = purpose;
    if (additionalNotes !== undefined) updateData.additionalNotes = additionalNotes;

    // Only hospital owner can update status
    if (status !== undefined && isHospitalOwner) {
      const validStatuses = ['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED'];
      if (validStatuses.includes(status.toUpperCase())) {
        updateData.status = status.toUpperCase();
      }
    }

    const booking = await prisma.booking.update({
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
      },
    });

    res.status(200).json({
      message: "Booking updated successfully",
      booking,
    });
  } catch (error) {
    next(error);
  }
};

// Cancel booking
export const cancelBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const { id } = req.params;

    // Check if booking exists
    const existingBooking = await prisma.booking.findUnique({
      where: { id },
      include: {
        hospital: true,
      },
    });

    if (!existingBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Verify user has access (either booking owner or hospital owner)
    const isBookingOwner = existingBooking.userId === userId;
    const isHospitalOwner = existingBooking.hospital.ownerId === userId;

    if (!isBookingOwner && !isHospitalOwner) {
      return res.status(403).json({
        message: "You are not authorized to cancel this booking",
      });
    }

    // Update booking status to CANCELLED
    const booking = await prisma.booking.update({
      where: { id },
      data: { status: 'CANCELLED' },
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
    });

    res.status(200).json({
      message: "Booking cancelled successfully",
      booking,
    });
  } catch (error) {
    next(error);
  }
};

// Delete booking
export const deleteBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const { id } = req.params;

    // Check if booking exists
    const existingBooking = await prisma.booking.findUnique({
      where: { id },
      include: {
        hospital: true,
      },
    });

    if (!existingBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Verify user has access (either booking owner or hospital owner)
    const isBookingOwner = existingBooking.userId === userId;
    const isHospitalOwner = existingBooking.hospital.ownerId === userId;

    if (!isBookingOwner && !isHospitalOwner) {
      return res.status(403).json({
        message: "You are not authorized to delete this booking",
      });
    }

    await prisma.booking.delete({
      where: { id },
    });

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    next(error);
  }
};

