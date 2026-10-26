import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'The UK 14-Day Rule for Late Applications',
  description:
    'Apply within 14 days of your UK permission ending, with a good reason beyond your control, and the overstay can be disregarded. What counts and what does not.',
  alternates: { canonical: `${site.domain}/14-day-rule` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="14-day-rule"
      title="The UK 14-Day Rule for Late Applications"
      description="A late application made within 14 days of your permission ending can have the overstay disregarded if you had a good reason beyond your control."
      sources={[
        { label: 'Immigration Rules: Part Suitability (late-application provision, SUI 13)', href: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-part-suitability' },
        { label: 'Immigration Rules (index)', href: 'https://www.gov.uk/guidance/immigration-rules' },
        { label: 'Citizens Advice: immigration', href: 'https://www.citizensadvice.org.uk/immigration/' },
      ]}
    >
      <p className="lede">
        The 14-day rule is not a grace period. It is a rule that lets the Home Office overlook a short overstay when you
        apply late for a good reason. Understanding exactly what it covers can prevent a costly mistake.
      </p>

      <Callout tone="info" title="In short">
        If you apply for new permission <strong>within 14 days</strong> of your old permission ending, and the decision
        maker accepts there was a <strong>good reason beyond your control</strong> for the delay, the overstay can be
        disregarded in that application. It is decided case by case, and forgetting is not a good reason.
      </Callout>

      <h2>What the rule says</h2>
      <p>
        Most applications for permission to stay in the UK can be refused if you are in breach of immigration laws, which
        includes overstaying. The Immigration Rules contain an exception: where your application is made within 14 days
        of your previous permission expiring, and the decision maker considers there was a good reason, beyond the
        control of you or your representative, why the application was not made in time, the overstay is disregarded.
      </p>
      <p>
        The provision used to sit in paragraph 39E of the Immigration Rules and has since moved into Part Suitability.
        The numbering has changed, but the principle has remained the same. Check the current wording on GOV.UK.
      </p>

      <h2>What usually counts as a good reason</h2>
      <p>The reason has to be genuine, evidenced, and outside your control. Examples that are commonly accepted include:</p>
      <ul>
        <li>Emergency hospital treatment, or serious illness that stopped you from applying.</li>
        <li>A close family bereavement.</li>
        <li>Delay by your sponsor, employer or university in providing a document you needed, such as a confirmation of acceptance for studies.</li>
        <li>Serious problems with the application system or with travel that you could not reasonably have avoided.</li>
      </ul>

      <h2>What usually does not count</h2>
      <ul>
        <li>Forgetting the expiry date or misunderstanding when it was.</li>
        <li>Not knowing you needed to apply, or not knowing the rules.</li>
        <li>Waiting to gather documents or money you could have arranged earlier.</li>
      </ul>

      <h2>What the rule does not do</h2>
      <ul>
        <li>It is <strong>not</strong> automatic permission to stay for 14 days.</li>
        <li>
          It does <strong>not</strong> continue your permission or your conditions. Section 3C leave only helps if you
          apply <em>before</em> your permission ends. See <Link href="/section-3c-leave">Section 3C leave</Link>.
        </li>
        <li>It only helps with the overstay as a reason for refusal. You must still meet all the other requirements.</li>
      </ul>
      <p>
        Because your application is made after your permission ended, do not assume that you can work or rent a home
        while it is decided. Take advice on your position.
      </p>

      <h2>How to give yourself the best chance</h2>
      <ol>
        <li>Apply as soon as you can. Do not use the whole 14 days if you do not have to.</li>
        <li>Explain clearly in the application <em>why</em> it was late, and when the problem started and ended.</li>
        <li>Include evidence: hospital letters, death certificates, emails with a sponsor, dated screenshots of system errors.</li>
        <li>Make sure the account is consistent with your other documents.</li>
        <li>Get advice from a regulated adviser or solicitor before you submit if you can.</li>
      </ol>

      <h2>If you are outside the 14 days</h2>
      <p>
        Then the rule does not apply and you should look at other options. If you are still within 30 days, leaving
        voluntarily at your own expense carries no re-entry ban. See{' '}
        <Link href="/uk-re-entry-ban">UK re-entry bans explained</Link> and{' '}
        <Link href="/overstayed-uk-visa-what-to-do">what to do if you have overstayed</Link>. You can check your count with
        the <Link href="/">calculator</Link>.
      </p>

      <Callout tone="warning" title="Not legal advice">
        General information only. Whether a reason counts is a judgement on your evidence. Speak to a solicitor or
        OISC-regulated adviser.
      </Callout>
    </GuideLayout>
  )
}
