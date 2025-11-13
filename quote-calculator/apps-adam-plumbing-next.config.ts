import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@trade-websites/quoteflow-core', '@trade-websites/database'],
}

export default nextConfig


