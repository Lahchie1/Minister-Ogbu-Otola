import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, reason, books, message } = body;

    // Validate required fields according to TRD and Backend Schema
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Full name is required.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 10 characters.' },
        { status: 400 }
      );
    }

    // In a live production environment, this payload connects directly to:
    // Formspree, Resend, SendGrid, or Netlify Forms webhook.
    const inquiryRecord = {
      id: `inq_${Date.now()}`,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : null,
      reason: reason || 'general',
      books: Array.isArray(books) ? books : [],
      message: message.trim(),
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    console.log('[Minister Otola Inquiry Received]:', inquiryRecord);

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received and queued for review.',
        inquiryId: inquiryRecord.id,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

