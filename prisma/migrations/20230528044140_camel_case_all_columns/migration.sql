/*
  Warnings:

  - You are about to drop the column `location_end_id` on the `Mail` table. All the data in the column will be lost.
  - You are about to drop the column `location_start_id` on the `Mail` table. All the data in the column will be lost.
  - You are about to drop the column `mail_category_id` on the `Mail` table. All the data in the column will be lost.
  - You are about to drop the column `mail_code` on the `Mail` table. All the data in the column will be lost.
  - You are about to drop the column `recipient_address` on the `Mail` table. All the data in the column will be lost.
  - You are about to drop the column `sender_address` on the `Mail` table. All the data in the column will be lost.
  - You are about to drop the column `time_delivered` on the `Mail` table. All the data in the column will be lost.
  - You are about to drop the column `time_inserted` on the `Mail` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mailCode]` on the table `Mail` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `locationStart_id` to the `Mail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mailCategory_id` to the `Mail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mailCode` to the `Mail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipientAddress` to the `Mail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderAddress` to the `Mail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Mail" DROP CONSTRAINT "Mail_location_end_id_fkey";

-- DropForeignKey
ALTER TABLE "Mail" DROP CONSTRAINT "Mail_location_start_id_fkey";

-- DropIndex
DROP INDEX "Mail_mail_code_key";

-- AlterTable
ALTER TABLE "Mail" DROP COLUMN "location_end_id",
DROP COLUMN "location_start_id",
DROP COLUMN "mail_category_id",
DROP COLUMN "mail_code",
DROP COLUMN "recipient_address",
DROP COLUMN "sender_address",
DROP COLUMN "time_delivered",
DROP COLUMN "time_inserted",
ADD COLUMN     "locationEnd_id" TEXT,
ADD COLUMN     "locationStart_id" TEXT NOT NULL,
ADD COLUMN     "mailCategory_id" TEXT NOT NULL,
ADD COLUMN     "mailCode" TEXT NOT NULL,
ADD COLUMN     "recipientAddress" TEXT NOT NULL,
ADD COLUMN     "senderAddress" TEXT NOT NULL,
ADD COLUMN     "timeDelivered" TIMESTAMP(3),
ADD COLUMN     "timeInserted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Mail_mailCode_key" ON "Mail"("mailCode");

-- AddForeignKey
ALTER TABLE "Mail" ADD CONSTRAINT "Mail_locationStart_id_fkey" FOREIGN KEY ("locationStart_id") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mail" ADD CONSTRAINT "Mail_locationEnd_id_fkey" FOREIGN KEY ("locationEnd_id") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
