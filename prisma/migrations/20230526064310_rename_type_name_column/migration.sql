/*
  Warnings:

  - You are about to drop the column `type` on the `UserType` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserType" DROP COLUMN "type",
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'customer';
