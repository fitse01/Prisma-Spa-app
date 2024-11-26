/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `blog` table. All the data in the column will be lost.
  - Added the required column `image` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Made the column `author` on table `blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `blog` DROP COLUMN `imageUrl`,
    ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    MODIFY `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `author` VARCHAR(191) NOT NULL;
