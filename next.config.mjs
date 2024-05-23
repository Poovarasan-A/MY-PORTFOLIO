import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const config =
  process.env.ANALYZE === "true"
    ? withBundleAnalyzer({})(nextConfig)
    : nextConfig;

export default config;
