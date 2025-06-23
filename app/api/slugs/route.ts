import { getSlugs } from "@/components/layout/sidebar/actions/get-slug";
import { NextResponse } from "next/server";

export async function GET() {
  const slugs = await getSlugs();
  return NextResponse.json(slugs);
}
