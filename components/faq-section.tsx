import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Does the UK have a grace period after my visa expires?",
    answer:
      "There is no general grace period: you are an overstayer from the day after your permission ends. Two narrow rules can help. A late application made within 14 days of expiry may have the overstay disregarded if you had a good reason beyond your control. And if you leave the UK voluntarily, at your own expense, within 30 days of your permission ending, no re-entry ban applies.",
  },
  {
    question: "What is the 14-day rule?",
    answer:
      "If you apply for new permission within 14 days of your old permission expiring, and the Home Office accepts you had a good reason beyond your control (for example emergency hospital treatment or a close family bereavement), the overstay can be disregarded. Forgetting the date, or not understanding it, is not a good reason. It is decided case by case, so get advice.",
  },
  {
    question: "What is the 30-day rule?",
    answer:
      "If you overstay by 30 days or less and leave the UK voluntarily at your own expense, no re-entry ban applies. If you stay longer than 30 days before leaving voluntarily at your own expense, a 12-month ban on applications usually applies.",
  },
  {
    question: "What is Section 3C leave?",
    answer:
      "If you apply to extend or change your permission before it expires, Section 3C of the Immigration Act 1971 usually continues your existing permission and conditions until the application is decided (and until any administrative review or appeal is finished). You are not an overstayer while it applies. It does not apply to applications made after your permission has ended.",
  },
  {
    question: "How long is the UK re-entry ban?",
    answer:
      "It depends on how you leave. No ban if you leave voluntarily at your own expense within 30 days of your permission ending. 12 months if you leave voluntarily at your own expense after more than 30 days. 2 years if you leave voluntarily at public expense within 6 months of being notified, and 5 years if later than that. 10 years if you are removed or deported, or if deception was used. Check the current Immigration Rules or take advice for your case.",
  },
  {
    question: "Does the ban apply while I'm still in the UK?",
    answer:
      "No. The refusal periods apply to future applications after you leave. But staying has its own consequences: you cannot lawfully work or rent, and many routes require you not to be an overstayer when you apply.",
  },
  {
    question: "Will a UK overstay affect my US, Schengen, or other visa applications?",
    answer:
      "It can. Many countries ask on visa forms whether you have ever overstayed or been refused entry, and you must answer truthfully. A UK overstay is treated as a negative factor by many immigration authorities.",
  },
  {
    question: "Is overstaying a UK visa a criminal offence?",
    answer:
      "It can be. Under section 24 of the Immigration Act 1971, knowingly remaining beyond the time allowed is an offence punishable by a fine or up to six months in prison. Prosecutions for overstaying alone are uncommon, but the offence and the overstay are recorded.",
  },
  {
    question: "What should I do right now if I've overstayed?",
    answer:
      "Work out exactly how many days you have overstayed, then get advice from a solicitor, an OISC-regulated adviser or Citizens Advice before you act. The right choice depends on your days overstayed, any pending application, and your ties to the UK. Do not ignore it, and do not use unregulated agents.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 md:py-20" aria-labelledby="faq-h">
      <h2 id="faq-h" className="text-center text-3xl font-semibold text-foreground md:text-4xl">
        Frequently asked questions
      </h2>
      <p className="mt-3 text-center text-muted-foreground">Straight answers to the questions people actually ask.</p>
      <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-5 open:bg-accent/30">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
              {faq.question}
              <Plus className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45" aria-hidden />
            </summary>
            <p className="mt-3 leading-relaxed text-muted-foreground">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}
