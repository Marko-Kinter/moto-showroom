import { updateProduct } from "@/components/products/actions/get-products";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  try {
    await updateProduct(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update product" }, { status: 500 });
  }
}