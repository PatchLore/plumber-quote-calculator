'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createBrowserSupabaseClient } from '@fixblox/supabase-client'
import { LogIn, Eye, EyeOff } from 'lucide-react'

export default function AdminSignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createBrowserSupabaseClient()
    if (!supabase) {
      setError('Database connection not available')
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else if (data.user) {
        // Redirect to dashboard
        window.location.href = '/admin/dashboard'
      }
    } catch {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createBrowserSupabaseClient()
    if (!supabase) {
      setError('Database connection not available')
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else if (data.user) {
        setError('Account created! Please check your email to confirm your account, then sign in.')
      }
    } catch {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent mb-2">QuoteFlow by FixBlox</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tradesperson Login</h2>
          <p className="text-gray-600">Access your lead management dashboard</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <div className="space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <>
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </>
              )}
            </button>
            
            <button
              type="button"
              onClick={handleSignUp}
              disabled={loading}
              className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              Sign Up as a Tradesperson
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/quoteflow"
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            ← Back to QuoteFlow
          </Link>
        </div>

        <div className="mt-8 p-4 bg-gradient-to-r from-sky-50 to-indigo-50 rounded-lg border border-gray-100">
          <h3 className="text-sm font-medium text-gray-900 mb-2">✨ Start Your Free Trial</h3>
          <p className="text-xs text-gray-600">
            Create your QuoteFlow account and start receiving qualified plumbing leads today. 14-day free trial, no credit card required.
          </p>
        </div>
      </div>
    </div>
  )
}
