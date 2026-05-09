/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ]
  },
  redirects: async () => {
    return [
      // Redirect non-www to www for overstaycheck.co.uk
      {
        source: '/:path*',
        destination: 'https://www.overstaycheck.co.uk/:path*',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'overstaycheck.co.uk',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
