/*
  Warnings:

  - You are about to drop the column `poAddress` on the `PostOffice` table. All the data in the column will be lost.
  - You are about to drop the column `poContact` on the `PostOffice` table. All the data in the column will be lost.
  - You are about to drop the column `poContactPerson` on the `PostOffice` table. All the data in the column will be lost.
  - You are about to drop the column `poManagerId` on the `PostOffice` table. All the data in the column will be lost.
  - Added the required column `address` to the `PostOffice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `PostOffice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPerson` to the `PostOffice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `managerId` to the `PostOffice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PostOffice" DROP COLUMN "poAddress",
DROP COLUMN "poContact",
DROP COLUMN "poContactPerson",
DROP COLUMN "poManagerId",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "contact" TEXT NOT NULL,
ADD COLUMN     "contactPerson" TEXT NOT NULL,
ADD COLUMN     "managerId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "postOfficeInChargeId" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_id_key" ON "Location"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Location_name_key" ON "Location"("name");

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_postOfficeInChargeId_fkey" FOREIGN KEY ("postOfficeInChargeId") REFERENCES "PostOffice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
