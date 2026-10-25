import Link from "next/link"
import { CalendarCheck } from "lucide-react"
import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-footer text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
              <CalendarCheck className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-lg font-semibold">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            A free, independent calculator and plain-English guides for people dealing with a visa overstay in the{" "}
            {site.regionLabel}.
          </p>
        </div>

        <FooterColumn title={site.exploreTitle}>
          {site.explore.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-white hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="About">
          <li><Link href="/about" className="hover:text-white hover:underline">About &amp; methodology</Link></li>
          <li><Link href="/contact" className="hover:text-white hover:underline">Contact</Link></li>
          <li><Link href="/privacy" className="hover:text-white hover:underline">Privacy policy</Link></li>
          <li>
            <a href={site.otherSite.url} className="hover:text-white hover:underline">
              {site.otherSite.regionLabel} version
            </a>
          </li>
        </FooterColumn>

        <FooterColumn title="Official resources">
          {site.officialLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </FooterColumn>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs leading-relaxed text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. General information only, not legal advice.</p>
          <p>Independent website. Not affiliated with or endorsed by {site.disclaimerAuthority}.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  )
}
