export default function TestChatbasePage() {
  return (
    <html>
      <head>
        <title>Chatbase Test</title>
      </head>
      <body>
        <h1>Chatbase Embed Test</h1>
        <p>If the chatbot loads, the embed works. If not, check console/network.</p>
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('[chatbase-test] setting embeddedChatbotConfig');
              window.embeddedChatbotConfig = {
                chatbotId: 'b49ebYilvzFBCqUyLLCAi',
                domain: 'www.chatbase.co'
              };
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const script = document.createElement('script');
              script.src = 'https://www.chatbase.co/embed.min.js';
              script.setAttribute('chatbot-id', 'b49ebYilvzFBCqUyLLCAi');
              script.setAttribute('domain', 'www.chatbase.co');
              script.onload = () => console.log('[chatbase-test] embed.min.js loaded');
              script.onerror = () => console.error('[chatbase-test] failed to load embed.min.js');
              document.body.appendChild(script);
            `,
          }}
        />
      </body>
    </html>
  );
}
