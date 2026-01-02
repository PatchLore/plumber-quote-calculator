"use client";


import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserSupabaseClient } from '@fixblox/supabase-client';

export default function NewInspectionPage() {
  const router = useRouter();
  const [clientName, setClientName] = useState('');
  const [siteAddress, setSiteAddress] = useState('');
  const [boilerStatus, setBoilerStatus] = useState<'pass' | 'fail'>('pass');
  const [gasPressure, setGasPressure] = useState<string>('');
  const [safetyCheck, setSafetyCheck] = useState(false);
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const supabase = createBrowserSupabaseClient()!;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        throw userError;
      }

      const record = {
        client_name: clientName || null,
        site_address: siteAddress || null,
        boiler_status: boilerStatus === 'pass',
        gas_pressure: gasPressure ? Number(gasPressure) : null,
        safety_check: safetyCheck,
        notes: notes || null,
        user_id: user?.id ?? null,
        created_at: new Date().toISOString(),
      };

      const { error: insertError } = await supabase.from('inspections').insert([record]);

      if (insertError) {
        throw insertError;
      }

      router.push('/inspections');
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      setError(msg);
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">New Inspection</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="clientName">
              Client Name
            </label>
            <input
              id="clientName"
              name="clientName"
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter client name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="siteAddress">
              Site Address
            </label>
            <input
              id="siteAddress"
              name="siteAddress"
              type="text"
              value={siteAddress}
              onChange={(e) => setSiteAddress(e.target.value)}
              className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter site address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Boiler Status</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="boilerStatus"
                  value="pass"
                  checked={boilerStatus === 'pass'}
                  onChange={() => setBoilerStatus('pass')}
                  className="h-4 w-4"
                />
                <span className="text-sm">Pass</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="boilerStatus"
                  value="fail"
                  checked={boilerStatus === 'fail'}
                  onChange={() => setBoilerStatus('fail')}
                  className="h-4 w-4"
                />
                <span className="text-sm">Fail</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="gasPressure">
              Gas Pressure
            </label>
            <input
              id="gasPressure"
              name="gasPressure"
              type="number"
              step="any"
              value={gasPressure}
              onChange={(e) => setGasPressure(e.target.value)}
              className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 20"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              id="safetyCheck"
              name="safetyCheck"
              type="checkbox"
              checked={safetyCheck}
              onChange={(e) => setSafetyCheck(e.target.checked)}
              className="h-4 w-4"
            />
            <label htmlFor="safetyCheck" className="text-sm">
              Safety Check
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="notes">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add any observations or notes..."
            />
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div className="pt-2">
            <button
              type="submit"
              disabled={saving}
              className={`w-full bg-blue-600 text-white py-2 rounded font-medium shadow-sm hover:bg-blue-700 ${
                saving ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              {saving ? 'Saving…' : 'Save Inspection'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}


