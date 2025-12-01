import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = (formData.get('name') || '') as string
    const email = (formData.get('email') || '') as string
    const phone = (formData.get('phone') || '') as string
    const trade = (formData.get('trade') || '') as string
    const subject = (formData.get('subject') || '') as string
    const message = (formData.get('message') || '') as string

    console.log('[CONTACT] New submission', {
      name,
      email,
      phone,
      trade,
      subject,
      message,
    })

    // TODO: wire this up to your email provider (e.g. nodemailer) if desired.

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[CONTACT] Error handling submission', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit contact form.',
      },
      { status: 500 }
    )
  }
}


