import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    await resend.emails.send({
      from: 'Portfolio Inquiry', 
      to: 'laneleerichardson@gmail.com',
      subject: `New Inquiry from ${name}`,
      replyTo: email,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}