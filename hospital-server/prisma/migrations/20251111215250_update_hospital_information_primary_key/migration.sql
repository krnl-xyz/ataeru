-- AlterTable
ALTER TABLE "HospitalInformation" ALTER COLUMN "hospitalOverallRatingFootnote" DROP NOT NULL,
ADD CONSTRAINT "HospitalInformation_pkey" PRIMARY KEY ("facilityId");

-- DropIndex
DROP INDEX "HospitalInformation_facilityId_key";
