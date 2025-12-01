'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    // Chatbase bootstrapped object
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    chatbase?: any
  }
}

export default function ChatbaseWidget({ botId }: { botId?: string }) {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    const id = botId || process.env.NEXT_PUBLIC_CHATBASE_ID || 'b49ebYilvzFBCqUyLLCAi'
    let scriptEl: HTMLScriptElement | null = null

    const bootstrap = () => {
      // Avoid duplicate injection if script already exists
      const existing = document.getElementById(id) as HTMLScriptElement | null
      if (existing) {
        scriptEl = existing
        return
      }

      // Guard for re-entry
      if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
        window.chatbase = (...args: unknown[]) => {
          if (!window.chatbase.q) {
            window.chatbase.q = []
          }
          window.chatbase.q.push(args)
        }
        window.chatbase = new Proxy(window.chatbase, {
          get(target: unknown, prop: string) {
            if (prop === 'q') {
              return (target as { q: unknown[] }).q
            }
            return (...args: unknown[]) =>
              (target as (...args: unknown[]) => unknown)(prop, ...args)
          },
        })
      }

      const onLoad = function () {
        // Avoid duplicate injection on late load
        const existingOnLoad = document.getElementById(id) as HTMLScriptElement | null
        if (existingOnLoad) {
          scriptEl = existingOnLoad
          return
        }

        const script = document.createElement('script')
        script.src = 'https://www.chatbase.co/embed.min.js'
        script.id = id
        // @ts-expect-error - domain is a custom attribute for Chatbase
        script.domain = 'www.chatbase.co'
        document.body.appendChild(script)
        scriptEl = script
      }

      if (document.readyState === 'complete') {
        onLoad()
      } else {
        window.addEventListener('load', onLoad)
      }

      // Cleanup: remove listener and script if present
      return () => {
        window.removeEventListener('load', onLoad)
        if (scriptEl && scriptEl.parentNode) {
          scriptEl.parentNode.removeChild(scriptEl)
        }
      }
    }

    const cleanup = bootstrap()

    return () => {
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [botId])

  return null
}


