import { PrismaClient } from "@/lib/prisma/generated/prisma";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();
export default async function getProductBySlug(slug: string) {
  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) {
    notFound();
  };

  return (product);
}