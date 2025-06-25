// app/api/products/delete/route.ts
import { deleteProduct } from "@/components/products/actions/get-products";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Missing product id" }, { status: 400 });
    }

    await deleteProduct(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}
