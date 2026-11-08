import { asset, GALLERY } from '../data.js'
import { Reveal, Stat, Words } from './ui.jsx'

const svgProps = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.6', strokeLinecap: 'round', strokeLinejoin: 'round' }

const FEATURES = [
  ['Espresso', 'Dialing in, calibrating and extracting a balanced shot, every service.', (
    <svg {...svgProps}><path d="M5 10h11v4a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5v-4z" /><path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16" /><path d="M8 4c-1 1.3 1 2.2 0 3.5M12 4c-1 1.3 1 2.2 0 3.5" /></svg>
  )],
  ['Latte Art', 'Hearts, tulips and rosettas poured on silky, microfoam milk.', (
    <svg {...svgProps}><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>
  )],
  ['Milk Texturing', 'Perfect temperature and texture for flat whites, lattes and cappuccinos.', (
    <svg {...svgProps}><path d="M7 4h9l1 3v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7l1-3z" /><path d="M6 8h11" /><path d="M17 10h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2" /></svg>
  )],
  ['Manual Brew', 'V60, Chemex, AeroPress and French Press — clean, expressive cups.', (
    <svg {...svgProps}><path d="M5 4h14l-5 7v5l-4 3v-8L5 4z" /><path d="M12 21v1" /></svg>
  )],
]

export function Features() {
  return (
    <section id="features">
      <div className="wave" aria-hidden="true" style={{ '--wc': 'var(--cream)' }}></div>
      <div className="wrap center">
        <Reveal>
          <span className="eyebrow">What I do best</span>
          <h2><Words text="Signature skills" /></h2>
          <p className="lead">From the first dose to the last pour — the craft behind every cup.</p>
        </Reveal>
        <div className="feat-grid">
          {FEATURES.map(([title, text, icon], i) => (
            <Reveal key={title} className="feat" delay={(i % 4) * 110}>
              <div className="ic">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about">
      <div className="wave" aria-hidden="true" style={{ '--wc': 'var(--sand)' }}></div>
      <div className="split">
        <Reveal className="txt">
          <span className="eyebrow">About me</span>
          <h2><Words text="Why choose Mahdi?" /></h2>
          <p>Senior Barista and Coffee Specialist with experience in specialty coffee preparation, café operations, customer service and team supervision.</p>
          <p>I calibrate espresso, texture milk and pour latte art, and I love guiding guests through beans, flavor notes and brewing options — with consistent quality in fast-paced environments.</p>
          <div className="stats">
            <Stat n={7} s="+" label="Years in cafés" />
            <Stat n={12} label="Certificates" />
            <Stat n={3} label="Cafés served" />
          </div>
          <div className="chips">
            <span className="chip">Arabic · Native</span>
            <span className="chip">English · Fluent</span>
            <span className="chip">Brewing science</span>
            <span className="chip">Hiking</span>
          </div>
        </Reveal>
        <div className="ph">
          <img src={asset('photos/latte-rosetta-red.webp')} alt="Rosetta latte art" width="1200" height="1600" loading="lazy" decoding="async" />
          <div className="badge"><b>Senior Barista</b><span>Kalei Coffee Co. · 2021 – Present</span></div>
        </div>
      </div>
    </section>
  )
}

const JOBS = [
  { when: '2021 – Present', title: 'Senior Barista', where: 'Kalei Coffee Co.', items: [
    'Prepare specialty coffee beverages with consistency, precision and attention to quality.',
    'Calibrate espresso, texture milk and create latte art; guide customers on beans, flavor notes and brewing options.',
    'Monitor stock levels, maintain equipment cleanliness and support new-barista training and workflow efficiency.',
  ] },
  { when: '2019 – 2021', title: 'Barista / Shop Supervisor', where: 'Dunkin’ Donuts', items: [
    'Prepared hot and cold beverages accurately while maintaining freshness and brand standards.',
    'Supervised bar operations during peak hours and managed daily inventory.',
    'Provided customer service, resolved complaints and maintained hygiene standards.',
  ] },
  { when: '2018 – 2019', title: 'Assistant Manager', where: 'Silver Wings', items: [
    'Supported daily café operations, staff coordination and service quality.',
    'Maintained customer relationships and stock levels while helping improve team workflow and training.',
  ] },
  { when: 'Education', title: 'Bachelor’s in Business Management', where: 'Lebanese International University · 2017', items: [] },
]

export function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">My journey</span>
          <h2><Words text="Professional experience" /></h2>
        </Reveal>
        <div className="timeline">
          {JOBS.map((j, i) => (
            <Reveal as="article" key={j.title} className="job" delay={(i % 4) * 110}>
              <span className="when">{j.when}</span>
              <h3>{j.title}</h3>
              <p className="where">{j.where}</p>
              {j.items.length > 0 && (
                <ul>{j.items.map((t) => <li key={t}>{t}</li>)}</ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const Bars = ({ rows }) => rows.map(([label, pct]) => (
  <div className="bar" key={label}>
    <span>{label} <em>{pct}%</em></span>
    <i style={{ '--w': pct + '%' }}></i>
  </div>
))
const Tags = ({ tags }) => <div className="tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>

export function Skills() {
  const cards = [
    ['Coffee & Brewing', <Bars rows={[['Espresso calibration', 95], ['Milk texturing & latte art', 92], ['Manual brewing', 90], ['Flavor profiling', 88]]} />],
    ['Brew Methods', <Tags tags={['Espresso', 'V60', 'Chemex', 'AeroPress', 'French Press', 'Coffee origins']} />],
    ['Operations & Service', <Bars rows={[['Customer service', 96], ['Inventory management', 90], ['Team training', 88], ['POS & cash handling', 92]]} />],
    ['Standards', <Tags tags={['Quality control', 'Hygiene standards', 'Equipment maintenance', 'Working under pressure', 'Team supervision']} />],
  ]
  return (
    <section id="skills">
      <div className="wave" aria-hidden="true" style={{ '--wc': 'var(--cream)' }}></div>
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">What I bring</span>
          <h2><Words text="Skills & competencies" /></h2>
        </Reveal>
        <div className="skill-grid">
          {cards.map(([title, body], i) => (
            <Reveal key={title} className="skill" delay={(i % 4) * 110}>
              <h3>{title}</h3>
              {body}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Gallery() {
  return (
    <section id="gallery">
      <div className="wave" aria-hidden="true" style={{ '--wc': 'var(--sand)' }}></div>
      <div className="wrap">
        <Reveal className="center">
          <span className="eyebrow">Drawn on a cup</span>
          <h2><Words text="Latte art & styling" /></h2>
          <p className="lead" style={{ color: 'var(--cream)' }}>Hearts, feathers and rosettas — every drink is a small canvas.</p>
        </Reveal>
        <div className="gal">
          {GALLERY.map(([file, alt, caption], i) => (
            <Reveal as="figure" key={file} delay={(i % 4) * 110}>
              <img src={asset(`photos/${file}.webp`)} width="600" height="800" decoding="async" alt={alt} loading="lazy" />
              <figcaption>{caption}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact">
      <div className="wave" aria-hidden="true" style={{ '--wc': 'var(--roast)' }}></div>
      <div className="wrap">
        <Reveal className="cta-card">
          <span className="eyebrow">Let’s brew something great</span>
          <h2><Words text="Contact me" /></h2>
          <p className="lead">Have a question or want to talk coffee? Reach out by email or WhatsApp.</p>
          <div className="contact-cards">
            <a className="cc" href="mailto:mahdi.atallah12@gmail.com"><small>Email</small>mahdi.atallah12@gmail.com</a>
            <a className="cc" href="https://wa.me/96176853642" target="_blank" rel="noopener"><small>WhatsApp</small>+961 76 853 642</a>
            <div className="cc"><small>Location</small>Beirut, Lebanon</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="wave" aria-hidden="true" style={{ '--wc': 'var(--sand)' }}></div>
      <div className="wrap">
        <p>© <span id="yr">{new Date().getFullYear()}</span> Mahdi Atallah · Made with ☕ and a little foam</p>
        <p>Website designed &amp; developed by <b>Shift Code</b></p>
      </div>
    </footer>
  )
}

export function WhatsAppFab() {
  return (
    <a
      className="wa-fab"
      href="https://wa.me/96176853642?text=Hi%20Mahdi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Mahdi on WhatsApp (opens in a new tab)"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
        <path d="M16.04 3C9.4 3 4 8.38 4 15.01c0 2.12.55 4.19 1.6 6.01L4 29l8.17-1.57a12.02 12.02 0 0 0 3.87.64C22.68 28.07 28 22.69 28 16.06 28 9.4 22.68 3 16.04 3zm0 22.04c-1.2 0-2.38-.24-3.48-.7l-.5-.21-4.85.93.96-4.7-.23-.52a9.96 9.96 0 0 1-1.5-5.36c0-5.52 4.5-10 10.04-10 5.53 0 10.04 4.48 10.04 10 0 5.53-4.5 10.56-10.5 10.56zm5.5-7.5c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.25-.58-.5-.5-.68-.5h-.58c-.2 0-.53.07-.8.38-.28.3-1.06 1.04-1.06 2.53s1.08 2.94 1.23 3.14c.15.2 2.13 3.25 5.15 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35z" />
      </svg>
    </a>
  )
}
