import React from 'react';
import Link from 'next/link';
import { createServerSupabaseClient } from '@fixblox/supabase-client/server';

type InspectionRow = {
  id: string
  client_name: string | null
  site_address: string | null
  created_at: string | null
}

export default async function InspectionsPage() {
  const supabase = createServerSupabaseClient();

  // Try to determine the current user; if none, show empty state
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser().catch(() => ({ data: { user: null }, error: null }));

  if (!user || userError) {
    return (
      <main>
        <h1>Inspections</h1>
        <p>
          Please <Link href="/admin/sign-in?redirectedFrom=/inspections">sign in</Link> to view your inspections.
        </p>
      </main>
    )
  }

  const { data, error } = await supabase
    .from<InspectionRow>('inspections')
    .select('id, client_name, site_address, created_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  const inspections = Array.isArray(data) ? data : []

  return (
    <main>
      <h1>Inspections</h1>
      {inspections.length === 0 ? (
        <p>No inspections yet.</p>
      ) : (
        <ul className="space-y-3">
          {inspections.map((ins) => (
            <li key={ins.id} className="border-b pb-2">
              <Link href={`/inspections/${ins.id}`}>
                <a className="block">
                  <div className="text-base font-medium">{ins.client_name ?? '—'}</div>
                  <div className="text-sm text-gray-600">{ins.site_address ?? '—'}</div>
                  <div className="text-xs text-gray-500">
                    {ins.created_at ? new Date(ins.created_at).toLocaleString() : ''}
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {error && <div className="text-sm text-red-600 mt-3">Failed to load inspections.</div>}
    </main>
  )
}


