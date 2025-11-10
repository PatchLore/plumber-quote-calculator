import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'
import { getIndustryBySlug } from '@/data/industries'

export const runtime = 'edge'

export async function GET(req: NextRequest, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params
  const industry = getIndustryBySlug(slug)
  const title = industry?.title ?? 'FixBlox'
  const icon = industry?.icon ?? '💡'

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          fontSize: 60,
          background: 'linear-gradient(135deg, #2563eb, #1e3a8a)',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 90 }}>{icon}</div>
        <strong style={{ fontSize: 72 }}>FixBlox for {title}</strong>
        <p style={{ fontSize: 30, opacity: 0.9 }}>Websites & Quote Systems for Trades</p>

        <img
          src="https://www.fixblox.com/logo.png"
          width={140}
          height={40}
          alt="FixBlox logo"
          style={{ position: 'absolute', bottom: 40, right: 60, opacity: 0.9 }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}


