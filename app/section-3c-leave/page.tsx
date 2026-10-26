import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Section 3C Leave: Staying Lawful While You Wait',
  description:
    'Applying before your UK permission expires usually continues it while the Home Office decides. How Section 3C works and when it does not apply.',
  alternates: { canonical: `${site.domain}/section-3c-leave` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="section-3c-leave"
      title="Section 3C Leave: Staying Lawful While You Wait"
      description="Applying before your permission expires usually keeps your permission and conditions going while the Home Office decides."
      sources={[
        { label: 'Immigration Act 1971, section 3C', href: 'https://www.legislation.gov.uk/ukpga/1971/77/section/3C' },
        { label: 'Citizens Advice: immigration', href: 'https://www.citizensadvice.org.uk/immigration/' },
        { label: 'GOV.UK: UK Visas and Immigration', href: 'https://www.gov.uk/government/organisations/uk-visas-and-immigration' },
      ]}
    >
      <p className="lede">
        Section 3C leave is the main protection for people whose visa runs out while an application is being decided. It
        is why applying <em>before</em> your permission ends matters so much.
      </p>

      <Callout tone="info" title="In short">
        If you make a valid application to extend or change your permission <strong>before your current permission
        expires</strong>, your permission and its conditions generally continue until the application is decided, and
        until any in-time administrative review or appeal is finished. You are not an overstayer during that time.
      </Callout>

      <h2>What Section 3C does</h2>
      <p>
        Section 3C of the Immigration Act 1971 extends your existing permission by law while a qualifying application is
        pending. Your conditions, such as the right to work, normally carry on as before. This is why people can wait many
        weeks or months for a decision while still lawfully working and living in the UK.
      </p>

      <h2>When it applies</h2>
      <ul>
        <li>You apply to vary (extend or change) your permission while you still have permission.</li>
        <li>The application is valid: made in the right form, with the fee or fee waiver, and any required steps such as biometrics.</li>
        <li>You are applying from inside the UK.</li>
      </ul>

      <h2>When it does not apply</h2>
      <ul>
        <li>
          <strong>You applied after your permission ended.</strong> A late application does not get 3C protection. The{' '}
          <Link href="/14-day-rule">14-day rule</Link> may help with the overstay in a decision, but it does not continue
          your permission.
        </li>
        <li>The application was invalid, or has been withdrawn.</li>
        <li>You leave the UK. Permission lapses when you leave, and so does any 3C protection.</li>
      </ul>

      <h2>When it ends</h2>
      <p>
        Section 3C leave ends when the application is decided, unless a right of administrative review or appeal applies
        and you bring it in time, in which case it continues until that process is finished. If your application is
        refused and you do not challenge it in time, your permission ends. From that point you are an overstayer, and the
        days start counting. Use the <Link href="/">calculator</Link> with the date your permission ended.
      </p>

      <h2>Proving your position</h2>
      <p>
        Employers, landlords and others may need to check your status. Keep your application confirmation and reference
        number. The Home Office online checking services are the main way to prove your right to work or rent, so check
        what your UKVI account and any share code show.
      </p>

      <h2>Practical tips</h2>
      <ol>
        <li>Apply early. Do not leave it to the last day.</li>
        <li>Keep the confirmation and the date and time you submitted.</li>
        <li>Do not travel abroad while an in-country application is pending without advice. You can lose the application and the protection.</li>
        <li>If you are refused, act on any review or appeal deadline immediately. The time limits are short.</li>
      </ol>

      <Callout tone="warning" title="Not legal advice">
        General information only. Whether 3C applies depends on exactly when and how you applied. Check with a
        solicitor or OISC-regulated adviser.
      </Callout>
    </GuideLayout>
  )
}
