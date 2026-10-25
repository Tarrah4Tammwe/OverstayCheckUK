"use client"

import { useState } from "react"
import Link from "next/link"
import { AlertTriangle, ArrowRight, CalendarDays, CheckCircle2, Clock, XCircle } from "lucide-react"

type Tier = "valid" | "window" | "overstay" | "serious" | "ban"

interface Result {
  daysOverstayed: number
  tier: Tier
  label: string
  headline: string
  detail: string
  next: { days: number; label: string } | null
  progress: number
  steps: { href: string; label: string; external?: boolean }[]
}

// "YYYY-MM-DD" from <input type="date"> must be read as a local date; new Date("2026-01-01")
// parses as UTC midnight and can shift the result by a day depending on the visitor's time zone.
function parseLocalDate(value: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!m) return null
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
  return isNaN(d.getTime()) ? null : d
}

function daysBetween(from: Date, to: Date) {
  const a = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate())
  const b = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate())
  return Math.round((b - a) / 86_400_000)
}

const advice = {
  href: "https://www.citizensadvice.org.uk/immigration/",
  label: "Free immigration advice (Citizens Advice)",
  external: true,
}
const regulated = { href: "https://finder.oisc.gov.uk/", label: "Find a regulated adviser (OISC)", external: true }

function calculate(expiry: Date): Result {
  const diff = daysBetween(expiry, new Date())

  if (diff < 0) {
    const n = -diff
    return {
      daysOverstayed: 0,
      tier: "valid",
      label: "Visa still valid",
      headline: `Your visa is valid for ${n} more day${n === 1 ? "" : "s"}.`,
      detail:
        "You are in good standing. If you need to stay longer, apply to extend before your visa expires: a pending in-time application can protect you under Section 3C leave.",
      next: null,
      progress: 0,
      steps: [{ href: "/#faq", label: "What is Section 3C leave?" }, advice],
    }
  }

  if (diff === 0) {
    return {
      daysOverstayed: 0,
      tier: "window",
      label: "Expires today",
      headline: "Your visa expires today.",
      detail:
        "Today is your last day. If you cannot leave and have not applied to extend, you must have a genuine reason beyond your control to avoid consequences.",
      next: { days: 14, label: "the 14-day window closing" },
      progress: 0,
      steps: [{ href: "/#faq", label: "What is the 14-day rule?" }, advice],
    }
  }

  if (diff <= 14) {
    return {
      daysOverstayed: diff,
      tier: "window",
      label: "14-day window",
      headline: `${diff} day${diff === 1 ? "" : "s"} overstayed, still inside the 14-day window.`,
      detail:
        "If you have a genuine reason beyond your control (medical emergency, bereavement, hospitalisation), you can apply for a new visa now and the Home Office may disregard the overstay. This is the last safe exit.",
      next: { days: 14 - diff, label: "the 14-day window closing" },
      progress: (diff / 90) * 100,
      steps: [{ href: "/#faq", label: "What is the 14-day rule?" }, advice, regulated],
    }
  }

  if (diff < 30) {
    return {
      daysOverstayed: diff,
      tier: "overstay",
      label: "Overstay confirmed",
      headline: `${diff} days overstayed. The 14-day protection has passed.`,
      detail:
        "The overstay is now on your record. Leaving voluntarily is still viewed more favourably than being removed, and there is no automatic ban yet, but future applications will be harder.",
      next: { days: 30 - diff, label: "the 30-day threshold" },
      progress: (diff / 90) * 100,
      steps: [{ href: "/#faq", label: "How long is the re-entry ban?" }, advice, regulated],
    }
  }

  if (diff < 90) {
    return {
      daysOverstayed: diff,
      tier: "serious",
      label: "Serious overstay",
      headline: `${diff} days overstayed. Past the voluntary departure point.`,
      detail:
        "Consequences increase significantly. Future UK and international visa applications will be seriously affected. Speak to an immigration solicitor or regulated adviser before you act.",
      next: { days: 90 - diff, label: "the 90-day ban trigger" },
      progress: (diff / 90) * 100,
      steps: [advice, regulated, { href: "/#faq", label: "How long is the re-entry ban?" }],
    }
  }

  return {
    daysOverstayed: diff,
    tier: "ban",
    label: "Re-entry ban range",
    headline: `${diff} days overstayed.`,
    detail:
      "A re-entry ban is likely to apply when you leave. How long depends on how you leave: voluntarily at your own expense, removed at public expense, or if deception was involved. Seek legal advice before deciding what to do.",
    next: null,
    progress: 100,
    steps: [advice, regulated, { href: "/#faq", label: "How long is the re-entry ban?" }],
  }
}

const styles: Record<Tier, { card: string; badge: string; bar: string; Icon: typeof CheckCircle2; iconColor: string }> = {
  valid: { card: "border-safe/40 bg-safe-soft", badge: "bg-safe text-white", bar: "bg-safe", Icon: CheckCircle2, iconColor: "text-safe" },
  window: { card: "border-warn/50 bg-warn-soft", badge: "bg-warn-ink text-white", bar: "bg-warn", Icon: Clock, iconColor: "text-warn-ink" },
  overstay: { card: "border-warn/60 bg-warn-soft", badge: "bg-warn-ink text-white", bar: "bg-warn", Icon: AlertTriangle, iconColor: "text-warn-ink" },
  serious: { card: "border-danger/40 bg-danger-soft", badge: "bg-danger text-white", bar: "bg-danger", Icon: XCircle, iconColor: "text-danger" },
  ban: { card: "border-danger/50 bg-danger-soft", badge: "bg-danger text-white", bar: "bg-danger", Icon: XCircle, iconColor: "text-danger" },
}

export function OverstayCalculator() {
  const [value, setValue] = useState("")
  const [result, setResult] = useState<Result | null>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const date = parseLocalDate(value)
    if (date) setResult(calculate(date))
  }

  const reset = () => {
    setValue("")
    setResult(null)
  }

  const s = result ? styles[result.tier] : null

  return (
    <div className="mx-auto w-full max-w-2xl">
      <form
        onSubmit={submit}
        className="rounded-2xl border border-border bg-card p-6 shadow-[0_8px_30px_-12px_rgb(30_40_90/0.25)] md:p-8"
      >
        <label htmlFor="expiry-date" className="block text-base font-semibold text-foreground">
          When does (or did) your UK visa expire?
        </label>
        <p className="mt-1 text-sm text-muted-foreground">
          Use the end date of your permission to stay, shown on your visa, BRP or eVisa account.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <CalendarDays
              className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              id="expiry-date"
              type="date"
              required
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                setResult(null)
              }}
              className="h-12 w-full rounded-lg border border-input bg-background pl-11 pr-3 text-base text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <button
            type="submit"
            disabled={!value}
            className="h-12 rounded-lg bg-primary px-7 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Check my status
          </button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Calculated in your browser. Your date is never sent anywhere or stored.
        </p>
      </form>

      {result && s && (
        <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500" role="status" aria-live="polite">
          <section className={`rounded-2xl border p-6 md:p-8 ${s.card}`}>
            <div className="flex items-start gap-4">
              <s.Icon className={`mt-1 h-8 w-8 shrink-0 ${s.iconColor}`} aria-hidden />
              <div className="min-w-0">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${s.badge}`}>
                  {result.label}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                  {result.headline}
                </h3>
                <p className="mt-3 leading-relaxed text-foreground/80">{result.detail}</p>
              </div>
            </div>

            {result.tier !== "valid" && result.daysOverstayed > 0 && (
              <div className="mt-6">
                <div className="mb-2 flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-medium text-foreground">
                    {result.next
                      ? `${result.next.days} day${result.next.days === 1 ? "" : "s"} until ${result.next.label}`
                      : "Past the 90-day mark"}
                  </span>
                  <span className="shrink-0 tabular-nums text-muted-foreground">{result.daysOverstayed} days overstayed</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-black/10">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${s.bar}`}
                    style={{ width: `${Math.min(Math.max(result.progress, 3), 100)}%` }}
                  />
                </div>
                <div className="relative mt-2 h-4 text-xs text-muted-foreground">
                  <span className="absolute left-0">Day 1</span>
                  <span className="absolute -translate-x-1/2" style={{ left: "15.5%" }}>14</span>
                  <span className="absolute -translate-x-1/2" style={{ left: "33.3%" }}>30</span>
                  <span className="absolute right-0">90+</span>
                </div>
              </div>
            )}
          </section>

          <section className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-sans text-base font-semibold text-foreground">What to do next</h3>
            <ul className="mt-3 divide-y divide-border">
              {result.steps.map((step) => (
                <li key={step.href}>
                  {step.external ? (
                    <a
                      href={step.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 py-3 text-foreground hover:text-primary"
                    >
                      <span className="font-medium">{step.label}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                    </a>
                  ) : (
                    <Link
                      href={step.href}
                      className="group flex items-center justify-between gap-3 py-3 text-foreground hover:text-primary"
                    >
                      <span className="font-medium">{step.label}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <p className="text-center text-sm text-muted-foreground">
            This is general information, not legal advice. A pending application, Section 3C leave or other circumstances can change the result.{" "}
            <button type="button" onClick={reset} className="font-medium text-primary underline underline-offset-2">
              Check another date
            </button>
          </p>
        </div>
      )}
    </div>
  )
}
