import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-foreground">We couldn&apos;t find that page</h1>
      <p className="mt-4 text-muted-foreground">It may have moved. Try the calculator or read the FAQ.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">Open the calculator</Link>
        <Link href="/#faq" className="rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary">Read the FAQ</Link>
      </div>
    </main>
  )
}
