/*
  Warnings:

  - You are about to drop the column `locationEnd_id` on the `Mail` table. All the data in the column will be lost.
  - You are about to drop the column `locationStart_id` on the `Mail` table. All the data in the column will be lost.
  - You are about to drop the column `mailCategory_id` on the `Mail` table. All the data in the column will be lost.
  - Added the required column `locationStartId` to the `Mail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mailCategoryId` to the `Mail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Mail" DROP CONSTRAINT "Mail_locationEnd_id_fkey";

-- DropForeignKey
ALTER TABLE "Mail" DROP CONSTRAINT "Mail_locationStart_id_fkey";

-- AlterTable
ALTER TABLE "Mail" DROP COLUMN "locationEnd_id",
DROP COLUMN "locationStart_id",
DROP COLUMN "mailCategory_id",
ADD COLUMN     "locationEndId" TEXT,
ADD COLUMN     "locationStartId" TEXT NOT NULL,
ADD COLUMN     "mailCategoryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Mail" ADD CONSTRAINT "Mail_locationStartId_fkey" FOREIGN KEY ("locationStartId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mail" ADD CONSTRAINT "Mail_locationEndId_fkey" FOREIGN KEY ("locationEndId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
