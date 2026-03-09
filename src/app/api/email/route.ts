export const dynamic = "force-dynamic";

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "Service not configured" },
      { status: 500 },
    );
  }

  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["laneleerichardson@gmail.com"],
      subject: `New Portfolio Message from ${name}`,
      replyTo: email, // Changed from reply_to to replyTo
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // Resend returns { data, error }. We check for data.id
    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
