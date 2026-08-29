import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const MAX_MESSAGE_LENGTH = 5000;

function clean(value: unknown, maxLength = 200) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  const apiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;

  if (!apiKey || !from || !recipient) {
    console.error('Contact form is not configured: required Resend environment variables are missing.');
    return NextResponse.json(
      { error: 'Email service is not configured. Please contact us directly while we fix this.' },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const firstName = clean(body.firstName);
    const lastName = clean(body.lastName);
    const email = clean(body.email, 320);
    const phone = clean(body.phone);
    const message = clean(body.message, MAX_MESSAGE_LENGTH);

    if (!firstName || !lastName || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Please complete all required fields with a valid email address.' }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    const senderName = `${firstName} ${lastName}`;
    const notification = await resend.emails.send({
      from,
      to: [recipient],
      replyTo: email,
      subject: `New website enquiry from ${senderName}`,
      text: [`Name: ${senderName}`, `Email: ${email}`, `Phone: ${phone || 'Not provided'}`, '', message].join('\n'),
    });

    if (notification.error) {
      console.error('Resend notification failed:', notification.error);
      return NextResponse.json({ error: 'We could not deliver your enquiry. Please try again in a moment.' }, { status: 502 });
    }

    const autoReply = await resend.emails.send({
      from,
      to: [email],
      subject: 'We received your VY Marine enquiry',
      text: `Hi ${firstName},\n\nThank you for contacting VY Marine. We received your enquiry and our team will respond within 24 hours.\n\nThis is an automated confirmation; please do not reply to this email.\n\nVY Marine`,
    });

    if (autoReply.error) {
      console.error('Resend auto-reply failed:', autoReply.error);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form request failed:', error);
    return NextResponse.json({ error: 'Something went wrong while sending your enquiry. Please try again.' }, { status: 500 });
  }
}
