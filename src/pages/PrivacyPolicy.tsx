import PolicyLayout from '../components/PolicyLayout'

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="May 16, 2026">
      <p>
        Parrotix ("we", "our", or "us") is committed to protecting your privacy. This Privacy
        Policy explains what information we collect, how we use it, who we share it with, and the
        rights you have over it when you use the Parrotix mobile application and this website
        (collectively, the "Service").
      </p>
      <p>
        Parrotix is intended for general audiences aged 13 and above. By using the Service you
        confirm you are at least 13 years old.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Account Information</h3>
      <ul>
        <li>Name and email address (provided directly or via Google Sign-In)</li>
        <li>Profile picture (avatar) from your Google account if you sign in with Google</li>
        <li>A unique Parrotix user ID we assign to your account</li>
      </ul>

      <h3>1.2 Subscription & Payment Information</h3>
      <ul>
        <li>
          Subscription status, plan, billing cycle, and renewal/expiry dates
        </li>
        <li>
          Purchase tokens and order IDs returned to us by Google Play Billing
        </li>
        <li>
          Amount paid and currency, as reported by Google Play
        </li>
      </ul>
      <p>
        <strong>We never see or store your credit card, debit card, or banking details.</strong>{' '}
        All payment instruments are handled directly by Google Play.
      </p>

      <h3>1.3 Learning & Usage Activity</h3>
      <ul>
        <li>Lessons started and completed, XP earned, streaks, and hearts/tokens used</li>
        <li>Game mode selections, answers submitted, and game results</li>
        <li>Leaderboard rank and weekly/daily activity</li>
      </ul>

      <h3>1.4 Voice & Audio (Speaking Exercises Only)</h3>
      <p>
        Some lessons include speaking exercises that require microphone access. When you use these
        features, the device captures your voice locally and passes it to the operating
        system's speech-to-text engine for grading. <strong>Audio is processed on-device or
        ephemerally and is not stored on our servers.</strong>
      </p>

      <h3>1.5 Device & Technical Information</h3>
      <ul>
        <li>Device model, operating system version, and app version</li>
        <li>A device identifier (used to detect duplicate accounts and to send push notifications)</li>
        <li>Firebase Cloud Messaging (FCM) token, used to deliver push notifications</li>
        <li>Crash reports and diagnostic data (Firebase Crashlytics)</li>
        <li>Approximate region inferred from network metadata (not precise location)</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Create, secure, and operate your Parrotix account</li>
        <li>Track your learning progress and award XP, streaks, and achievements</li>
        <li>Process Parrotix Plus subscription payments and entitlements</li>
        <li>Send you account, streak-reminder, and product notifications</li>
        <li>Diagnose crashes and improve app stability</li>
        <li>Analyse usage trends in aggregate to improve content and features</li>
        <li>Detect, investigate, and prevent fraud, abuse, or breaches of our Terms</li>
        <li>Comply with our legal and tax obligations</li>
      </ul>

      <h2>3. Permissions We Request on Your Device</h2>
      <ul>
        <li>
          <strong>Microphone:</strong> required for speaking-practice exercises. You may revoke
          this permission in your device settings at any time; speaking exercises will then be
          unavailable but other features will continue to work.
        </li>
        <li>
          <strong>Notifications:</strong> used to send streak reminders and important account
          updates. You can disable notifications at any time in your device settings.
        </li>
        <li>
          <strong>Internet:</strong> required to load lessons, sync progress, and process
          subscriptions.
        </li>
      </ul>

      <h2>4. Third Parties We Share Data With</h2>
      <p>
        We do not sell your personal information. We share specific data with the third-party
        services listed below so that they can perform their function within the Service. Each
        provider is contractually required to use your data only for the purposes we specify and
        to keep it secure.
      </p>
      <ul>
        <li>
          <strong>Google (Sign-In, Play Billing, Firebase):</strong> authentication, subscription
          processing, push notifications, crash reporting.
        </li>
        <li>
          <strong>Firebase Crashlytics:</strong> crash logs and device diagnostics for debugging.
        </li>
        <li>
          <strong>Firebase Cloud Messaging:</strong> delivery of push notifications.
        </li>
        <li>
          <strong>Amazon Web Services (AWS):</strong> cloud infrastructure hosting our backend
          servers.
        </li>
        <li>
          <strong>Neon (PostgreSQL):</strong> managed database storage for your account, progress,
          and subscription data.
        </li>
        <li>
          <strong>Tinybird:</strong> aggregated event analytics to understand how features are
          used.
        </li>
      </ul>
      <p>
        We may also disclose your information when required by law, subpoena, or court order, or
        when necessary to protect the rights, property, or safety of Parrotix, our users, or the
        public.
      </p>

      <h2>5. International Data Transfers</h2>
      <p>
        Parrotix is based in Pakistan, but our cloud infrastructure providers (Google, AWS, Neon,
        Tinybird) may store and process data in data centres outside Pakistan, including in the
        United States and the European Union. By using the Service, you understand that your
        information will be transferred to and stored in these locations, and you consent to this
        transfer.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain your account and learning data for as long as your account is active. If you
        delete your account, we will remove your personal information from our active systems
        within 30 days, except where we are legally required to retain certain records (for
        example, tax records related to your subscription payments, which may be retained for up
        to 7 years).
      </p>

      <h2>7. Your Rights & Choices</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate or incomplete data</li>
        <li>Request deletion of your account and associated personal data</li>
        <li>Withdraw consent for non-essential communications at any time</li>
        <li>Lodge a complaint with the relevant data-protection authority</li>
      </ul>

      <h3>How to Delete Your Account</h3>
      <p>You can delete your Parrotix account and all associated personal data in two ways:</p>
      <ul>
        <li>
          <strong>In the app:</strong> open the Profile tab → tap "Delete my account" → confirm.
          Your account, learning progress, and personal data will be removed within 30 days.
        </li>
        <li>
          <strong>By email:</strong> send a request to{' '}
          <a href="mailto:privacy@parrotix.com">privacy@parrotix.com</a> from the email address
          associated with your account. We will confirm receipt within 7 days and complete deletion
          within 30 days.
        </li>
      </ul>
      <p>
        Note: cancelling your Parrotix Plus subscription on Google Play does not delete your
        Parrotix account. Subscription cancellation is handled by Google Play and only stops
        future billing; your free-tier account remains active until you explicitly delete it.
      </p>

      <h2>8. Children's Privacy</h2>
      <p>
        Parrotix is not directed to children under 13, and we do not knowingly collect personal
        information from children under 13. If you believe a child has provided us with personal
        data, please contact us at{' '}
        <a href="mailto:privacy@parrotix.com">privacy@parrotix.com</a> and we will promptly delete
        the data.
      </p>

      <h2>9. Security</h2>
      <p>
        We use industry-standard security measures, including TLS encryption in transit and
        encryption at rest for our databases. Access to user data is restricted to authorised
        Parrotix personnel on a need-to-know basis. While we work hard to protect your data, no
        method of transmission or storage is 100% secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>10. Cookies & Similar Technologies (Website Only)</h2>
      <p>
        The parrotix.com website uses only the strictly necessary cookies required to remember
        your preferences. We do not use third-party advertising cookies. The Parrotix mobile app
        does not use browser cookies.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or
        for legal reasons. When we make material changes, we will notify you through the app or by
        email at least 7 days before the changes take effect. The "Last updated" date at the top
        of this page indicates when this policy was most recently revised.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        For privacy-related questions, account-deletion requests, or to exercise any of the rights
        listed above, please reach us at:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:privacy@parrotix.com">privacy@parrotix.com</a>
        </li>
        <li>
          <strong>Address:</strong> D-311 Orange Street, Garden West, Karachi, Pakistan
        </li>
        <li>
          <strong>Phone:</strong> +92 326 340 9626
        </li>
        <li>
          <strong>WhatsApp:</strong>{' '}
          <a href="https://wa.me/923263409626">+92 326 340 9626</a>
        </li>
      </ul>
    </PolicyLayout>
  )
}
