import { useEffect } from 'react'
import './App.css'

const baseUrl = import.meta.env.BASE_URL
const assetPath = (fileName) => `${baseUrl}screenshots/${fileName}`

const heroChips = ['Catch logs', 'Trip history', 'Map markers', 'Pattern insights']

const features = [
  {
    title: 'Log catches fast',
    copy: 'Record the details that matter while you are still on the water.',
  },
  {
    title: 'Track conditions',
    copy: 'Save weather, water temperature, depth, structure, and location context.',
  },
  {
    title: 'Remember what worked',
    copy: 'Keep bait, lure, presentation, and notes connected to each catch.',
  },
  {
    title: 'Photos and trip notes',
    copy: 'Build a visual record of fish, trips, locations, and lessons learned.',
  },
  {
    title: 'Spot patterns over time',
    copy: 'Review your history to see what conditions keep producing.',
  },
  {
    title: 'Offline-first mindset',
    copy: 'Designed for real fishing days where service can be unreliable on non-existent.',
  },
]

const audiences = [
  'Pond fishermen',
  'Lake fishermen',
  'Kayak anglers',
  'Bank fishermen',
  'Weekend anglers',
]

const screenshots = [
  {
    image: assetPath('dashboard.png'),
    title: 'Dashboard',
    copy: 'Start trips, log catches, view history, open the map, and review insights from one clean home screen.',
    alt: 'FishLog dashboard showing trip controls and app shortcuts.',
  },
  {
    image: assetPath('active_trip_on_dashboard.png'),
    title: 'Active trip tracking',
    copy: 'Keep a trip running while you log catches, no-catches, timing, location, and conditions.',
    alt: 'FishLog active trip dashboard showing a current fishing trip and quick log buttons.',
  },
  {
    image: assetPath('log_catch_form.png'),
    title: 'Fast catch entry',
    copy: 'Save species, length, weight, photos, water temperature, depth, bait, and notes while the details are fresh.',
    alt: 'FishLog log catch form with species, measurements, photos, conditions, and bait fields.',
  },
  {
    image: assetPath('catch_history.png'),
    title: 'Catch history',
    copy: 'Review every catch with trip, date, size, weight, photos, and location context.',
    alt: 'FishLog catch history screen listing logged fish.',
  },
  {
    image: assetPath('map_with_markers.png'),
    title: 'Catch map',
    copy: 'See catches and no-catches on the map so patterns are easier to remember.',
    alt: 'FishLog catch map showing fishing log markers on a lake.',
  },
  {
    image: assetPath('trip_history.png'),
    title: 'Trip history',
    copy: 'Compare past trips by lake, conditions, catches, no-catches, duration, and total logs.',
    alt: 'FishLog trip history screen showing completed fishing trips and trip stats.',
  },
  {
    image: assetPath('trip_details.png'),
    title: 'Trip details',
    copy: 'Review trip summaries, conditions, moon phase, catches, no-catches, and the logs from that trip.',
    alt: 'FishLog trip details screen showing trip summary, conditions, and moon phase.',
  },
  {
    image: assetPath('insights.png'),
    title: 'Fishing insights',
    copy: 'Turn catch history into simple patterns like best bait by species, water temp, and trip success rate.',
    alt: 'FishLog insights screen showing best bait and catch rate patterns.',
  },
]

// Keep a missing screenshot from leaving a broken image while local assets are being synced.
const useScreenshotFallback = (event) => {
  event.currentTarget.onerror = null
  event.currentTarget.src = assetPath('fish.png')
}

const privacyPoints = [
  'FishLog is being built with a local-first mindset.',
  'Catch logs should be useful even when cell service is poor.',
  'Account and backup features are optional and not required for core functionality.',
  'The goal is that users stay in control of their fishing history.',
]

const policySections = [
  {
    title: 'Information We Collect',
    paragraphs: [
      'FishLog may collect or store the following types of information:',
    ],
    list: [
      'Account information: If you create an account, FishLog may collect your email address for login, authentication, backup, and account recovery.',
      'Fishing log information: FishLog may store trip details, catch details, dates and times, water body or lake names, fishing notes, species, bait, lure, depth, water temperature, weather-related notes, and other information you choose to enter.',
      'Photos: If you add photos to a catch or trip, FishLog may store those photos as part of your fishing log.',
      'Location-related information: FishLog may store location-related fishing details when you enter them or allow the app to use them, such as the water body, fishing spot, or trip location.',
      'Device and technical information: FishLog may collect limited technical information needed to operate the app, maintain security, troubleshoot issues, and support cloud backup.',
    ],
  },
  {
    title: 'How We Use Information',
    paragraphs: ['FishLog uses information to:'],
    list: [
      "Provide the app's fishing log features.",
      'Save, back up, and restore your fishing data.',
      'Allow you to access your data if you switch devices or reinstall the app.',
      'Improve app reliability, security, and performance.',
      'Provide user support when requested.',
    ],
  },
  {
    title: 'Cloud Backup',
    paragraphs: [
      'FishLog includes optional cloud backup. When you create an account or enable backup features, your FishLog data may be transmitted to and stored using cloud services so your data can be backed up and restored. If you do not use cloud backup, your fishing log data may remain only on your device, depending on the app version and settings.',
    ],
  },
  {
    title: 'Third-Party Services',
    paragraphs: [
      "FishLog may use trusted third-party services to operate the app, including services for authentication, cloud database storage, email login, and app hosting. These services may process information only as needed to provide FishLog's features, security, backup, and account functionality.",
    ],
  },
  {
    title: 'Data Sharing',
    paragraphs: [
      'FishLog does not sell your personal information.',
      'FishLog does not share your personal information with advertisers.',
      'FishLog may share or process information with service providers only as needed to operate the app, including authentication, cloud backup, storage, hosting, security, or support. FishLog may also disclose information if required by law or necessary to protect the rights, safety, or security of users, the app, or others.',
    ],
  },
  {
    title: 'Data Retention',
    paragraphs: [
      'FishLog keeps your data for as long as your account is active or as long as needed to provide the app\'s features. Data stored locally on your device may remain there until you delete it or uninstall the app. Data stored through cloud backup may remain until you delete it, request deletion, or close your account.',
    ],
  },
  {
    title: 'Data Deletion',
    paragraphs: [
      'You may delete fishing log entries inside the app where deletion features are available. You may also request deletion of your account or cloud backup data by contacting us at the email address below.',
    ],
  },
  {
    title: 'Security',
    paragraphs: [
      'FishLog uses reasonable technical and organizational measures to protect user data. However, no method of electronic storage or transmission over the internet is completely secure, and FishLog cannot guarantee absolute security.',
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      'FishLog is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information through FishLog, please contact us so we can take appropriate action.',
    ],
  },
  {
    title: 'User Choices',
    paragraphs: [
      'You can choose what fishing information you enter into FishLog. You can choose whether to create an account and use cloud backup. You can also choose whether to grant optional permissions, such as photo or location permissions, depending on the features you use.',
    ],
  },
  {
    title: 'Changes to This Privacy Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. When we make changes, we will update the effective date on this page. Continued use of FishLog after changes means you accept the updated policy.',
    ],
  },
]

const deletionMailto =
  'mailto:fishlogapp.feedback@gmail.com?subject=FishLog%20Account%20Deletion%20Request'

function usePageTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}

function PrivacyPolicyPage() {
  const year = new Date().getFullYear()

  usePageTitle('Privacy Policy for FishLog')

  return (
    <div className="site-shell policy-shell">
      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="/" aria-label="FishLog home">
            <span className="brand-icon">
              <img src={assetPath('fish.png')} alt="" loading="lazy" />
            </span>
            <span>FishLog</span>
          </a>

          <div className="nav-links">
            <a href="/#features">Features</a>
            <a href="/#screenshots">Screenshots</a>
            <a href="/privacy" aria-current="page">
              Privacy
            </a>
          </div>
        </nav>
      </header>

      <main className="policy-main">
        <article className="section-inner policy-article">
          <p className="eyebrow">Effective date: June 7, 2026</p>
          <h1>Privacy Policy for FishLog</h1>
          <p className="policy-intro">
            FishLog is a fishing trip and catch logging app designed to help
            anglers record fishing trips, catches, notes, photos, and related
            fishing information. This Privacy Policy explains what information
            FishLog collects, how it is used, and how users can control their
            data.
          </p>

          {policySections.map((section) => (
            <section className="policy-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="policy-section contact-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or want to request
              deletion of your account or cloud backup data, contact us at:
            </p>
            <p>
              <a href="mailto:fishlogapp.feedback@gmail.com">
                fishlogapp.feedback@gmail.com
              </a>
            </p>
          </section>
        </article>
      </main>

      <footer className="site-footer">
        <div>
          <strong>FishLog</strong>
          <p>Private fishing logs. Better patterns. Fewer forgotten details.</p>
        </div>
        <div className="footer-links">
          <a href="/#features">Features</a>
          <a href="/#screenshots">Screenshots</a>
          <a href="/privacy" aria-current="page">
            Privacy Policy
          </a>
          <a href="/delete-account">Delete Account</a>
        </div>
        <p className="copyright">&copy; {year} FishLog</p>
      </footer>
    </div>
  )
}

function DeleteAccountPage() {
  const year = new Date().getFullYear()

  usePageTitle('FishLog Account and Data Deletion')

  return (
    <div className="site-shell policy-shell">
      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="/" aria-label="FishLog home">
            <span className="brand-icon">
              <img src={assetPath('fish.png')} alt="" loading="lazy" />
            </span>
            <span>FishLog</span>
          </a>

          <div className="nav-links">
            <a href="/#features">Features</a>
            <a href="/#screenshots">Screenshots</a>
            <a href="/privacy">Privacy</a>
            <a href="/delete-account" aria-current="page">
              Delete Account
            </a>
          </div>
        </nav>
      </header>

      <main className="policy-main">
        <article className="section-inner policy-article">
          <p className="eyebrow">FishLog Tech</p>
          <h1>FishLog Account and Data Deletion</h1>
          <p className="policy-intro">
            FishLog users can request deletion of their account and associated
            cloud backup data at any time.
          </p>

          <section className="policy-section">
            <h2>How to Request Deletion</h2>
            <p>
              To request deletion, email{' '}
              <a href={deletionMailto}>fishlogapp.feedback@gmail.com</a> from
              the email address used for your FishLog account.
            </p>
            <p>
              Use the subject line:{' '}
              <strong>FishLog Account Deletion Request</strong>
            </p>
            <p>
              Please include the email address associated with your FishLog
              account so we can verify and process the request.
            </p>
            <div className="deletion-actions">
              <a className="button primary-button" href={deletionMailto}>
                Request account deletion
              </a>
            </div>
          </section>

          <section className="policy-section">
            <h2>What Gets Deleted</h2>
            <p>
              After your request is verified, FishLog will delete your account
              and associated cloud backup data, including account/profile
              information, saved trips, catches, fishing logs, and related app
              backup data.
            </p>
            <p>
              Some records may be retained only if required for security, fraud
              prevention, legal, or operational reasons.
            </p>
            <p>Deletion requests are typically completed within 30 days.</p>
          </section>

          <section className="policy-section">
            <h2>Local Device Data</h2>
            <p>
              Deleting your cloud account and backup data does not automatically
              delete local-only data stored on your device. To remove local data
              from your device, you can delete the app or clear the app&apos;s
              local storage from your device settings.
            </p>
          </section>
        </article>
      </main>

      <footer className="site-footer">
        <div>
          <strong>FishLog</strong>
          <p>Private fishing logs. Better patterns. Fewer forgotten details.</p>
        </div>
        <div className="footer-links">
          <a href="/#features">Features</a>
          <a href="/#screenshots">Screenshots</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/delete-account" aria-current="page">
            Delete Account
          </a>
        </div>
        <p className="copyright">&copy; {year} FishLog</p>
      </footer>
    </div>
  )
}

function HomePage() {
  const year = new Date().getFullYear()

  usePageTitle('FishLog - Private Fishing Journal for Android')

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="FishLog home">
            <span className="brand-icon">
              <img src={assetPath('fish.png')} alt="" loading="lazy" />
            </span>
            <span>FishLog</span>
          </a>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#screenshots">Screenshots</a>
            <a href="/privacy">Privacy</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="section-inner hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Private fishing journal for Android</p>
              <h1>Turn every catch into better fishing next time.</h1>
              <p className="hero-text">
                FishLog is a private fishing journal for logging catches, trips,
                conditions, bait, depth, photos, and notes - so your history
                becomes useful patterns.
              </p>
              <div className="hero-actions" aria-label="FishLog calls to action">
                <a className="button primary-button" href="#features">
                  View Features
                </a>
                <a className="button secondary-button" href="/privacy">
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="FishLog app preview">
              <div className="phone-frame hero-phone">
                <img
                  src={assetPath('home-screen.png')}
                  alt="FishLog home screen showing a fishing log dashboard"
                />
              </div>
              <div className="hero-chips" aria-label="FishLog highlights">
                {heroChips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" id="features" aria-labelledby="features-title">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Features</p>
              <h2 id="features-title">A clean record of what happened on the water.</h2>
              <p>
                Log the details that affect the bite without turning every trip
                into paperwork.
              </p>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <span className="feature-mark" aria-hidden="true" />
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why section-pad" aria-labelledby="why-title">
          <div className="section-inner why-grid">
            <div>
              <p className="eyebrow">Why FishLog?</p>
              <h2 id="why-title">Focused records for anglers who want useful recall.</h2>
            </div>
            <div className="why-copy">
              <p>
                Most fishing apps try to be everything. FishLog is focused on
                helping you keep a clean, useful record of your own fishing.
              </p>
              <div className="audience-list" aria-label="FishLog audience">
                {audiences.map((audience) => (
                  <span key={audience}>{audience}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="section-pad"
          id="screenshots"
          aria-labelledby="screenshots-title"
        >
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Screenshots</p>
              <h2 id="screenshots-title">Built around the screens anglers need most.</h2>
              <p>
                From a quick catch entry to a complete trip review, each screen
                keeps the details close without getting in the way on the water.
              </p>
            </div>

            <div className="screenshot-grid">
              {screenshots.map((shot, index) => (
                <article
                  className={`screenshot-card ${index < 2 ? 'featured-shot' : ''}`}
                  key={shot.title}
                >
                  <div className="phone-frame screenshot-phone">
                    <img
                      src={shot.image}
                      alt={shot.alt}
                      loading="lazy"
                      onError={useScreenshotFallback}
                    />
                  </div>
                  <div className="screenshot-copy">
                    <h3>{shot.title}</h3>
                    <p>{shot.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="privacy section-pad"
          id="privacy"
          aria-labelledby="privacy-title"
        >
          <div className="section-inner privacy-grid">
            <div>
              <p className="eyebrow">Privacy and control</p>
              <h2 id="privacy-title">Your fishing history should stay useful and yours.</h2>
              <p>
                FishLog does not sell user data or show ads. Optional accounts
                and cloud backup help anglers restore their fishing logs when
                they switch devices or reinstall the app.
              </p>
              <a className="text-link" href="/privacy">
                Read the full Privacy Policy
              </a>
            </div>
            <ul className="check-list">
              {privacyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="closing section-pad" aria-labelledby="closing-title">
          <div className="section-inner closing-panel">
            <h2 id="closing-title">Start building a fishing history you can actually use.</h2>
            <p>
              FishLog is made for anglers who want simple records, better recall,
              and smarter decisions next time they hit the water.
            </p>
            <a className="button primary-button" href="#top">
              Follow the project
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>FishLog</strong>
          <p>Private fishing logs. Better patterns. Fewer forgotten details.</p>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#screenshots">Screenshots</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/delete-account">Delete Account</a>
        </div>
        <p className="copyright">&copy; {year} FishLog</p>
      </footer>
    </div>
  )
}

function App() {
  const redirectPath = new URLSearchParams(window.location.search).get('redirect')

  if (redirectPath?.startsWith('/')) {
    window.history.replaceState(null, '', redirectPath)
  }

  const currentPath = redirectPath?.startsWith('/')
    ? redirectPath
    : window.location.pathname
  const pagePath = currentPath.replace(/\/$/, '') || '/'

  if (pagePath === '/privacy') {
    return <PrivacyPolicyPage />
  }

  if (pagePath === '/delete-account') {
    return <DeleteAccountPage />
  }

  return <HomePage />
}

export default App
