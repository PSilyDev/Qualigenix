import { PrismaClient } from "@prisma/client";

let prisma;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  global.__prisma = global.__prisma || new PrismaClient();
  prisma = global.__prisma;
}
export { prisma };
