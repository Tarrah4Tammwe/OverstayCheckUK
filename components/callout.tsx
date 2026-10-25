import { AlertTriangle, CheckCircle2, Info } from "lucide-react"

type Tone = "info" | "warning" | "success"

const tones: Record<Tone, { wrap: string; icon: string; Icon: typeof Info }> = {
  info: { wrap: "bg-info-soft border-primary/25 text-info-ink", icon: "text-primary", Icon: Info },
  warning: { wrap: "bg-warn-soft border-warn/50 text-warn-ink", icon: "text-warn-ink", Icon: AlertTriangle },
  success: { wrap: "bg-safe-soft border-safe/40 text-safe-ink", icon: "text-safe", Icon: CheckCircle2 },
}

export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: Tone
  title?: string
  children: React.ReactNode
}) {
  const { wrap, icon, Icon } = tones[tone]
  return (
    <aside className={`not-prose my-8 flex gap-3 rounded-xl border p-5 ${wrap}`}>
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${icon}`} aria-hidden />
      <div className="text-[0.97rem] leading-relaxed">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        <div>{children}</div>
      </div>
    </aside>
  )
}
