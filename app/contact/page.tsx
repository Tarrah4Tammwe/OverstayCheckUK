import type { Metadata } from 'next'
import { Callout } from '@/components/callout'
import { PageShell } from '@/components/page-shell'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'How to reach OverstayCheck about corrections or feedback, and where to find regulated immigration advice in the UK.',
  alternates: { canonical: `${site.domain}/contact` },
}

export default function ContactPage() {
  return (
    <PageShell title="Contact" lede="Corrections and feedback are welcome. For help with your own case, use the regulated services below.">
      <h2>Corrections and feedback</h2>
      {site.contactEmail ? (
        <p>
          Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. We read every message about errors or
          unclear wording, and fix what is wrong.
        </p>
      ) : (
        <p>
          We are an independent project and read feedback about errors or unclear wording. We cannot respond to
          questions about individual cases.
        </p>
      )}
      <Callout tone="info" title="We cannot give legal advice">
        OverstayCheck is not a law firm. Please do not send documents or personal details about your case.
      </Callout>

      <h2>Get regulated help</h2>
      <ul>
        <li>
          <a href="https://www.citizensadvice.org.uk/immigration/" target="_blank" rel="noopener noreferrer">Citizens Advice</a>.
          Free, independent immigration advice.
        </li>
        <li>
          <a href="https://finder.oisc.gov.uk/" target="_blank" rel="noopener noreferrer">OISC adviser finder</a>. Advisers
          regulated by the Office of the Immigration Services Commissioner.
        </li>
        <li>
          <a href="https://www.sra.org.uk/consumers/solicitor-check/" target="_blank" rel="noopener noreferrer">SRA solicitor check</a>.
          Confirm a solicitor is authorised before you instruct them.
        </li>
      </ul>
      <p>
        Only solicitors and OISC-regulated advisers can lawfully give immigration advice in the UK. Be cautious of
        anyone who is not on one of these registers.
      </p>
    </PageShell>
  )
}
