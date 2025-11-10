import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { z } from 'zod'

export type { SupabaseClient }

export interface CreateBrowserClientOptions {
  supabaseUrl?: string
  supabaseAnonKey?: string
}

export const DEFAULT_BROWSER_SUPABASE_OPTIONS = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
}

export function createBrowserSupabaseClient(
  options: CreateBrowserClientOptions = DEFAULT_BROWSER_SUPABASE_OPTIONS,
) {
  if (typeof window === 'undefined') {
    return null
  }

  const supabaseUrl = options.supabaseUrl || DEFAULT_BROWSER_SUPABASE_OPTIONS.supabaseUrl
  const supabaseAnonKey =
    options.supabaseAnonKey || DEFAULT_BROWSER_SUPABASE_OPTIONS.supabaseAnonKey

  if (!supabaseUrl || !supabaseAnonKey) {
    return null
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  })
}

export interface CreateServerClientOptions {
  supabaseUrl?: string
  serviceRoleKey?: string
}

export const DEFAULT_SERVER_SUPABASE_OPTIONS = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
}

export function createServiceSupabaseClient(
  options: CreateServerClientOptions = DEFAULT_SERVER_SUPABASE_OPTIONS,
) {
  const supabaseUrl = options.supabaseUrl || DEFAULT_SERVER_SUPABASE_OPTIONS.supabaseUrl
  const serviceRoleKey = options.serviceRoleKey || DEFAULT_SERVER_SUPABASE_OPTIONS.serviceRoleKey

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Supabase server credentials are not configured')
  }

  return createClient(supabaseUrl, serviceRoleKey)
}

export const leadSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  job_type: z.string(),
  postcode: z.string(),
  urgency: z.string(),
  job_details: z.string().nullable().optional(),
  estimated_quote: z.number(),
  status: z.string().optional(),
  created_at: z.string().optional(),
})

export type LeadRecord = z.infer<typeof leadSchema>

export const urgencyMultiplierSchema = z.object({
  standard: z.number(),
  same_day: z.number(),
  emergency: z.number(),
})

export type UrgencyMultiplier = z.infer<typeof urgencyMultiplierSchema>

