import { createAdmin, getAllAdmins } from "@/components/admin/actions/users-action";
import { error } from "console";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const admins = await getAllAdmins();
        return NextResponse.json(admins)
    } catch (error) {
        console.error("API /admins failed:", error);
        return new NextResponse("Internal server error", {status:500})
    }  
};

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            name,
            email,
        } = body;

        if(
            !name ||
            !email
        ) {
            return NextResponse.json({error: "Missing fields"},{status:400})
        }

        const newAdmin = await createAdmin({
            name,
            email,
        });
        return NextResponse.json(newAdmin, {status: 201});

    } catch (error) {
        console.error("Error creating admin:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}