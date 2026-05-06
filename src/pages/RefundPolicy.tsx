import PolicyLayout from '../components/PolicyLayout'

export default function RefundPolicy() {
  return (
    <PolicyLayout title="Refund & Cancellation Policy" lastUpdated="May 4, 2025">
      <p>
        This policy explains how cancellations and refunds work for Parrotix subscriptions. Because
        Parrotix is a fully digital service, please read this policy carefully before subscribing.
      </p>

      <h2>1. Subscription Overview</h2>
      <p>
        Parrotix offers a monthly subscription — <strong>Parrotix Plus</strong> at{' '}
        <strong>Rs. 799 per month</strong> — that unlocks unlimited lessons, all game modes, and
        ad-free learning. The free tier remains available to all users at no cost.
      </p>

      <h2>2. Cancellation</h2>
      <p>
        You may cancel your Parrotix Plus subscription at any time directly from your account
        settings inside the app. Cancellation takes effect at the end of your current billing
        period — you will continue to have full Plus access until then, and you will not be charged
        again after that.
      </p>
      <ul>
        <li>No cancellation fees are applied</li>
        <li>Your account automatically reverts to the free tier after the billing period ends</li>
        <li>Your learning progress, XP, and streaks are preserved after cancellation</li>
      </ul>

      <h2>3. Refund Eligibility</h2>
      <p>
        Because Parrotix Plus grants immediate access to all premium content upon payment, we
        generally do not offer refunds for completed billing cycles. However, we will issue a full
        refund in the following situations:
      </p>
      <ul>
        <li>
          <strong>7-day satisfaction guarantee:</strong> If you subscribed for the first time and
          are not satisfied, contact us within 7 days of your initial payment for a full refund.
        </li>
        <li>
          <strong>Accidental or duplicate charge:</strong> If you were charged more than once for
          the same billing period, we will refund the duplicate amount.
        </li>
        <li>
          <strong>Service unavailability:</strong> If the Service was inaccessible for more than
          72 consecutive hours during a paid billing period due to our fault, you may request a
          pro-rated refund for the affected days.
        </li>
      </ul>

      <h2>4. How to Request a Refund</h2>
      <p>
        To request a refund, contact our support team with your registered email address and a
        brief reason for the request. We aim to respond within 2 business days and process
        approved refunds within 5–7 business days.
      </p>
      <ul>
        <li><strong>Phone / WhatsApp:</strong> <a href="https://wa.me/923263409626" className="text-brand-blue hover:underline">+92 326 340 9626</a></li>
        <li><strong>Address:</strong> D-311 Orange Street, Garden West, Karachi</li>
      </ul>

      <h2>5. Non-Refundable Situations</h2>
      <p>Refunds will not be issued in the following cases:</p>
      <ul>
        <li>Requests made more than 7 days after the initial payment (outside the satisfaction guarantee window)</li>
        <li>Renewals — once a renewal charge has been processed, it is non-refundable</li>
        <li>Accounts suspended or terminated due to violation of our Terms & Conditions</li>
        <li>Failure to cancel before the renewal date — please ensure you cancel in advance if you do not wish to renew</li>
      </ul>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Refund & Cancellation Policy from time to time. Any changes will be
        communicated via the app or email. Continued use of Parrotix Plus after changes take
        effect constitutes your acceptance of the updated policy.
      </p>
    </PolicyLayout>
  )
}
