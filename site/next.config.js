/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Bartekj Kasm registry',
    description: 'Custom KASM workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://bartekj.github.io/kasm-registry/',
    contactUrl: 'https://github.com/bartekj/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
