import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Explicitly disable Turbopack so Webpack is used for builds/dev.
  experimental: {
    turbopack: false,
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  transpilePackages: [
    "@fixblox/quoteflow-core",
    "@fixblox/supabase-client",
    "@fixblox/ui",
  ],
  webpack: (config) => {
    config.resolve.alias["@fixblox/quoteflow-core"] = path.resolve(
      __dirname,
      "../../packages/quoteflow-core/src"
    );
    config.resolve.alias["@fixblox/supabase-client"] = path.resolve(
      __dirname,
      "../../packages/supabase-client/src"
    );
    config.resolve.alias["@fixblox/ui"] = path.resolve(
      __dirname,
      "../../packages/ui/src"
    );
    return config;
  },
};

export default nextConfig;
