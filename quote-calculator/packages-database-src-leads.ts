import { createBrowserClient } from './client'
import type { LeadInsert, Lead } from './types'

/**
 * Submit a new lead to the database
 */
export async function submitLead(
  clientId: string,
  leadData: Omit<LeadInsert, 'client_id'>
): Promise<{ success: boolean; lead?: Lead; error?: string }> {
  try {
    const supabase = createBrowserClient(clientId)

    const { data, error } = await supabase
      .from('leads')
      .insert({
        ...leadData,
        client_id: clientId,
        status: 'new'
      })
      .select()
      .single()

    if (error) {
      console.error('Error submitting lead:', error)
      return { success: false, error: error.message }
    }

    return { success: true, lead: data }
  } catch (error) {
    console.error('Error submitting lead:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

/**
 * Fetch leads for a specific client (admin use)
 */
export async function getLeadsByClient(
  clientId: string
): Promise<{ success: boolean; leads?: Lead[]; error?: string }> {
  try {
    const supabase = createBrowserClient(clientId)

    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .eq('client_id', clientId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching leads:', error)
      return { success: false, error: error.message }
    }

    return { success: true, leads: data }
  } catch (error) {
    console.error('Error fetching leads:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

/**
 * Update lead status
 */
export async function updateLeadStatus(
  clientId: string,
  leadId: string,
  status: 'new' | 'contacted' | 'quoted' | 'won' | 'lost'
): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = createBrowserClient(clientId)

    const { error } = await supabase
      .from('leads')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', leadId)
      .eq('client_id', clientId)

    if (error) {
      console.error('Error updating lead:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error('Error updating lead:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}


