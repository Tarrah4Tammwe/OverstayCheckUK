import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { ArrowRight, BookOpen, EyeOff, Landmark, MessageSquareText } from 'lucide-react'
import AdUnit from '@/components/AdUnit'
import { OverstayCalculator } from '@/components/overstay-calculator'
import { ThresholdsSection } from '@/components/thresholds-section'
import { FAQSection, faqSchema } from '@/components/faq-section'
import { Callout } from '@/components/callout'
import { guides, site } from '@/lib/site'

export const metadata: Metadata = {
  alternates: {
    canonical: site.domain,
    languages: { 'en-GB': 'https://www.overstaycheck.co.uk', 'en-US': 'https://overstaycheck.com', 'x-default': 'https://overstaycheck.com' },
  },
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

        <section id="guides" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:py-20" aria-labelledby="guides-h">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="guides-h" className="flex items-center justify-center gap-3 text-3xl font-semibold text-foreground md:text-4xl">
              <BookOpen className="h-7 w-7 text-primary" aria-hidden /> Guides
            </h2>
            <p className="mt-3 text-muted-foreground">Plain-English explanations of the rules, your options and what happens next.</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/${g.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                >
                  <span className="font-sans text-lg font-semibold text-foreground group-hover:text-primary">{g.title}</span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{g.blurb}</span>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <AdUnit slot="2572172105" />

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
                  your visa expires. Day one after your visa end date is day one of overstaying. Two narrow
            rules can help. If you apply for new permission within 14 days of your old permission ending and
            can show a good reason beyond your control, such as a medical emergency, the Home Office may
            disregard the overstay. And if you leave voluntarily, at your own expense, within 30 days, no
            re-entry ban applies. Neither is a standard allowance.
                </p>
                <p>
                  If you applied to extend your visa before it expired, you may be protected by Section 3C
                  leave, which keeps you lawfully in the UK while your application is pending. If you did
                  not apply before your visa expired, no such protection exists.
                </p>

                <h3>The Consequences of Overstaying</h3>
                <p>
                  Knowingly overstaying can be a criminal offence under Section 24 of the Immigration Act 1971.
                  In practice, prosecutions for straightforward overstaying are uncommon — but the overstay
                  is permanently recorded. Future UK visa applications, and visa applications for many other
                  countries including the US, Canada, Australia, and Schengen nations, require you to
                  declare any previous immigration violations. A UK overstay is treated as a serious
                  negative factor by immigration authorities worldwide.
                </p>
                <p>
                  When you leave the UK, whether a re-entry ban applies depends on how long you overstayed and how you
            leave. Leaving voluntarily at your own expense within 30 days means no ban. After that, a 12-month
            ban on applications usually applies. Leaving at the Home Office&apos;s expense can mean 2 or 5 years,
            and removal, deportation or deception can mean 10 years.
                </p>

                <h3>What This Calculator Does</h3>
                <p>
                  This tool takes your UK visa expiry date and calculates exactly where you stand today.
                  It tells you whether the 14-day exception window is still open, how long you have
                  overstayed, what re-entry consequences apply, and what your immediate options are. The
            calculator is based on the Immigration Rules and published Home Office guidance. Rules change, so
            always check the current wording.
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

        <AdUnit slot="2572172105" />

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
