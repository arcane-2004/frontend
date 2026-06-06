/*
  Warnings:

  - You are about to drop the column `created` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `isFeature` on the `Product` table. All the data in the column will be lost.
  - Added the required column `isFeatured` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "created",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "created",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "color",
DROP COLUMN "created",
DROP COLUMN "isFeature",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL;
