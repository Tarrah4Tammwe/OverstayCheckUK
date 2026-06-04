import type { Metadata } from 'next'
import Script from "next/script"
import { Scale } from "lucide-react"
import { OverstayCalculator } from "@/components/overstay-calculator"
import { ThresholdsSection } from "@/components/thresholds-section"
import { FAQSection, faqSchema } from "@/components/faq-section"

export const metadata: Metadata = {
  title: 'UK Visa Overstay Calculator — Check Your Status | OverstayCheck',
  description: 'Overstayed your UK visa? Enter your expiry date and find out exactly where you stand — 14-day rule, re-entry bans, and what to do next. Plain English.',
  alternates: {
    canonical: 'https://www.overstaycheck.co.uk',
  },
}

export default function HomePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">OverstayCheck</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-12 md:py-20 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
                  UK Visa Overstay Calculator
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
                  Enter your visa expiry date. Find out instantly where you stand and what happens next.
                </p>
              </div>

              <OverstayCalculator />
            </div>
          </section>

          {/* Thresholds Section */}
          <div className="container mx-auto px-4">
            <ThresholdsSection />
          </div>

          {/* FAQ Section */}
          <div className="bg-secondary/20">
            <div className="container mx-auto px-4">
              <FAQSection />
            </div>
          </div>

          {/* ── EDITORIAL SECTION ── */}
          <section className="py-14 border-t" aria-label="About UK Visa Overstays">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto prose prose-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6">Understanding UK Visa Overstays</h2>

                <p className="text-muted-foreground leading-relaxed mb-5">
                  Every year, hundreds of thousands of people visit the United Kingdom on temporary visas —
                  tourist visas, student visas, skilled worker visas, and visitor entry clearances. The
                  vast majority leave on time. But sometimes circumstances intervene: a medical emergency,
                  a change in personal situation, or simply losing track of the deadline. When your visa
                  expires and you remain in the UK, you become an overstayer from that day — with no grace
                  period and immediate legal consequences.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">There Is No Grace Period in the UK</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Unlike some other countries, the UK does not automatically give you extra days after
                  your visa expires. Day one after your visa end date is day one of overstaying. The only
                  exception is the 14-day rule, which applies in very specific circumstances — if you
                  overstay for 14 days or fewer and can demonstrate a genuine reason beyond your control
                  such as a medical emergency, the Home Office may disregard the overstay entirely. This
                  is a narrow exception, not a standard allowance.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  If you applied to extend your visa before it expired, you may be protected by Section 3C
                  leave, which keeps you lawfully in the UK while your application is pending. If you did
                  not apply before your visa expired, no such protection exists.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Consequences of Overstaying</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Overstaying a UK visa is a criminal offence under Section 24 of the Immigration Act 1971.
                  In practice, prosecutions for straightforward overstaying are uncommon — but the overstay
                  is permanently recorded. Future UK visa applications, and visa applications for many other
                  countries including the US, Canada, Australia, and Schengen nations, require you to
                  declare any previous immigration violations. A UK overstay is treated as a serious
                  negative factor by immigration authorities worldwide.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  When you eventually leave the UK, a re-entry ban applies. The length of the ban depends on
                  how you leave and how long you overstayed. Leaving voluntarily at your own expense results
                  in a shorter ban. Being removed at public expense results in a ban of up to 5 years. If
                  deception was involved in your original visa application, the ban can reach 10 years.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">What This Calculator Does</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  This tool takes your UK visa expiry date and calculates exactly where you stand today.
                  It tells you whether the 14-day exception window is still open, how long you have
                  overstayed, what re-entry consequences apply, and what your immediate options are. The
                  calculator is based on publicly available Home Office guidance and is updated to reflect
                  current UK immigration rules.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  This is a free informational tool — no data is stored, no registration required. If your
                  situation is complex, especially if you have a pending application, a criminal record,
                  or family ties in the UK, you should speak to a qualified UK immigration solicitor
                  before taking any action.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="py-10 border-t">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  <strong>Disclaimer:</strong> This calculator provides general information about UK immigration rules based on publicly available Home Office guidance. It is not legal advice. Immigration cases are complex and individual circumstances vary. If you have overstayed or are at risk of overstaying, speak to a qualified UK immigration solicitor.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t bg-card py-6">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground text-center">
              © 2026 OverstayCheck. For informational purposes only. Not affiliated with the Home Office or any government agency.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
