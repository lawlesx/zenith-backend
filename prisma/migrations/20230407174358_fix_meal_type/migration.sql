/*
  Warnings:

  - Changed the type of `meal_type` on the `Meals` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "MealType" AS ENUM ('BREAKFAST', 'LUNCH', 'DINNER', 'DESSERT');

-- AlterTable
ALTER TABLE "Meals" DROP COLUMN "meal_type",
ADD COLUMN     "meal_type" "MealType" NOT NULL;

-- DropEnum
DROP TYPE "MeatType";
