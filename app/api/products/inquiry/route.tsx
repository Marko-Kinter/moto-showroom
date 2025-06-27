import { NextRequest, NextResponse } from "next/server";
import { addInquirie, createInquirie, getAllInquiries } from "@/components/products/actions/get-products";
import nodemailer from "nodemailer";
import { getAllAdmins } from "@/components/admin/actions/users-action";
import { render } from "@react-email/components";
import AdminNotificationEmail from "@/components/emails/NewInquiryEmail";
import InquiryConfirmationEmail from "@/components/emails/InquiryConfirmationEmail";


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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlToUsers = await render(<InquiryConfirmationEmail name={name} />);

    
    await transporter.sendMail({
      from: `"MKM Garage" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for contacting MKM Garage!",
      html: htmlToUsers,
    });
    const htmlToAdmins = await render(<AdminNotificationEmail name={name} email={email} message={message} slug={slug} phone={phone} />);
    
    const admins = await getAllAdmins() // o traelos desde DB
    const adminEmails = admins.map((admin) => admin.email)
    await transporter.sendMail({
      from: `"MKM Garage" <${process.env.SMTP_USER}>`,
      to: adminEmails,
      subject: `New inquiry from ${name}`,
      html: htmlToAdmins,
    });

    return NextResponse.json(newInquiry, { status: 201 });
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


 

 

