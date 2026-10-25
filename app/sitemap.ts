import type { MetadataRoute } from 'next'
import { guides, site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-10-25')
  return [
    { url: site.domain, lastModified, changeFrequency: 'weekly', priority: 1 },
    ...guides.map((g) => ({ url: `${site.domain}/${g.slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 })),
    { url: `${site.domain}/about`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${site.domain}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${site.domain}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
