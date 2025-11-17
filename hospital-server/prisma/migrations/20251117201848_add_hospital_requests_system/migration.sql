-- CreateEnum
CREATE TYPE "RequestType" AS ENUM ('DONOR_REQUEST', 'CONSULTATION', 'HELP_REQUEST', 'TREATMENT_REQUEST');

-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- AlterTable
ALTER TABLE "Hospital" ADD COLUMN     "totalCustomers" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalDonors" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalRequests" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalTreatments" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "HospitalRequest" (
    "id" TEXT NOT NULL,
    "hospitalId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "requestType" "RequestType" NOT NULL,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "title" TEXT NOT NULL,
    "description" TEXT,
    "bookingId" TEXT,
    "treatmentId" TEXT,
    "priority" TEXT NOT NULL DEFAULT 'NORMAL',
    "requestedDate" TIMESTAMP(3),
    "completedDate" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HospitalRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPreference" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "hospitalId" TEXT NOT NULL,
    "preferenceType" TEXT NOT NULL DEFAULT 'FULL_TIME',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TreatmentPreference" (
    "id" TEXT NOT NULL,
    "treatmentId" TEXT NOT NULL,
    "treatmentName" TEXT NOT NULL,
    "hospitalId" TEXT NOT NULL,
    "preferenceType" TEXT NOT NULL DEFAULT 'FULL_TIME',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TreatmentPreference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HospitalRequest_bookingId_key" ON "HospitalRequest"("bookingId");

-- CreateIndex
CREATE INDEX "HospitalRequest_hospitalId_idx" ON "HospitalRequest"("hospitalId");

-- CreateIndex
CREATE INDEX "HospitalRequest_userId_idx" ON "HospitalRequest"("userId");

-- CreateIndex
CREATE INDEX "HospitalRequest_status_idx" ON "HospitalRequest"("status");

-- CreateIndex
CREATE INDEX "HospitalRequest_requestType_idx" ON "HospitalRequest"("requestType");

-- CreateIndex
CREATE INDEX "UserPreference_userId_idx" ON "UserPreference"("userId");

-- CreateIndex
CREATE INDEX "UserPreference_hospitalId_idx" ON "UserPreference"("hospitalId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPreference_userId_hospitalId_key" ON "UserPreference"("userId", "hospitalId");

-- CreateIndex
CREATE INDEX "TreatmentPreference_treatmentId_idx" ON "TreatmentPreference"("treatmentId");

-- CreateIndex
CREATE INDEX "TreatmentPreference_hospitalId_idx" ON "TreatmentPreference"("hospitalId");

-- CreateIndex
CREATE UNIQUE INDEX "TreatmentPreference_treatmentId_hospitalId_key" ON "TreatmentPreference"("treatmentId", "hospitalId");

-- AddForeignKey
ALTER TABLE "HospitalRequest" ADD CONSTRAINT "HospitalRequest_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalRequest" ADD CONSTRAINT "HospitalRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalRequest" ADD CONSTRAINT "HospitalRequest_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPreference" ADD CONSTRAINT "UserPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPreference" ADD CONSTRAINT "UserPreference_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TreatmentPreference" ADD CONSTRAINT "TreatmentPreference_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE CASCADE ON UPDATE CASCADE;
