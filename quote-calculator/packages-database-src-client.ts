import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

/**
 * Create Supabase client for browser/client-side use
 */
export function createBrowserClient(clientId: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        'x-client-id': clientId
      }
    }
  })
}

/**
 * Create Supabase client for server-side use (Server Components, API Routes)
 */
export function createServerClient(clientId: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        'x-client-id': clientId
      }
    }
  })
}


