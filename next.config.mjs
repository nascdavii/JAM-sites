/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/refrigeracao',
        destination: '/refrigeracao.html',
      },
      {
        source: '/climatizacao',
        destination: '/climatizacao.html',
      },
    ]
  },
};

export default nextConfig;
