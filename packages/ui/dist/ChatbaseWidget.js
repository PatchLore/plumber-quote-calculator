'use client';
import { useEffect } from 'react';
export default function ChatbaseWidget({ botId }) {
    useEffect(() => {
        const id = botId || process.env.NEXT_PUBLIC_CHATBASE_ID || 'b49ebYilvzFBCqUyLLCAi';
        // Avoid duplicate injection
        if (document.getElementById(id))
            return;
        // Inline bootstrapper (mirrors provided embed)
        (function () {
            // Guard for re-entry
            // @ts-expect-error - window.chatbase is dynamically added by Chatbase script
            if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
                // @ts-expect-error - window.chatbase is dynamically added by Chatbase script
                window.chatbase = (...args) => {
                    // @ts-expect-error - window.chatbase is dynamically added by Chatbase script
                    if (!window.chatbase.q) {
                        window.chatbase.q = [];
                    }
                    // @ts-expect-error - window.chatbase is dynamically added by Chatbase script
                    window.chatbase.q.push(args);
                };
                // @ts-expect-error - window.chatbase is dynamically added by Chatbase script
                window.chatbase = new Proxy(window.chatbase, {
                    get(target, prop) {
                        if (prop === 'q') {
                            return target.q;
                        }
                        return (...args) => target(prop, ...args);
                    }
                });
            }
            const onLoad = function () {
                const script = document.createElement('script');
                script.src = 'https://www.chatbase.co/embed.min.js';
                script.id = id;
                // @ts-expect-error - domain is a custom attribute for Chatbase
                script.domain = 'www.chatbase.co';
                document.body.appendChild(script);
            };
            if (document.readyState === 'complete') {
                onLoad();
            }
            else {
                window.addEventListener('load', onLoad);
            }
        })();
    }, [botId]);
    return null;
}
