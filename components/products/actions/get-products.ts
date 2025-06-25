import { PrismaClient } from "@/lib/prisma/generated/prisma";
import { notFound } from "next/navigation";
import { Inquiry, Product } from "@/types/product";
import { revalidatePath } from "next/cache";

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
    inquiries: product.inquiries,
    presentation_images: product.presentation_images ?? [],
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  };
}

export async function getAllProducts(): Promise<Product[]> {
  const products = await prisma.product.findMany();

  return products.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    features:
      typeof product.features === "object" &&
      product.features !== null &&
      !Array.isArray(product.features)
        ? (product.features as Record<string, string>)
        : {},
    images: product.images,
    inquiries: product.inquiries,
    presentation_images: product.presentation_images ?? [],
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  }));
}

interface CreateProductInput {
  name: string;
  slug: string;
  description: string;
  features: Record<string, string>;
  images: string[];
  presentation_images: string[];
}

export async function createProduct(data: CreateProductInput): Promise<Product> {
  const newProduct = await prisma.product.create({
    data: {
      name: data.name,
      slug: data.slug,
      description: data.description,
      features: data.features,
      images: data.images,
      presentation_images: data.presentation_images,
      inquiries: 0
    },
  });

  return {
    id: newProduct.id,
    name: newProduct.name,
    slug: newProduct.slug,
    description: newProduct.description,
    features: newProduct.features as Record<string, string>,
    images: newProduct.images,
    presentation_images: newProduct.presentation_images,
    inquiries: 0,
    createdAt: newProduct.createdAt.toISOString(),
    updatedAt: newProduct.updatedAt.toISOString(),
  };
}

export async function deleteProduct(productId: string) {
  try {
    await prisma.product.delete({
      where: { id: productId },
    });

    revalidatePath("/admin")
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Failed to delete product");
  }
}

export async function updateProduct(data: {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: Record<string, string>;
  images: string[];
  presentation_images: string[];
}) {
  await prisma.product.update({
    where: { slug: data.slug },
    data: {
      name: data.name,
      slug: data.slug,
      description: data.description,
      features: data.features,
      images: data.images,
      presentation_images: data.presentation_images,
    },
  });
}

export async function addInquirie(slug:string) {
  try {
    await prisma.product.update({
      where: { slug: slug },
      data:{
        inquiries: { increment: 1 },
      },
    });
  } catch (error) {
    console.error("Error incrementing inquiries:", error);
    throw new Error("Failed to add inquirie");
  }
}

interface CreateInquiryInput {
  name: string;
  email: string;
  message: string;
  phone: string;
  slug: string;
}

export async function createInquirie(data: CreateInquiryInput): Promise<Inquiry> {
  const { name, email, message, phone, slug } = data;
  const newInquirie = await prisma.inquiry.create({
    data: {
      name,
      email,
      message,
      phone,
      slug,
    },
  });

  return {
    id: newInquirie.id,
    name: newInquirie.name,
    email: newInquirie.email,
    message: newInquirie.message,
    phone: newInquirie.phone,
    createdAt: newInquirie.createdAt.toISOString(),
    slug: newInquirie.slug
  }
}

export async function getAllInquiries(): Promise<Inquiry[]> {
  const inquiries = await prisma.inquiry.findMany();

  return inquiries.map((inquirie) => ({
    id: inquirie.id,
    name: inquirie.name,
    email: inquirie.email,
    phone: inquirie.phone,
    message: inquirie.message,
    slug: inquirie.slug,
    createdAt: inquirie.createdAt.toISOString(),
  }));
}