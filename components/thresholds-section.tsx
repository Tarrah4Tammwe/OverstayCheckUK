const thresholds = [
  { title: "14 Days", text:
      "The only window where an overstay might be disregarded. If you have a genuine reason beyond your control — medical emergency, bereavement, hospitalisation — you can apply for a new visa within 14 days. Simply forgetting is not valid.", bar: "bg-warn", ink: "text-warn-ink" },
  { title: "30 Days", text:
      "The point where leaving voluntarily is no longer viewed as favourably. Consequences increase and future visa applications worldwide become significantly harder. The overstay is now firmly on your immigration record.", bar: "bg-warn", ink: "text-warn-ink" },
  { title: "90 Days", text:
      "The automatic re-entry ban trigger. When you leave the UK after 90+ days of overstay, a re-entry ban activates. The length depends on how you leave — voluntary departure means a shorter ban than removal.", bar: "bg-danger", ink: "text-danger-ink" },
  { title: "Removed / Deported", text:
      "Leaving at public expense or being deported results in the longest bans — up to 5 years for removal, or up to 10 years if deception was involved in any part of your visa application or stay.", bar: "bg-danger", ink: "text-danger-ink" },
]

export function ThresholdsSection() {
  return (
    <section id="thresholds" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:py-20" aria-labelledby="thresholds-h">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="thresholds-h" className="text-3xl font-semibold text-foreground md:text-4xl">The key thresholds</h2>
        <p className="mt-3 text-muted-foreground">
          UK immigration law marks specific points where the consequences of an overstay escalate.
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
