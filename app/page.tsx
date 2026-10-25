import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { EyeOff, Landmark, MessageSquareText } from 'lucide-react'
import AdUnit from '@/components/AdUnit'
import { OverstayCalculator } from '@/components/overstay-calculator'
import { ThresholdsSection } from '@/components/thresholds-section'
import { FAQSection, faqSchema } from '@/components/faq-section'
import { Callout } from '@/components/callout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: site.domain },
}

const trust = [
  { Icon: EyeOff, title: 'Private by design', text: 'Your date is calculated in your browser. Nothing is sent or stored.' },
  { Icon: Landmark, title: 'Based on Home Office guidance', text: 'Built around the Immigration Rules and published Home Office guidance on overstaying.' },
  { Icon: MessageSquareText, title: 'Plain English', text: 'No legal jargon. Every result says what it means and what to do next.' },
]

const steps = [
  { n: '1', title: 'Find your expiry date', text: 'Check the end date of your permission to stay on your visa, BRP or eVisa account.' },
  { n: '2', title: 'Enter it above', text: 'The calculator counts the days since your permission ended, or the days you have left.' },
  { n: '3', title: 'See where you stand', text: 'Get the threshold that applies today and where to find free, regulated advice.' },
]

export default function HomePage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        <section className="bg-gradient-to-b from-accent/70 via-accent/30 to-background">
          <div className="mx-auto max-w-6xl px-4 pb-14 pt-14 md:pt-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-3.5 py-1.5 text-sm font-medium text-accent-foreground">
                Free · No sign-up · Nothing stored
              </p>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] text-foreground md:text-6xl">
                UK visa overstay calculator
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                Enter your visa expiry date to see where you stand: whether the 14-day window is still open, how long
                you have overstayed, and what happens next.
              </p>
            </div>
            <div className="mt-10">
              <OverstayCalculator />
            </div>
          </div>
        </section>

        <section aria-label="Why trust this tool" className="border-y border-border bg-card">
          <ul className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
            {trust.map(({ Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h2 className="font-sans text-base font-semibold text-foreground">{title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <ThresholdsSection />

        <section id="how" className="scroll-mt-20 bg-secondary/60 py-16 md:py-20" aria-labelledby="how-h">
          <div className="mx-auto max-w-6xl px-4">
            <h2 id="how-h" className="text-center text-3xl font-semibold text-foreground md:text-4xl">How it works</h2>
            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((st) => (
                <li key={st.n} className="rounded-2xl bg-card p-6 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{st.n}</span>
                  <h3 className="mt-4 font-sans text-lg font-semibold text-foreground">{st.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{st.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <FAQSection />

        <section className="border-y border-border bg-card py-16 md:py-20" aria-labelledby="about-overstays">
          <div className="mx-auto max-w-3xl px-4">
            <h2 id="about-overstays" className="text-3xl font-semibold text-foreground md:text-4xl">Understanding UK visa overstays</h2>
            <div className="article mt-6">
<p>
                  Every year, hundreds of thousands of people visit the United Kingdom on temporary visas —
                  tourist visas, student visas, skilled worker visas, and visitor entry clearances. The
                  vast majority leave on time. But sometimes circumstances intervene: a medical emergency,
                  a change in personal situation, or simply losing track of the deadline. When your visa
                  expires and you remain in the UK, you become an overstayer from that day — with no grace
                  period and immediate legal consequences.
                </p>

                <h3>There Is No Grace Period in the UK</h3>
                <p>
                  Unlike some other countries, the UK does not automatically give you extra days after
                  your visa expires. Day one after your visa end date is day one of overstaying. The only
                  exception is the 14-day rule, which applies in very specific circumstances — if you
                  overstay for 14 days or fewer and can demonstrate a genuine reason beyond your control
                  such as a medical emergency, the Home Office may disregard the overstay entirely. This
                  is a narrow exception, not a standard allowance.
                </p>
                <p>
                  If you applied to extend your visa before it expired, you may be protected by Section 3C
                  leave, which keeps you lawfully in the UK while your application is pending. If you did
                  not apply before your visa expired, no such protection exists.
                </p>

                <h3>The Consequences of Overstaying</h3>
                <p>
                  Overstaying a UK visa is a criminal offence under Section 24 of the Immigration Act 1971.
                  In practice, prosecutions for straightforward overstaying are uncommon — but the overstay
                  is permanently recorded. Future UK visa applications, and visa applications for many other
                  countries including the US, Canada, Australia, and Schengen nations, require you to
                  declare any previous immigration violations. A UK overstay is treated as a serious
                  negative factor by immigration authorities worldwide.
                </p>
                <p>
                  When you eventually leave the UK, a re-entry ban applies. The length of the ban depends on
                  how you leave and how long you overstayed. Leaving voluntarily at your own expense results
                  in a shorter ban. Being removed at public expense results in a ban of up to 5 years. If
                  deception was involved in your original visa application, the ban can reach 10 years.
                </p>

                <h3>What This Calculator Does</h3>
                <p>
                  This tool takes your UK visa expiry date and calculates exactly where you stand today.
                  It tells you whether the 14-day exception window is still open, how long you have
                  overstayed, what re-entry consequences apply, and what your immediate options are. The
                  calculator is based on publicly available Home Office guidance and is updated to reflect
                  current UK immigration rules.
                </p>
                <p>
                  This is a free informational tool — no data is stored, no registration required. If your
                  situation is complex, especially if you have a pending application, a criminal record,
                  or family ties in the UK, you should speak to a qualified UK immigration solicitor
                  before taking any action.
                </p>
              <p>
                <Link href="/about">How this calculator works and its limits →</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-14 max-w-4xl px-4">
          <p className="mb-1 text-center text-[11px] uppercase tracking-widest text-muted-foreground">Advertisement</p>
          <AdUnit slot="2572172105" format="horizontal" />
        </div>

        <section className="mx-auto mt-16 max-w-3xl px-4" aria-label="Disclaimer">
          <Callout tone="warning" title="This is not legal advice">
            This calculator gives general information about UK immigration rules based on publicly available Home Office
            guidance. Immigration cases are complex and circumstances vary. If you have overstayed or are at risk of
            overstaying, speak to a qualified UK immigration solicitor or an OISC-regulated adviser.
          </Callout>
        </section>
      </main>
    </>
  )
}
