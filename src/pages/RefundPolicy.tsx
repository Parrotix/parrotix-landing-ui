import PolicyLayout from '../components/PolicyLayout'

export default function RefundPolicy() {
  return (
    <PolicyLayout title="Refund & Cancellation Policy" lastUpdated="May 16, 2026">
      <p>
        This policy explains how cancellations and refunds work for Parrotix Plus subscriptions.
        Because all Parrotix Plus payments are processed by Google Play Billing, most cancellation
        and refund actions happen through Google Play.
      </p>

      <h2>1. Subscription Overview</h2>
      <p>
        Parrotix offers two Parrotix Plus plans:
      </p>
      <ul>
        <li><strong>Monthly:</strong> PKR 300 per month</li>
        <li><strong>Yearly:</strong> PKR 3,000 per year</li>
      </ul>
      <p>
        A limited-quantity <strong>Early Bird</strong> introductory price (PKR 100 for the first
        month or PKR 999 for the first year) is available to a fixed number of new subscribers.
        Early Bird pricing applies only to the first billing cycle; renewals are billed at the
        standard rate listed above. The free tier remains available to all users at no cost.
      </p>

      <h2>2. Cancellation</h2>
      <p>
        You can cancel your Parrotix Plus subscription at any time through Google Play:
      </p>
      <ul>
        <li>
          On Android: open the Google Play Store app → tap your avatar →{' '}
          <strong>Payments &amp; subscriptions</strong> → <strong>Subscriptions</strong> → tap
          Parrotix Plus → <strong>Cancel subscription</strong>
        </li>
        <li>
          On the web: visit{' '}
          <a
            href="https://play.google.com/store/account/subscriptions"
            target="_blank"
            rel="noopener noreferrer"
          >
            play.google.com/store/account/subscriptions
          </a>
        </li>
      </ul>
      <ul>
        <li>Cancellation takes effect at the end of your current billing period</li>
        <li>No cancellation fees are applied by Parrotix</li>
        <li>You retain full Plus access until the end of the current billing period</li>
        <li>Your account automatically reverts to the free tier after the period ends</li>
        <li>Your learning progress, XP, and streaks are preserved</li>
      </ul>

      <h2>3. Refunds — Through Google Play</h2>
      <p>
        Because Google Play processes all Parrotix Plus payments, refund requests are handled
        primarily through Google Play under{' '}
        <a
          href="https://support.google.com/googleplay/answer/2479637"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play's refund policy
        </a>
        . To request a refund:
      </p>
      <ul>
        <li>
          Visit{' '}
          <a
            href="https://play.google.com/store/account/orderhistory"
            target="_blank"
            rel="noopener noreferrer"
          >
            play.google.com/store/account/orderhistory
          </a>
        </li>
        <li>Locate your Parrotix Plus purchase</li>
        <li>Tap <strong>Report a problem</strong> → select a reason → <strong>Request refund</strong></li>
      </ul>
      <p>
        Google Play may automatically approve refund requests submitted within 48 hours of
        purchase. Requests outside this window are reviewed by Google on a case-by-case basis. We
        are not able to override Google's refund decisions, but we can help advocate for your
        refund if Google requests our input.
      </p>

      <h2>4. Refunds — Direct from Parrotix</h2>
      <p>
        In addition to Google Play's standard refund flow, Parrotix may issue a goodwill refund in
        the following situations:
      </p>
      <ul>
        <li>
          <strong>7-day satisfaction window (first-time subscribers):</strong> if you subscribed
          to Parrotix Plus for the first time and are not satisfied, email us within 7 days of
          your initial payment and we will work with Google to issue a full refund.
        </li>
        <li>
          <strong>Accidental or duplicate charge:</strong> if you were charged twice for the same
          billing period due to a technical error, we will work with Google to refund the
          duplicate amount.
        </li>
        <li>
          <strong>Extended service unavailability:</strong> if the Service was inaccessible for
          more than 72 consecutive hours during a paid billing period due to our fault, you may
          request a pro-rated goodwill credit or refund.
        </li>
      </ul>

      <h2>5. How to Request a Direct Refund</h2>
      <p>
        For the situations listed in Section 4, contact us with your registered email address,
        your Google Play order ID, and a brief reason for the request. We aim to respond within
        2 business days.
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@parrotix.com">support@parrotix.com</a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{' '}
          <a href="https://wa.me/923263409626">+92 326 340 9626</a>
        </li>
      </ul>

      <h2>6. Non-Refundable Situations</h2>
      <p>Refunds will generally not be issued in the following cases:</p>
      <ul>
        <li>
          Requests made more than 7 days after the initial payment, unless they qualify under
          Section 4 (duplicate charge or service unavailability)
        </li>
        <li>
          Renewals — once an auto-renewal has been processed, the cycle is generally
          non-refundable. Please cancel via Google Play before the renewal date if you do not
          wish to renew
        </li>
        <li>Accounts suspended or terminated due to violation of our Terms &amp; Conditions</li>
        <li>Partial use of Plus features (we do not pro-rate based on usage)</li>
      </ul>

      <h2>7. Free Tier</h2>
      <p>
        The Parrotix free tier is, and always will be, free of charge. No payment, refund, or
        cancellation action is required to use the free tier.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Refund &amp; Cancellation Policy from time to time. Material changes
        will be communicated via the app or email at least 7 days before they take effect.
        Continued use of Parrotix Plus after changes take effect constitutes your acceptance of
        the updated policy.
      </p>
    </PolicyLayout>
  )
}
