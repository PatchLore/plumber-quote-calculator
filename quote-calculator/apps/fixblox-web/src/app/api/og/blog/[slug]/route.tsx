import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'
import { blogPosts } from '@/data/blogPosts'

export const runtime = 'edge'

export async function GET(req: NextRequest, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params
  const post = blogPosts.find((p) => p.slug === slug)
  const title = post?.title ?? 'FixBlox Blog'

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          fontSize: 50,
          background: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontFamily: 'sans-serif',
          padding: '0 60px',
        }}
      >
        <strong style={{ fontSize: 70, marginBottom: 20 }}>{title}</strong>
        <p style={{ fontSize: 28, opacity: 0.85 }}>FixBlox Blog | Web Design & AI Tools for Trades</p>

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


