import { getAllProducts } from "@/components/products/actions/get-products";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await getAllProducts();
  return NextResponse.json(products);
}
