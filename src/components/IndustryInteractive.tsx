'use client'

import posthog from '@/lib/posthog'
import Link from 'next/link'

export default function IndustryInteractive({ title, videoUrl }: { title: string; videoUrl: string }) {
  return (
    <div>
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md mt-6 bg-gray-100">
        <video 
          src={videoUrl} 
          controls 
          className="w-full h-full object-cover" 
          onPlay={() => posthog.capture('video_played', { page: title })}
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <Link 
        href="/contact"
        onClick={() => posthog.capture('quote_button_clicked', { page: title })} 
        className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Get Your Free Quote →
      </Link>
    </div>
  )
}


