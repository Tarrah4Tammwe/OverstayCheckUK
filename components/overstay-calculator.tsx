"use client"

import { useState, useMemo } from "react"
import { Calendar, AlertTriangle, CheckCircle, XCircle, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type TierInfo = {
  tier: string
  color: string
  bgColor: string
  borderColor: string
  icon: React.ReactNode
  verdict: string
  details: string
  nextThreshold?: { days: number; label: string }
}

function getTierInfo(daysOverstayed: number, daysRemaining: number): TierInfo {
  if (daysOverstayed < 0) {
    return {
      tier: "Valid",
      color: "text-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      icon: <CheckCircle className="h-6 w-6 text-emerald-600" />,
      verdict: "Your visa is still valid",
      details: `You have ${daysRemaining} day${daysRemaining !== 1 ? 's' : ''} remaining. You are in good standing.`,
      nextThreshold: undefined,
    }
  }

  if (daysOverstayed === 0) {
    return {
      tier: "Expiry Day",
      color: "text-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      icon: <Clock className="h-6 w-6 text-amber-600" />,
      verdict: "Your visa expires today",
      details: "Today is your last day. If you cannot leave, you must have a genuine reason beyond your control to avoid consequences.",
      nextThreshold: { days: 14, label: "14-day window closes" },
    }
  }

  if (daysOverstayed >= 1 && daysOverstayed <= 14) {
    return {
      tier: "14-Day Window",
      color: "text-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      icon: <Clock className="h-6 w-6 text-amber-600" />,
      verdict: "Still in the 14-day window — no ban yet",
      details: "If you have a genuine reason beyond your control (medical emergency, bereavement, hospitalisation), you can apply for a new visa now and the overstay may be disregarded entirely by the Home Office. This is your last safe exit.",
      nextThreshold: { days: 14 - daysOverstayed, label: "14-day window closes" },
    }
  }

  if (daysOverstayed >= 15 && daysOverstayed <= 29) {
    return {
      tier: "Overstay Confirmed",
      color: "text-orange-700",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      icon: <AlertTriangle className="h-6 w-6 text-orange-600" />,
      verdict: "14-day protection is gone — overstay on your record",
      details: "Leaving voluntarily now is still viewed more favourably. No automatic ban yet, but future applications will be harder.",
      nextThreshold: { days: 30 - daysOverstayed, label: "30-day threshold" },
    }
  }

  if (daysOverstayed >= 30 && daysOverstayed <= 89) {
    return {
      tier: "Serious Overstay",
      color: "text-red-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: <XCircle className="h-6 w-6 text-red-600" />,
      verdict: "Past the voluntary departure point",
      details: "Consequences increase significantly. Future UK and international visa applications will be seriously affected. Speak to an immigration solicitor.",
      nextThreshold: { days: 90 - daysOverstayed, label: "90-day ban trigger" },
    }
  }

  // 90+ days
  return {
    tier: "Re-entry Ban Territory",
    color: "text-red-800",
    bgColor: "bg-red-100",
    borderColor: "border-red-300",
    icon: <XCircle className="h-6 w-6 text-red-700" />,
    verdict: "Automatic re-entry ban will trigger when you leave",
    details: "Ban length depends on how you leave: voluntary at own expense = shorter ban, removed at public expense = longer, deception involved = up to 10 years. Seek legal advice immediately.",
    nextThreshold: undefined,
  }
}

function getProgressPercentage(daysOverstayed: number): number {
  if (daysOverstayed < 0) return 0
  if (daysOverstayed >= 90) return 100
  return Math.min((daysOverstayed / 90) * 100, 100)
}

function getProgressColor(daysOverstayed: number): string {
  if (daysOverstayed < 0) return "bg-emerald-500"
  if (daysOverstayed <= 14) return "bg-amber-500"
  if (daysOverstayed <= 29) return "bg-orange-500"
  return "bg-red-600"
}

export function OverstayCalculator() {
  const [expiryDate, setExpiryDate] = useState("")
  const [hasCalculated, setHasCalculated] = useState(false)

  const result = useMemo(() => {
    if (!expiryDate) return null

    const expiry = new Date(expiryDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    expiry.setHours(0, 0, 0, 0)

    const diffTime = today.getTime() - expiry.getTime()
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    const daysRemaining = diffDays < 0 ? Math.abs(diffDays) : 0
    const daysOverstayed = diffDays

    return {
      daysOverstayed,
      daysRemaining,
      tierInfo: getTierInfo(daysOverstayed, daysRemaining),
      progressPercentage: getProgressPercentage(daysOverstayed),
      progressColor: getProgressColor(daysOverstayed),
    }
  }, [expiryDate])

  const handleCalculate = () => {
    if (expiryDate) {
      setHasCalculated(true)
    }
  }

  const handleReset = () => {
    setExpiryDate("")
    setHasCalculated(false)
  }

  return (
    <Card className="w-full max-w-xl mx-auto border-2 shadow-lg">
      <CardContent className="p-6 md:p-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <label htmlFor="expiry-date" className="block text-sm font-medium text-foreground">
              Visa Expiry Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="expiry-date"
                type="date"
                value={expiryDate}
                onChange={(e) => {
                  setExpiryDate(e.target.value)
                  setHasCalculated(false)
                }}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={handleCalculate}
              disabled={!expiryDate}
              className="flex-1 h-12 text-base font-semibold"
            >
              Check My Status
            </Button>
            {hasCalculated && (
              <Button
                onClick={handleReset}
                variant="outline"
                className="h-12 px-4"
              >
                Reset
              </Button>
            )}
          </div>

          {hasCalculated && result && (
            <div className="space-y-4 pt-2">
              {/* Result Card */}
              <div className={`rounded-lg border-2 p-5 ${result.tierInfo.bgColor} ${result.tierInfo.borderColor}`}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    {result.tierInfo.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-sm font-semibold uppercase tracking-wide ${result.tierInfo.color}`}>
                        {result.tierInfo.tier}
                      </span>
                      {result.daysOverstayed > 0 && (
                        <span className="text-sm text-muted-foreground">
                          • {result.daysOverstayed} day{result.daysOverstayed !== 1 ? 's' : ''} overstayed
                        </span>
                      )}
                    </div>
                    <p className={`text-lg font-semibold ${result.tierInfo.color}`}>
                      {result.tierInfo.verdict}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {result.tierInfo.details}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Bar (only show if overstayed) */}
              {result.daysOverstayed > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Day 1</span>
                    <span>14 days</span>
                    <span>30 days</span>
                    <span>90+ days</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full ${result.progressColor} transition-all duration-500`}
                      style={{ width: `${result.progressPercentage}%` }}
                    />
                  </div>
                  <div className="relative h-1">
                    <div className="absolute left-[15.5%] w-0.5 h-3 bg-border -top-3" />
                    <div className="absolute left-[33.3%] w-0.5 h-3 bg-border -top-3" />
                  </div>
                </div>
              )}

              {/* Countdown to next threshold */}
              {result.tierInfo.nextThreshold && result.tierInfo.nextThreshold.days > 0 && (
                <div className="flex items-center justify-center gap-2 py-3 px-4 bg-secondary/50 rounded-lg">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{result.tierInfo.nextThreshold.days} day{result.tierInfo.nextThreshold.days !== 1 ? 's' : ''}</span>
                    {' '}until {result.tierInfo.nextThreshold.label}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
