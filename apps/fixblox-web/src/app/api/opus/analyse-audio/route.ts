import { NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'nodejs'

const GeneratedSiteSchema = z.object({
  business_name: z.string().min(1).catch(''),
  short_tagline: z.string().catch(''),
  services: z.array(z.string()).catch([]),
  about_section: z.string().catch(''),
  pricing: z.string().catch(''),
  location: z.string().catch(''),
  contact_preferences: z.string().catch(''),
  ideal_colour_palette: z.array(z.string()).catch([]),
  design_style: z.string().catch(''),
  CTA_text: z.string().catch(''),
  section_order: z.array(z.string()).catch([]),
})

const OPUS_PROMPT = `
You are a business website generator.
The user has uploaded a voice recording describing their business.
Extract structured JSON:
{
  "business_name": string,
  "short_tagline": string,
  "services": string[],
  "about_section": string,
  "pricing": string,
  "location": string,
  "contact_preferences": string,
  "ideal_colour_palette": string[],
  "design_style": string,
  "CTA_text": string,
  "section_order": string[]
}
Return ONLY valid JSON with these exact keys and types, no extra text.
`.trim()

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const audio = formData.get('audio')

    if (!audio || !(audio instanceof Blob)) {
      return NextResponse.json(
        { error: 'Missing audio file in formData under key "audio"' },
        { status: 400 }
      )
    }

    const opusUrl = process.env.OPUS_API_URL
    const opusKey = process.env.OPUS_API_KEY

    if (!opusUrl || !opusKey) {
      console.error('[OPUS] Missing OPUS_API_URL or OPUS_API_KEY env vars')
      return NextResponse.json(
        { error: 'Opus API not configured on the server' },
        { status: 500 }
      )
    }

    // Forward audio and prompt to Opus API
    const opusForm = new FormData()
    opusForm.append('file', audio, 'audio.webm')
    opusForm.append('prompt', OPUS_PROMPT)

    const opusResponse = await fetch(opusUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${opusKey}`,
      },
      body: opusForm,
    })

    if (!opusResponse.ok) {
      const text = await opusResponse.text().catch(() => '')
      console.error('[OPUS] Non-OK response', opusResponse.status, text)
      return NextResponse.json(
        { error: 'Failed to analyse audio with Opus' },
        { status: 502 }
      )
    }

    const rawText = await opusResponse.text()

    let parsedJson: unknown
    try {
      parsedJson = JSON.parse(rawText)
    } catch (err) {
      console.error('[OPUS] Failed to parse JSON from Opus', err, { rawText })
      return NextResponse.json(
        { error: 'Opus response was not valid JSON' },
        { status: 502 }
      )
    }

    const result = GeneratedSiteSchema.safeParse(parsedJson)
    if (!result.success) {
      console.error('[OPUS] JSON did not match schema', result.error.flatten())
      return NextResponse.json(
        { error: 'Opus JSON did not match expected schema' },
        { status: 502 }
      )
    }

    return NextResponse.json({ site: result.data }, { status: 200 })
  } catch (error) {
    console.error('[OPUS] Unexpected error analysing audio', error)
    return NextResponse.json(
      { error: 'Unexpected error analysing audio' },
      { status: 500 }
    )
  }
}


