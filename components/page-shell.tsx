import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function PageShell({
  title,
  lede,
  children,
}: {
  title: string
  lede?: string
  children: React.ReactNode
}) {
  return (
    <main>
      <div className="border-b border-border bg-gradient-to-b from-accent/60 to-background">
        <div className="mx-auto max-w-3xl px-4 pb-10 pt-8">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground hover:underline">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <span aria-current="page">{title}</span>
          </nav>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground md:text-5xl">{title}</h1>
          {lede && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lede}</p>}
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <article className="article">{children}</article>
      </div>
    </main>
  )
}
