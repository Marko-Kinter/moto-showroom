import { createProduct, getAllProducts } from "@/components/products/actions/get-products";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await getAllProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error("API /products failed:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      slug,
      description,
      features,
      images,
      presentation_images,
    } = body;

    if (
      !name ||
      !slug ||
      !description ||
      !features ||
      !images?.length ||
      !presentation_images?.length
    ) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newProduct = await createProduct({
      name,
      slug,
      description,
      features,
      images,
      presentation_images,
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
