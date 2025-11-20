import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/db";

// Get my credit balance
export const getMyCredits = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    let credit = await prisma.credit.findUnique({
      where: { userId },
      include: {
        transactions: {
          orderBy: { createdAt: 'desc' },
          take: 10, // Get last 10 transactions
        },
      },
    });

    // Create credit account if it doesn't exist
    if (!credit) {
      credit = await prisma.credit.create({
        data: {
          userId,
          balance: 0,
          totalAllocated: 0,
          totalUsed: 0,
        },
        include: {
          transactions: {
            orderBy: { createdAt: 'desc' },
            take: 10,
          },
        },
      });
    }

    res.status(200).json({
      credits: credit,
    });
  } catch (error: any) {
    next(error);
  }
};

// Get credit transaction history
export const getCreditTransactions = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const { page = 1, limit = 20, type } = req.query;
    const pageNumber = parseInt(page as string) || 1;
    const pageSize = parseInt(limit as string) || 20;
    const skip = (pageNumber - 1) * pageSize;

    const credit = await prisma.credit.findUnique({
      where: { userId },
    });

    if (!credit) {
      res.status(404).json({ message: "Credit account not found" });
      return;
    }

    const where: any = { creditId: credit.id };
    if (type) {
      where.type = type;
    }

    const [transactions, total] = await Promise.all([
      prisma.creditTransaction.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: pageSize,
      }),
      prisma.creditTransaction.count({ where }),
    ]);

    res.status(200).json({
      transactions,
      pagination: {
        page: pageNumber,
        limit: pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
    });
  } catch (error: any) {
    next(error);
  }
};

// Deduct credits (internal use - for bookings, requests, etc.)
export const deductCredits = async (
  userId: string,
  amount: number,
  description: string,
  referenceId?: string,
  metadata?: any
): Promise<{ success: boolean; newBalance?: number; error?: string }> => {
  try {
    let credit = await prisma.credit.findUnique({
      where: { userId },
    });

    if (!credit) {
      return { success: false, error: "Credit account not found" };
    }

    if (credit.balance < amount) {
      return { success: false, error: "Insufficient credits" };
    }

    const newBalance = credit.balance - amount;

    // Update credit balance atomically
    const updatedCredit = await prisma.credit.update({
      where: { userId },
      data: {
        balance: newBalance,
        totalUsed: credit.totalUsed + amount,
      },
    });

    // Create transaction record
    await prisma.creditTransaction.create({
      data: {
        creditId: credit.id,
        type: "DEDUCTION",
        amount: -amount, // Negative for deduction
        balanceAfter: newBalance,
        description,
        referenceId: referenceId || null,
        metadata: metadata ? JSON.stringify(metadata) : null,
      },
    });

    return { success: true, newBalance };
  } catch (error: any) {
    console.error(`Error deducting credits for user ${userId}:`, error);
    return { success: false, error: error.message || "Failed to deduct credits" };
  }
};

// Refund credits (internal use)
export const refundCredits = async (
  userId: string,
  amount: number,
  description: string,
  referenceId?: string,
  metadata?: any
): Promise<{ success: boolean; newBalance?: number; error?: string }> => {
  try {
    let credit = await prisma.credit.findUnique({
      where: { userId },
    });

    if (!credit) {
      // Create credit account if it doesn't exist
      credit = await prisma.credit.create({
        data: {
          userId,
          balance: 0,
          totalAllocated: 0,
          totalUsed: 0,
        },
      });
    }

    const newBalance = credit.balance + amount;

    await prisma.credit.update({
      where: { userId },
      data: {
        balance: newBalance,
        totalAllocated: credit.totalAllocated + amount,
      },
    });

    // Create transaction record
    await prisma.creditTransaction.create({
      data: {
        creditId: credit.id,
        type: "REFUND",
        amount,
        balanceAfter: newBalance,
        description,
        referenceId: referenceId || null,
        metadata: metadata ? JSON.stringify(metadata) : null,
      },
    });

    return { success: true, newBalance };
  } catch (error: any) {
    console.error(`Error refunding credits for user ${userId}:`, error);
    return { success: false, error: error.message || "Failed to refund credits" };
  }
};

// Check if user has sufficient credits (helper function for other controllers)
export const hasSufficientCredits = async (userId: string, amount: number): Promise<boolean> => {
  try {
    const credit = await prisma.credit.findUnique({
      where: { userId },
    });

    if (!credit) {
      return false;
    }

    return credit.balance >= amount;
  } catch (error) {
    console.error(`Error checking credits for user ${userId}:`, error);
    return false;
  }
};

