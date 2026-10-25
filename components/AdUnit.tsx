'use client'

import { useEffect, useRef } from 'react'

interface AdUnitProps {
  slot: string
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal'
  className?: string
}

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

/**
 * Responsive AdSense unit with a visible "Advertisement" label (AdSense policy: ads must be
 * distinguishable from content) and reserved space so late-loading ads don't shift the page.
 * Only place on pages with substantial original content, never next to buttons or form controls.
 */
export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    try {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
      pushed.current = true
    } catch {
      // Ad blockers or a blocked script must never break the page.
    }
  }, [])

  if (process.env.NODE_ENV === 'development') return null

  return (
    <aside aria-label="Advertisement" className={`mx-auto my-10 w-full max-w-4xl px-4 ${className}`}>
      <p className="mb-1.5 text-center text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
        Advertisement
      </p>
      <div className="min-h-[120px] overflow-hidden rounded-lg">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-8935274984783226"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  )
}
