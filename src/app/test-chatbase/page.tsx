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
          src="https://www.chatbase.co/embed.min.js"
          chatbot-id="b49ebYilvzFBCqUyLLCAi"
          domain="www.chatbase.co"
          defer
          onLoad="console.log('[chatbase-test] embed.min.js loaded')"
          onError="console.error('[chatbase-test] failed to load embed.min.js')"
        />
      </body>
    </html>
  );
}
