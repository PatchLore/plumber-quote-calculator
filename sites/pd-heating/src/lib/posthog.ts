import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: 'https://app.posthog.com',
    capture_pageview: true,
  })
}

export default posthog




