/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `contact` MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `location` VARCHAR(191) NOT NULL,
    MODIFY `phone` VARCHAR(191) NULL,
    MODIFY `workingDays` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Contact_email_key` ON `Contact`(`email`);
