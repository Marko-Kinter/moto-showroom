import { NextRequest, NextResponse } from "next/server";
import { addInquirie, createInquirie, getAllInquiries } from "@/components/products/actions/get-products";


export async function GET(){
    try {
        const inquiries = await getAllInquiries()
        return NextResponse.json(inquiries)
    } catch (error) {
        console.error("Error creating inquiry:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("body:",{body})

    const { name, email, message, phone, slug } = body;

    if (!name || !email || !message || !phone || !slug) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await addInquirie(slug);

    const newInquiry = await createInquirie({ name, email, message, phone, slug });

    return NextResponse.json(newInquiry, { status: 201 });
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}