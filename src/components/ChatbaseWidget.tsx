'use client'

import { useEffect } from 'react'

export default function ChatbaseWidget({ botId }: { botId?: string }) {
  useEffect(() => {
    const id = botId || process.env.NEXT_PUBLIC_CHATBASE_ID || 'b49ebYilvzFBCqUyLLCAi'

    // Avoid duplicate injection
    if (document.getElementById(id)) return

    // Inline bootstrapper (mirrors provided embed)
    (function(){
      // Guard for re-entry
      // @ts-ignore
      if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
        // @ts-ignore
        window.chatbase = (...args: any[]) => {
          // @ts-ignore
          if (!window.chatbase.q) { window.chatbase.q = [] }
          // @ts-ignore
          window.chatbase.q.push(args)
        }
        // @ts-ignore
        window.chatbase = new Proxy(window.chatbase, {
          get(target: any, prop: string) {
            if (prop === 'q') { return target.q }
            return (...args: any[]) => target(prop, ...args)
          }
        })
      }
      const onLoad = function() {
        const script = document.createElement('script')
        script.src = 'https://www.chatbase.co/embed.min.js'
        script.id = id
        // @ts-ignore
        script.domain = 'www.chatbase.co'
        document.body.appendChild(script)
      }
      if (document.readyState === 'complete') {
        onLoad()
      } else {
        window.addEventListener('load', onLoad)
      }
    })();
  }, [botId])

  return null
}

