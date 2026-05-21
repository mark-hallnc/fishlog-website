import './App.css'

const baseUrl = import.meta.env.BASE_URL
const assetPath = (fileName) => `${baseUrl}screenshots/${fileName}`

const heroStats = ['Water temp', 'Depth', 'Bait', 'Trip notes']

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
    copy: 'Designed for real fishing days where service can be unreliable.',
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
    title: 'Home dashboard',
    image: assetPath('home-screen.png'),
    alt: 'FishLog home dashboard screenshot on a phone',
    isPlaceholder: false,
  },
  // Replace these placeholder images with real app screenshots as screens are finalized.
  {
    title: 'Active trip',
    image: assetPath('fish.png'),
    alt: 'Placeholder FishLog active trip screenshot',
    isPlaceholder: true,
  },
  {
    title: 'Log a catch',
    image: assetPath('fish.png'),
    alt: 'Placeholder FishLog log a catch screenshot',
    isPlaceholder: true,
  },
  {
    title: 'Catch history',
    image: assetPath('fish.png'),
    alt: 'Placeholder FishLog catch history screenshot',
    isPlaceholder: true,
  },
  {
    title: 'Insights',
    image: assetPath('fish.png'),
    alt: 'Placeholder FishLog insights screenshot',
    isPlaceholder: true,
  },
]

const privacyPoints = [
  'FishLog is being built with a local-first mindset.',
  'Catch logs should be useful even when cell service is poor.',
  'Account and backup features are planned to be optional.',
  'The goal is that users stay in control of their fishing history.',
]

const roadmapItems = [
  { title: 'Offline catch and trip logging', status: 'In progress' },
  { title: 'Photo attachments', status: 'In progress' },
  {
    title: 'Forecast shown during active trips when internet is available',
    status: 'Planned',
  },
  { title: 'Export/backup options', status: 'Planned' },
  { title: 'Pattern insights from catch history', status: 'Planned' },
  { title: 'Optional account/cloud backup', status: 'Planned' },
]

function App() {
  const year = new Date().getFullYear()

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
            <a href="#privacy">Privacy</a>
            <a href="#roadmap">Roadmap</a>
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
                <a className="button secondary-button" href="#roadmap">
                  See Roadmap
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
              <div className="stat-cloud" aria-hidden="true">
                {heroStats.map((stat) => (
                  <span key={stat}>{stat}</span>
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
            </div>

            <div className="screenshot-grid">
              {screenshots.map((shot) => (
                <article
                  className={`screenshot-card ${shot.isPlaceholder ? '' : 'featured-shot'}`}
                  key={shot.title}
                >
                  <div className="phone-frame screenshot-phone">
                    <img src={shot.image} alt={shot.alt} loading="lazy" />
                  </div>
                  <div>
                    <h3>{shot.title}</h3>
                    {shot.isPlaceholder && <p>Placeholder screenshot</p>}
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
                FishLog is being shaped around practical days outside, where a
                weak signal should not make your notes disappear or your trip
                harder to remember.
              </p>
            </div>
            <ul className="check-list">
              {privacyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-pad" id="roadmap" aria-labelledby="roadmap-title">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Roadmap</p>
              <h2 id="roadmap-title">Practical improvements, marked honestly.</h2>
            </div>
            <div className="roadmap-grid">
              {roadmapItems.map((item) => (
                <article className="roadmap-card" key={item.title}>
                  <span>{item.status}</span>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
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
          <a href="#privacy">Privacy</a>
          <a href="#roadmap">Roadmap</a>
        </div>
        <p className="copyright">&copy; {year} FishLog</p>
      </footer>
    </div>
  )
}

export default App
