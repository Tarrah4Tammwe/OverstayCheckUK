import Script from 'next/script'

/**
 * Google Funding Choices (Google's free, TCF-certified consent management platform).
 * Required by Google for AdSense traffic from the UK and EEA. These tags do nothing until a
 * consent message is created and published in AdSense > Privacy & messaging.
 */
export function ConsentScripts() {
  return (
    <>
      <Script
        id="funding-choices"
        async
        src="https://fundingchoicesmessages.google.com/i/pub-8935274984783226?ers=1"
        strategy="afterInteractive"
      />
      <Script id="funding-choices-present" strategy="afterInteractive">
        {`(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`}
      </Script>
    </>
  )
}
