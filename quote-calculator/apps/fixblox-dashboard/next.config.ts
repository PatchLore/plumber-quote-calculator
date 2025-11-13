import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    typedRoutes: true
  },
  transpilePackages: [
    "@fixblox/quoteflow-core",
    "@fixblox/supabase-client",
    "@fixblox/ui",
  ],
};

export default nextConfig;
