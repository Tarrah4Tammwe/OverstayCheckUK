import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | OverstayCheck UK',
  description: 'Our privacy policy.',
  alternates: {
    canonical: 'https://www.overstaycheck.co.uk/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <a href="/" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to home
      </a>
      
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6"><strong>Last updated: May 2026</strong></p>

      <h2 className="text-2xl font-bold mb-4">What Data We Collect</h2>
      <p className="mb-4">This calculator runs in your browser. We collect:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Google Analytics (pages visited, device type, general location)</li>
        <li>No data from your visa details or personal inputs</li>
      </ul>
      <p className="mb-4">We do <strong>not</strong> collect:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Immigration status</li>
        <li>Personal identification</li>
        <li>Email addresses</li>
        <li>Persistent tracking cookies</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">How We Use Analytics</h2>
      <p className="mb-6">Analytics helps us understand site usage and improve navigation.</p>

      <h2 className="text-2xl font-bold mb-4">Advertising</h2>
      <p className="mb-6">This site displays Google AdSense advertisements. Google may use cookies to serve personalised ads. You can opt out at <a href="https://adssettings.google.com" className="text-blue-600 hover:underline">Google Ad Settings</a>.</p>

      <h2 className="text-2xl font-bold mb-4">Important: Not Legal Advice</h2>
      <p className="mb-6">This tool provides general information about UK immigration rules based on Home Office guidance. It is <strong>not legal advice</strong>. If you've overstayed or face removal, speak to a qualified UK immigration solicitor.</p>

      <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
      <p className="mb-4">You can:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Disable JavaScript</li>
        <li>Use privacy browser extensions</li>
        <li>Opt out of personalised Google ads</li>
      </ul>
      <p>We don't sell data or share personal information.</p>
    </div>
  )
}
