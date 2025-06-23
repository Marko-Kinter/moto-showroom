import { PrismaClient } from "@/lib/prisma/generated/prisma";
import { notFound } from "next/navigation";
import { Product } from "@/types/product";
import { prepareDataForValidation } from "formik";

const prisma = new PrismaClient();

export async function getProductBySlug(slug: string): Promise<Product> {
  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) notFound();

  const features = typeof product.features === "object" &&
                   product.features !== null &&
                   !Array.isArray(product.features)
    ? (product.features as Record<string, string>)
    : {};

  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    features,
    images: product.images,
    presentation_images: product.presentation_images ?? [],
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  };
}

export async function getAllProducts(){
  const products = await prisma.product.findMany()

  if (!products) notFound();

  return products;
}