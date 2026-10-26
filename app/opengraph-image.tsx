import { ImageResponse } from 'next/og'

export const alt = 'OverstayCheck UK: visa overstay calculator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #1d2b63 0%, #2b3f86 100%)',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 36, opacity: 0.9 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(255,255,255,0.15)', display: 'flex', border: '6px solid white' }} />
          OverstayCheck UK
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, marginTop: 40 }}>
          UK visa overstay calculator
        </div>
        <div style={{ fontSize: 34, marginTop: 28, opacity: 0.85 }}>
          Free · Private · Plain English
        </div>
      </div>
    ),
    size,
  )
}
