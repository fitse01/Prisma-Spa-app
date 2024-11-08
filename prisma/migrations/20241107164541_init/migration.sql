/*
  Warnings:

  - You are about to alter the column `email` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to alter the column `location` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to alter the column `phone` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to alter the column `workingDays` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- DropIndex
DROP INDEX `Contact_email_key` ON `contact`;

-- AlterTable
ALTER TABLE `contact` MODIFY `email` JSON NOT NULL,
    MODIFY `location` JSON NOT NULL,
    MODIFY `phone` JSON NULL,
    MODIFY `workingDays` JSON NULL;
