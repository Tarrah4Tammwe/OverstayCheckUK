import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // The AdSense crawler must be able to read every page that shows ads.
      { userAgent: 'Mediapartners-Google', allow: '/' },
      // Do not block /_next/: Google needs the CSS and JS to render pages.
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  }
}
