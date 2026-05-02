import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Does the UK have a grace period after my visa expires?",
    answer:
      "No. There is no grace period. You are an overstayer from day one. The only exception is the 14-day rule, which applies only if you have a genuine reason beyond your control for missing your expiry date.",
  },
  {
    question: "What is the 14-day rule?",
    answer:
      "If you overstay but apply for a new visa within 14 days of expiry and can prove a genuine reason beyond your control (medical emergency, bereavement, hospitalisation), the Home Office may disregard the overstay entirely. Simply forgetting is not a valid reason.",
  },
  {
    question: "What is Section 3C leave?",
    answer:
      "If you applied to extend your visa BEFORE it expired, you are not an overstayer while that application is pending — even if your original visa has now expired. This is called Section 3C leave. If your application is refused, the clock starts from the refusal date.",
  },
  {
    question: "Does the re-entry ban apply while I'm still in the UK?",
    answer:
      "No. The ban only activates when you leave and try to return. But every day you stay, the overstay is accumulating on your record.",
  },
  {
    question: "How long is the UK re-entry ban?",
    answer:
      "It depends on how you leave. Leaving voluntarily at your own expense results in a shorter ban. Being removed at public expense results in a longer ban (up to 5 years). If deception was involved in your visa application, the ban can be up to 10 years.",
  },
  {
    question: "Will a UK overstay affect my US, Schengen, or other visa applications?",
    answer:
      "Yes. A UK overstay must be declared on future visa applications for most countries including the US, Canada, Australia, and Schengen. Immigration authorities worldwide treat UK overstays as a negative factor.",
  },
  {
    question: "Is overstaying a UK visa a criminal offence?",
    answer:
      "Yes. Under Section 24 of the Immigration Act 1971, overstaying without reasonable cause is a criminal offence punishable by a fine or up to six months imprisonment. In practice, prosecutions for straightforward overstaying are rare — but the offence is on your record regardless.",
  },
  {
    question: "What should I do right now if I've overstayed?",
    answer:
      "If you're within 14 days and have a genuine reason, apply for a new visa immediately. If you're past 14 days, speak to a UK immigration solicitor before doing anything — the timing and manner of your departure affects the length of any ban. Do not ignore it.",
  },
]

export function FAQSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Straight answers to the questions people actually ask.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-4 bg-card"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
