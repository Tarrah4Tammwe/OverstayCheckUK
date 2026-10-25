"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarCheck, Menu, X } from "lucide-react"
import { site, siteLinks } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <CalendarCheck className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">{site.name}</span>
          <span className="rounded-md bg-accent px-1.5 py-0.5 text-xs font-semibold text-accent-foreground">
            {site.region}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {siteLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.otherSite.url}
            className="ml-2 rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {site.otherSite.label} →
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-foreground hover:bg-secondary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col py-2">
            {siteLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.otherSite.url} className="block rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-secondary">
                {site.otherSite.label} →
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
