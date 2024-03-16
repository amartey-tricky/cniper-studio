import { EmailTemplate } from '@/components/contact/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {email, first_name, subject, message, phone_number} = body;
    const data = await resend.emails.send({
      from: "Cniper Studio <info@cniperstudio.org",
      to: email,
      subject: "This is Cniper Studio",
      react: EmailTemplate({ first_name: first_name }),
    });

    return NextResponse.json(data)
  }
  catch (error) {
    console.log("error", error)
  }
}