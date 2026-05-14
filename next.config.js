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
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  },
  redirects: async () => {
    return [
      // Force HTTPS
      {
        source: '/:path*',
        destination: 'https://www.overstaycheck.co.uk/:path*',
        permanent: true,
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http'
          },
        ],
      },
      // Redirect non-www to www (optional, if canonical is www)
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
