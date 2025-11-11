-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('USER', 'MEDICAL_FACILITY');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userType" "UserType" NOT NULL DEFAULT 'USER';
