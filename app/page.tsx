import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UK Visa Overstay Calculator — Check Your Status | OverstayCheck',
  description: 'Overstayed your UK visa? Enter your expiry date and find out exactly where you stand — 14-day rule, re-entry bans, and what to do next. Plain English.',
  alternates: {
    canonical: 'https://www.overstaycheck.co.uk',
  },
}

export default function HomePage() {
  // ... rest of existing code
}
import Script from "next/script"
import { Scale } from "lucide-react"
import { OverstayCalculator } from "@/components/overstay-calculator"
import { ThresholdsSection } from "@/components/thresholds-section"
import { FAQSection, faqSchema } from "@/components/faq-section"

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
// Force rebuild
