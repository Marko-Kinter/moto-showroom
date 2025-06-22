import { PrismaClient } from "@/lib/prisma/generated/prisma";

let prisma = new PrismaClient
export async function getSlugs() {
  return await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
    },
    orderBy: { name: 'asc' },
  });
}
