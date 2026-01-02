import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

export function createServerSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    const missing: string[] = []
    if (!supabaseUrl) missing.push('NEXT_PUBLIC_SUPABASE_URL')
    if (!supabaseAnonKey) missing.push('NEXT_PUBLIC_SUPABASE_ANON_KEY')
    throw new Error(
      `Supabase server credentials are not configured. Missing: ${missing.join(
        ', ',
      )}. Define these in apps/fixblox-web/.env.local for local development or set them in your Vercel project Environment Variables.`,
    )
  }

  const cookieStore = cookies()
  // Common Supabase auth cookie names; prefer access token cookie
  const accessToken =
    cookieStore.get('sb-access-token')?.value ??
    cookieStore.get('supabase-auth-token')?.value ??
    cookieStore.get('sb:token')?.value ??
    null

  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined

  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers,
    },
  })
}


