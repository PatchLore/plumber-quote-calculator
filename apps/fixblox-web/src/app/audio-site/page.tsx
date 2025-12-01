'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { GeneratedSite } from '@/components/GeneratedSitePreview'
import { GeneratedSitePreview } from '@/components/GeneratedSitePreview'

type RecordingState = 'idle' | 'recording' | 'recorded'

type ApiState = {
  loading: boolean
  error: string | null
}

const LOCAL_STORAGE_KEY = 'fixblox_audio_site_last_generated'

export default function AudioSitePage() {
  const [recordingState, setRecordingState] = useState<RecordingState>('idle')
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [apiState, setApiState] = useState<ApiState>({ loading: false, error: null })
  const [generatedSite, setGeneratedSite] = useState<GeneratedSite | null>(null)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<BlobPart[]>([])

  // Load last generated site from localStorage (MVP persistence)
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as GeneratedSite
      if (parsed && typeof parsed === 'object') {
        setGeneratedSite(parsed)
      }
    } catch {
      // ignore
    }
  }, [])

  // Persist latest generated site
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!generatedSite) return
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(generatedSite))
  }, [generatedSite])

  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl)
      }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleStartRecording = async () => {
    setApiState({ loading: false, error: null })

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setApiState({
        loading: false,
        error: 'Audio recording is not supported in this browser.',
      })
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        chunksRef.current = []
        if (audioUrl) {
          URL.revokeObjectURL(audioUrl)
        }
        const url = URL.createObjectURL(blob)
        setAudioBlob(blob)
        setAudioUrl(url)
        setRecordingState('recorded')
        // stop tracks
        stream.getTracks().forEach((t) => t.stop())
      }

      mediaRecorder.start()
      setRecordingState('recording')
    } catch (error) {
      console.error('Error starting recording', error)
      setApiState({
        loading: false,
        error: 'Could not access microphone. Please check permissions.',
      })
    }
  }

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl)
    }
    const url = URL.createObjectURL(file)
    setAudioBlob(file)
    setAudioUrl(url)
    setRecordingState('recorded')
    setApiState({ loading: false, error: null })
  }

  const handleSubmit = async () => {
    if (!audioBlob) {
      setApiState({
        loading: false,
        error: 'Please record audio or upload a file first.',
      })
      return
    }

    setApiState({ loading: true, error: null })

    try {
      const formData = new FormData()
      formData.append('audio', audioBlob, 'audio.webm')

      const res = await fetch('/api/opus/analyse-audio', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || `Request failed with status ${res.status}`)
      }

      const data = (await res.json()) as { site: GeneratedSite }
      setGeneratedSite(data.site)
    } catch (error) {
      console.error('Error submitting audio', error)
      setApiState({
        loading: false,
        error:
          error instanceof Error ? error.message : 'Failed to analyse audio. Please try again.',
      })
      return
    }

    setApiState({ loading: false, error: null })
  }

  return (
    <div className="min-h-screen bg-slate-950/95 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <header className="space-y-3">
          <p className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-300 ring-1 ring-sky-500/30">
            Audio Website Generator · MVP
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Turn a 30-second voice note into a complete website
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-slate-300">
            Record a quick description of your business or upload an audio file. Our AI extracts
            your services, branding, and key details—then creates a full website for you.
          </p>
        </header>

        <main className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.7fr)] lg:items-start">
          {/* Left: controls */}
          <section className="space-y-6 rounded-3xl bg-slate-900/60 p-5 sm:p-6 lg:p-7 ring-1 ring-slate-800 shadow-[0_18px_60px_rgba(15,23,42,0.7)]">
            <div className="space-y-1.5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                1 · Capture audio
              </h2>
              <p className="text-xs text-slate-400">
                Aim for 20–40 seconds describing who you are, what you do, where you work, typical
                jobs, pricing, and how you like to be contacted.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                    Microphone recording
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {recordingState === 'recording'
                      ? 'Recording… speak as if talking to a new customer.'
                      : 'Use your laptop or phone mic to record a quick description.'}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex h-2.5 w-2.5 rounded-full ${
                      recordingState === 'recording'
                        ? 'bg-rose-400 shadow-[0_0_0_6px_rgba(248,113,113,0.35)]'
                        : 'bg-emerald-400/80 shadow-[0_0_0_4px_rgba(52,211,153,0.25)]'
                    }`}
                  />
                  <span className="text-[11px] font-medium text-slate-300">
                    {recordingState === 'recording'
                      ? 'Listening…'
                      : recordingState === 'recorded'
                        ? 'Recorded clip ready'
                        : 'Ready'}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                {recordingState !== 'recording' ? (
                  <button
                    type="button"
                    onClick={handleStartRecording}
                    className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    <span className="inline-flex h-2 w-2 rounded-full bg-white" />
                    Start recording
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleStopRecording}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    <span className="inline-flex h-2 w-2 rounded-full bg-rose-500" />
                    Stop recording
                  </button>
                )}

                {audioUrl && (
                  <audio
                    src={audioUrl}
                    controls
                    className="mt-1 flex-1 min-w-[180px] rounded-full bg-slate-950/60 px-2 py-0.5"
                  />
                )}
              </div>
            </div>

            <div className="space-y-3 rounded-2xl bg-slate-900/70 p-4 ring-1 ring-slate-800/90">
              <div className="flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                    Or upload an audio file
                  </p>
                  <p className="text-[11px] text-slate-500">
                    MP3, M4A, WAV and most browser-supported formats are fine.
                  </p>
                </div>
              </div>
              <label className="inline-flex cursor-pointer items-center justify-center rounded-full border border-dashed border-slate-700/80 bg-slate-950/60 px-4 py-2 text-[11px] font-medium text-slate-200 transition hover:border-sky-500/60 hover:bg-slate-900/80">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <span>Choose audio file</span>
              </label>
            </div>

            <hr className="border-slate-800/80" />

            <div className="space-y-3">
              <div className="space-y-0.5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  2 · Process your audio
                </h2>
                <p className="text-[11px] text-slate-500">
                  We analyse your voice note and extract your business details — services, style,
                  branding, and selling points. That structured JSON becomes the blueprint for your
                  website.
                </p>
              </div>

              {apiState.error && (
                <p className="rounded-xl bg-rose-500/10 px-3 py-2 text-[11px] text-rose-200 ring-1 ring-rose-500/40">
                  {apiState.error}
                </p>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={apiState.loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:bg-sky-500/60"
              >
                {apiState.loading ? (
                  <>
                    <span className="inline-flex h-3 w-3 animate-spin rounded-full border-[2px] border-sky-100 border-t-transparent" />
                    Analysing audio with Opus…
                  </>
                ) : (
                  <>Generate website preview</>
                )}
              </button>

            </div>
          </section>

          {/* Right: preview */}
          <section className="space-y-4 rounded-3xl bg-slate-900/70 p-5 sm:p-6 lg:p-7 ring-1 ring-slate-800/90">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  3 · Create your website
                </h2>
                <p className="text-[11px] text-slate-500">
                  Live Tailwind layout generated from your audio — a complete website with hero,
                  services, about and contact, ready to expand into full pages.
                </p>
              </div>
              {generatedSite && (
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                  JSON received · preview ready
                </span>
              )}
            </div>

            <div className="relative mt-1 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950 shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
              <div className="flex items-center gap-1 border-b border-slate-800/80 bg-slate-900 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-[11px] text-slate-400">
                  {generatedSite?.business_name || 'your-business-name.co.uk'}
                </span>
              </div>

              <div className="max-h-[540px] overflow-y-auto bg-slate-950 px-4 py-5 sm:px-5 sm:py-6">
                {generatedSite ? (
                  <GeneratedSitePreview data={generatedSite} />
                ) : (
                  <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 text-center text-slate-400">
                    <p className="text-sm font-medium text-slate-200">
                      No preview yet — record or upload audio to generate one.
                    </p>
                    <p className="max-w-sm text-[11px] text-slate-500">
                      Once Opus returns JSON, we&apos;ll render a hero, services grid, about and
                      contact sections here using your ideal colour palette and design style.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}


