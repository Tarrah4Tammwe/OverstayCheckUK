import { Clock, AlertTriangle, Ban, Plane } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const thresholds = [
  {
    icon: Clock,
    title: "14 Days",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    description:
      "The only window where an overstay might be disregarded. If you have a genuine reason beyond your control — medical emergency, bereavement, hospitalisation — you can apply for a new visa within 14 days. Simply forgetting is not valid.",
  },
  {
    icon: AlertTriangle,
    title: "30 Days",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    description:
      "The point where leaving voluntarily is no longer viewed as favourably. Consequences increase and future visa applications worldwide become significantly harder. The overstay is now firmly on your immigration record.",
  },
  {
    icon: Ban,
    title: "90 Days",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    description:
      "The automatic re-entry ban trigger. When you leave the UK after 90+ days of overstay, a re-entry ban activates. The length depends on how you leave — voluntary departure means a shorter ban than removal.",
  },
  {
    icon: Plane,
    title: "Removed / Deported",
    color: "text-red-700",
    bgColor: "bg-red-100",
    borderColor: "border-red-300",
    description:
      "Leaving at public expense or being deported results in the longest bans — up to 5 years for removal, or up to 10 years if deception was involved in any part of your visa application or stay.",
  },
]

export function ThresholdsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
          The Key Thresholds
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          UK immigration law marks specific points where consequences escalate. Know where you stand.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {thresholds.map((threshold) => (
          <Card
            key={threshold.title}
            className={`border-2 ${threshold.borderColor} ${threshold.bgColor} transition-shadow hover:shadow-md`}
          >
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <threshold.icon className={`h-6 w-6 ${threshold.color}`} />
                <h3 className={`text-lg font-bold ${threshold.color}`}>
                  {threshold.title}
                </h3>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {threshold.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
