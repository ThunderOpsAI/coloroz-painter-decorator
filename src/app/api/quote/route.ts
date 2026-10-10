import { NextResponse } from 'next/server';
import { insertQuote } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      propertyEra,
      projectScope,
      timberCondition,
      colourScheme,
      siteAddress,
      estimatedPrice,
      message
    } = body;

    if (!firstName || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Please fill in all required fields (Name, Email, Phone).' },
        { status: 400 }
      );
    }

    const saved = await insertQuote({
      firstName,
      lastName: lastName || '',
      email,
      phone,
      propertyEra: propertyEra || 'Victorian Era (1860 - 1901)',
      projectScope: projectScope || 'Exterior Weatherboards & Timber Trims',
      timberCondition: timberCondition || 'Sound Surfaces',
      colourScheme: colourScheme || 'Authentic Period Palette',
      siteAddress: siteAddress || '',
      estimatedPrice: estimatedPrice ? Number(estimatedPrice) : undefined,
      message: message || '',
    });

    return NextResponse.json({
      success: true,
      quote: saved,
      message: 'Thank you! Your heritage restoration quote request has been received. Our master painter will contact you shortly.',
    });
  } catch (error: any) {
    console.error('API /api/quote error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to submit quote request.' },
      { status: 500 }
    );
  }
}
