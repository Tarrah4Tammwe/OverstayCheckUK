export const site = {
  name: "OverstayCheck",
  region: "UK",
  regionLabel: "United Kingdom",
  domain: "https://www.overstaycheck.co.uk",
  // Month the content was last revised.
  updated: "October 2026",
  // Set this to a monitored inbox. The contact page shows it only when set.
  contactEmail: "",
  otherSite: {
    label: "US site",
    regionLabel: "United States",
    url: "https://overstaycheck.com",
  },
  exploreTitle: "Guides",
  explore: [] as { label: string; href: string }[],
  disclaimerAuthority: "the Home Office or any government agency",
  officialLinks: [
    { label: "GOV.UK: UK Visas and Immigration", href: "https://www.gov.uk/government/organisations/uk-visas-and-immigration" },
    { label: "Citizens Advice: immigration", href: "https://www.citizensadvice.org.uk/immigration/" },
    { label: "Find a regulated adviser (OISC)", href: "https://finder.oisc.gov.uk/" },
    { label: "Check a solicitor (SRA)", href: "https://www.sra.org.uk/consumers/solicitor-check/" },
  ],
}

export type Guide = { slug: string; title: string; blurb: string }

export const guides: Guide[] = [
  { slug: "overstayed-uk-visa-what-to-do", title: "I overstayed my UK visa: what to do", blurb: "A step-by-step way to work out where you stand and your realistic options." },
  { slug: "14-day-rule", title: "The 14-day rule", blurb: "When a late application within 14 days of expiry can have the overstay disregarded." },
  { slug: "section-3c-leave", title: "Section 3C leave", blurb: "How applying before your visa expires keeps your permission going while you wait." },
  { slug: "uk-re-entry-ban", title: "UK re-entry bans explained", blurb: "The 30-day line and the 12-month, 2-year, 5-year and 10-year refusal periods." },
  { slug: "overstaying-consequences", title: "Consequences of overstaying", blurb: "Work, renting, healthcare, banking and future visa applications." },
]

site.explore = guides.map((g) => ({ label: g.title, href: `/${g.slug}` }))

export const siteLinks = [
  { label: "Calculator", href: "/" },
  { label: "Guides", href: "/#guides" },
  { label: "FAQ", href: "/#faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]
