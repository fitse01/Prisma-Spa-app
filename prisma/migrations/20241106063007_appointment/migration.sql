-- CreateTable
CREATE TABLE `Appointment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `service` VARCHAR(50) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `message` VARCHAR(191) NULL,
    `payment_status` ENUM('pending', 'completed', 'failed') NOT NULL DEFAULT 'pending',
    `appointment_status` ENUM('booked', 'completed', 'cancelled') NOT NULL DEFAULT 'booked',
    `cancellation_reason` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
