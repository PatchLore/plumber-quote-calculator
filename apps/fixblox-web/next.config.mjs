import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@fixblox/quoteflow-core',
    '@fixblox/supabase-client',
    '@fixblox/ui',
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
      '@fixblox/quoteflow-core': path.resolve(
        __dirname,
        '../../packages/quoteflow-core/src'
      ),
      '@fixblox/supabase-client': path.resolve(
        __dirname,
        '../../packages/supabase-client/src'
      ),
      '@fixblox/ui': path.resolve(__dirname, '../../packages/ui/src'),
    };
    return config;
  },
};

export default nextConfig;
