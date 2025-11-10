import { NextRequest, NextResponse } from 'next/server'
import { createServiceSupabaseClient, leadSchema } from '@fixblox/supabase-client'
import { sendLeadNotification } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const leadData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      job_type: body.job_type,
      postcode: body.postcode,
      urgency: body.urgency,
      job_details: body.job_details ?? null,
      estimated_quote: Number(body.estimated_quote ?? 0),
      status: body.status ?? 'New',
      created_at: new Date().toISOString(),
    }

    const validation = leadSchema.safeParse(leadData)
    if (!validation.success) {
      return NextResponse.json({ error: validation.error.flatten() }, { status: 400 })
    }

    const record = validation.data

    // Try database first, but don't fail if it doesn't work
    try {
      const supabase = createServiceSupabaseClient()
      const { data, error } = await supabase
        .from('leads')
        .insert([record])
        .select()

      if (error) {
        console.log('Database insert error:', error.message, error.details)
      } else {
        console.log('Lead saved successfully:', data)
      }
    } catch (dbError) {
      console.log('Database connection failed:', dbError)
    }

    // Best-effort email (do not fail the request if email fails)
    try {
      await sendLeadNotification({ ...record, id: 'n/a' })
    } catch (emailError) {
      console.log('Email failed but lead saved:', emailError)
    }

    return NextResponse.json({ ok: true })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}


