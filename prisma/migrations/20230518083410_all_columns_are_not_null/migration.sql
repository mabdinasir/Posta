/*
  Warnings:

  - Made the column `isGoogleAuth` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isEmailVerified` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isDeleted` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isSignedIn` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedBy` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userTypeId` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedBy` on table `UserType` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userTypeId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isGoogleAuth" SET NOT NULL,
ALTER COLUMN "isEmailVerified" SET NOT NULL,
ALTER COLUMN "isDeleted" SET NOT NULL,
ALTER COLUMN "isSignedIn" SET NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL,
ALTER COLUMN "updatedBy" SET NOT NULL,
ALTER COLUMN "updatedBy" SET DEFAULT '',
ALTER COLUMN "userTypeId" SET NOT NULL,
ALTER COLUMN "userTypeId" SET DEFAULT '';

-- AlterTable
ALTER TABLE "UserType" ALTER COLUMN "updatedBy" SET NOT NULL,
ALTER COLUMN "updatedBy" SET DEFAULT '';

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
