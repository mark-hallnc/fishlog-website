import './App.css'

const features = [
  {
    title: 'Log catches fast',
    text: 'Record species, size, time, and location while the details are still fresh.',
  },
  {
    title: 'Track weather and water conditions',
    text: 'Keep notes on sky, wind, pressure, clarity, and the water you fished.',
  },
  {
    title: 'Save bait, depth, and water temp',
    text: 'Connect every catch to the presentation and conditions that produced it.',
  },
  {
    title: 'Add photos and notes',
    text: 'Capture the proof, the story, and the small clues that matter next time.',
  },
  {
    title: 'Spot patterns over time',
    text: 'Build a personal history that helps you choose better spots and tactics.',
  },
  {
    title: 'Keep your fishing history private',
    text: 'Your trips, waypoints, and productive patterns are yours to keep.',
  },
]

const roadmapItems = [
  'Android launch with fast offline catch logging',
  'Photo attachments and richer trip notes',
  'Optional encrypted backup and device sync',
  'Seasonal pattern summaries and search filters',
]

function App() {
  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="hero-water" aria-hidden="true">
          <span className="ripple ripple-one"></span>
          <span className="ripple ripple-two"></span>
          <span className="shoreline"></span>
        </div>

        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="FishLog home">
            <span className="brand-mark">F</span>
            FishLog
          </a>
          <a className="nav-link" href="mailto:hello@example.com">
            Contact
          </a>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Fishing history that works as hard as you do</p>
            <h1>Log every catch. Learn every pattern.</h1>
            <p className="hero-text">
              FishLog is an Android fishing journal for anglers who want quick
              catch records, useful condition tracking, and a private history of
              what worked on the water.
            </p>
            <div className="hero-actions" aria-label="FishLog actions">
              <a className="button button-primary" href="#mockup">
                Preview the app
              </a>
              <a className="button button-secondary" href="#roadmap">
                View roadmap
              </a>
            </div>
          </div>

          <div className="phone-stage" id="mockup" aria-label="FishLog app mockup">
            <div className="phone">
              <div className="phone-speaker"></div>
              <div className="app-screen">
                <div className="app-header">
                  <span>Today&apos;s Catch</span>
                  <span className="status-dot"></span>
                </div>
                <div className="catch-card">
                  <span className="fish-icon" aria-hidden="true"></span>
                  <div>
                    <strong>Largemouth Bass</strong>
                    <p>7:18 AM · North cove</p>
                  </div>
                </div>
                <div className="metric-grid">
                  <span>Water 68°F</span>
                  <span>Depth 9 ft</span>
                  <span>Bait Jig</span>
                  <span>Wind SW</span>
                </div>
                <div className="notes-panel">
                  <span className="note-line long"></span>
                  <span className="note-line"></span>
                  <span className="note-line short"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section feature-section" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">Built for repeatable results</p>
          <h2 id="features-title">Everything worth remembering from a day on the water.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="card-icon" aria-hidden="true"></span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Why FishLog?</p>
          <h2>For anglers who fish real water in real conditions.</h2>
        </div>
        <div className="reason-list">
          <p>
            Lake and pond anglers can compare seasonal spots, productive banks,
            grass lines, and structure without digging through scattered notes.
          </p>
          <p>
            Kayak and bank fishermen can save the exact conditions around each
            bite, even when a quick phone note is all there is time for.
          </p>
        </div>
      </section>

      <section className="section data-section">
        <div className="data-panel">
          <p className="eyebrow">Your data stays yours</p>
          <h2>Offline-first logging, with optional backup later.</h2>
          <p>
            FishLog is designed so catch logging works even when service is weak
            at the ramp, pond, or back of the creek. Your fishing history starts
            on your device, and future backup options will be optional.
          </p>
        </div>
      </section>

      <section className="section roadmap-section" id="roadmap" aria-labelledby="roadmap-title">
        <div className="section-heading">
          <p className="eyebrow">Roadmap</p>
          <h2 id="roadmap-title">A practical app, growing one useful feature at a time.</h2>
        </div>
        <ol className="roadmap-list">
          {roadmapItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <footer className="site-footer">
        <strong>FishLog</strong>
        <a href="mailto:hello@example.com">hello@example.com</a>
      </footer>
    </main>
  )
}

export default App
