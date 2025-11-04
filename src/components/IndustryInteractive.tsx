'use client'

import posthog from '@/lib/posthog'

export default function IndustryInteractive({ title, videoUrl }: { title: string; videoUrl: string }) {
  return (
    <div>
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md mt-6">
        <video src={videoUrl} controls className="w-full h-full object-cover" onPlay={() => posthog.capture('video_played', { page: title })} />
      </div>

      <button onClick={() => posthog.capture('quote_button_clicked', { page: title })} className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Get Your Free Quote →
      </button>
    </div>
  )
}


