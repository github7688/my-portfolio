// app/api/send-sms/route.js
import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request) {
  try {
    const { from, body } = await request.json();
    const client = twilio(process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID, process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN);

    await client.messages.create({
      body,
      from: from,
      to: "+917622975491",
    });

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}