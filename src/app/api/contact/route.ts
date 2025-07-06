// app/api/contact/route.ts

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    name,
    email,
    message,
    howMet,
    websiteType,
    appType,
    budget,
    contactPreference,
  } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Required fields missing." },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL!,
        pass: process.env.SMTP_PASSWORD!,
      },
    });

    const mailContent = `
New Contact Submission:

📛 Name: ${name}
📧 Email: ${email}
📍 How did they meet you: ${howMet || "Not specified"}
💻 Website Type: ${websiteType || "Not specified"}
📱 App Type: ${appType || "Not specified"}
💵 Budget: ${budget || "Not specified"}
☎️ Preferred Contact Method: ${contactPreference || "Not specified"}

📝 Message:
${message}
`;

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL!,
      to: process.env.SMTP_EMAIL!,
      subject: `New Contact From ${name}`,
      text: mailContent,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email sending error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
