/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  transpilePackages: ['@gpters-internal/ui'],
};

module.exports = nextConfig;
