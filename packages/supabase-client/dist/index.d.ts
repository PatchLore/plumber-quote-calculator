import { type SupabaseClient } from '@supabase/supabase-js';
import { z } from 'zod';
export type { SupabaseClient };
export interface CreateBrowserClientOptions {
    supabaseUrl?: string;
    supabaseAnonKey?: string;
}
export declare const DEFAULT_BROWSER_SUPABASE_OPTIONS: {
    supabaseUrl: string;
    supabaseAnonKey: string;
};
export declare function createBrowserSupabaseClient(options?: CreateBrowserClientOptions): SupabaseClient<any, "public", "public", any, any> | null;
export interface CreateServerClientOptions {
    supabaseUrl?: string;
    serviceRoleKey?: string;
}
export declare const DEFAULT_SERVER_SUPABASE_OPTIONS: {
    supabaseUrl: string;
    serviceRoleKey: string;
};
export declare function createServiceSupabaseClient(options?: CreateServerClientOptions): SupabaseClient<any, "public", "public", any, any>;
export declare const leadSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    job_type: z.ZodString;
    postcode: z.ZodString;
    urgency: z.ZodString;
    job_details: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    estimated_quote: z.ZodNumber;
    status: z.ZodOptional<z.ZodString>;
    created_at: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type LeadRecord = z.infer<typeof leadSchema>;
export declare const urgencyMultiplierSchema: z.ZodObject<{
    standard: z.ZodNumber;
    same_day: z.ZodNumber;
    emergency: z.ZodNumber;
}, z.core.$strip>;
export type UrgencyMultiplier = z.infer<typeof urgencyMultiplierSchema>;
