import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // In production, integrate with mailing provider (e.g., Mailchimp, Substack, Sendgrid, Resend)
    // Here we log and store or acknowledge the subscription
    console.log(`[Newsletter Subscription] New subscriber registered: ${email}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing to FiscalFusion Daily Briefing.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling newsletter subscription:', error);
    return NextResponse.json(
      { success: false, error: 'Server error processing your request. Please try again later.' },
      { status: 500 }
    );
  }
}
