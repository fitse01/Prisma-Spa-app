-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `image_url` TEXT NULL,
    `phone_no` VARCHAR(20) NOT NULL,
    `position` VARCHAR(100) NOT NULL,
    `experience_years` INTEGER NOT NULL,
    `personal_info` TEXT NULL,
    `skills` JSON NOT NULL,
    `employment_status` ENUM('Active', 'OnLeave', 'Terminated') NOT NULL,
    `role` ENUM('Admin', 'Stylist', 'Manager', 'Receptionist', 'ordinary') NOT NULL DEFAULT 'ordinary',
    `social_media` JSON NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Employee_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
