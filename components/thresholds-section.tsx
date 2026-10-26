const thresholds = [
  {
    title: "14 days",
    text: "If you apply for new permission within 14 days of your old permission expiring and the Home Office accepts a good reason beyond your control, such as hospitalisation or bereavement, the overstay can be disregarded. Forgetting is not a good reason.",
    bar: "bg-warn",
    ink: "text-warn-ink",
  },
  {
    title: "30 days",
    text: "If you leave the UK voluntarily, at your own expense, within 30 days of your permission ending, no re-entry ban applies. This is the last point at which leaving carries no automatic ban.",
    bar: "bg-warn",
    ink: "text-warn-ink",
  },
  {
    title: "Over 30 days",
    text: "Leaving voluntarily at your own expense after more than 30 days leads to a 12-month ban on applications. Leaving at the Home Office's expense leads to a 2-year or 5-year ban depending on timing.",
    bar: "bg-danger",
    ink: "text-danger-ink",
  },
  {
    title: "Removal or deception",
    text: "Being removed or deported, or using deception in an application, leads to the longest refusal period: 10 years.",
    bar: "bg-danger",
    ink: "text-danger-ink",
  },
]

export function ThresholdsSection() {
  return (
    <section id="thresholds" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:py-20" aria-labelledby="thresholds-h">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="thresholds-h" className="text-3xl font-semibold text-foreground md:text-4xl">The key thresholds</h2>
        <p className="mt-3 text-muted-foreground">
          UK immigration rules mark specific points where the consequences of an overstay escalate. These are
          summaries: always check the current rules or take advice.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {thresholds.map((t) => (
          <article key={t.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className={`h-1.5 ${t.bar}`} />
            <div className="p-6">
              <h3 className={`font-serif text-2xl font-semibold ${t.ink}`}>{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
