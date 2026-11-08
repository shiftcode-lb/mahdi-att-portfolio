import { useEffect, useRef, useState } from 'react'
import { ROLES, asset } from '../data.js'

function useTyped() {
  const [text, setText] = useState('')
  useEffect(() => {
    let ri = 0, ci = 0, del = false, t
    const tick = () => {
      const w = ROLES[ri]
      setText(w.slice(0, ci))
      if (!del && ci === w.length) {
        del = true
        t = setTimeout(tick, 1400)
        return
      }
      if (del && ci === 0) {
        del = false
        ri = (ri + 1) % ROLES.length
      }
      ci += del ? -1 : 1
      t = setTimeout(tick, del ? 45 : 85)
    }
    tick()
    return () => clearTimeout(t)
  }, [])
  return text
}

export default function Hero() {
  const typed = useTyped()
  const vid = useRef(null)

  /* real hero video: poster shows instantly, then we make sure it plays (React doesn't always set `muted` before autoplay) */
  useEffect(() => {
    const v = vid.current
    if (!v) return
    v.muted = true
    const tryPlay = () => v.play().catch(() => {})
    tryPlay()
    v.addEventListener('canplay', tryPlay)
    document.addEventListener('visibilitychange', tryPlay)
    return () => {
      v.removeEventListener('canplay', tryPlay)
      document.removeEventListener('visibilitychange', tryPlay)
    }
  }, [])

  return (
    <header id="hero">
      <span className="bgword" aria-hidden="true">Coffee</span>
      <div className="wrap hero-grid">
        <div className="hero-text">
          <span className="eyebrow">Specialty barista · Beirut, Lebanon</span>
          <h1>Made to <em>pour you.</em></h1>
          <p className="typed"><b id="typed">{typed}</b></p>
          <p className="sub">I’m Mahdi Atallah — a specialty barista who treats every espresso, every milk texture and every heart on the cup with precision.</p>
          <div className="btns">
            <a href="#certs" className="btn primary">View Certificates →</a>
            <a href="#contact" className="btn ghost">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="arch">
            <video ref={vid} className="hero-vid" id="heroVid" poster={asset('hero-poster.webp')} muted loop playsInline autoPlay preload="auto" width="540" height="960" aria-label="Barista pouring milk into espresso to make latte art" role="img">
              <source src={asset('hero.mp4')} type="video/mp4" />
            </video>
            <svg className="pour" viewBox="0 0 300 460" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <clipPath id="gc"><path d="M80 150 L99 400 Q100 411 112 411 L188 411 Q200 411 201 400 L220 150 Z" /></clipPath>
                <linearGradient id="cof" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7a4424" /><stop offset="1" stopColor="#2a140a" /></linearGradient>
                <linearGradient id="gl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fff" stopOpacity=".38" /><stop offset=".25" stopColor="#fff" stopOpacity=".05" /><stop offset=".8" stopColor="#fff" stopOpacity=".08" /><stop offset="1" stopColor="#fff" stopOpacity=".3" /></linearGradient>
                <filter id="marble" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency=".014 .026" numOctaves="2" seed="7" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="52" /><feGaussianBlur stdDeviation="6" /></filter>
                <filter id="soft"><feGaussianBlur stdDeviation="5" /></filter>
              </defs>
              <ellipse cx="150" cy="424" rx="82" ry="10" fill="rgba(0,0,0,.35)" filter="url(#soft)" />
              <g className="cycle">
                <g clipPath="url(#gc)">
                  <rect className="coffee" x="60" y="188" width="180" height="240" fill="url(#cof)" />
                  <g className="milk" filter="url(#marble)" fill="#ecd5b6">
                    <ellipse cx="135" cy="218" rx="42" ry="15" />
                    <ellipse cx="176" cy="256" rx="32" ry="22" />
                    <ellipse cx="146" cy="305" rx="36" ry="28" />
                    <ellipse cx="128" cy="352" rx="24" ry="28" />
                  </g>
                  <g className="ice" style={{ '--r': '-142px', animationDelay: '.1s' }}><rect x="106" y="358" width="40" height="40" rx="9" transform="rotate(-12 126 378)" fill="rgba(255,255,255,.28)" stroke="rgba(255,255,255,.75)" strokeWidth="1.6" /></g>
                  <g className="ice" style={{ '--r': '-150px', animationDelay: '.3s' }}><rect x="146" y="352" width="42" height="42" rx="9" transform="rotate(9 167 373)" fill="rgba(255,255,255,.26)" stroke="rgba(255,255,255,.75)" strokeWidth="1.6" /></g>
                  <g className="ice" style={{ '--r': '-122px', animationDelay: '.5s' }}><rect x="122" y="316" width="38" height="38" rx="9" transform="rotate(4 141 335)" fill="rgba(255,255,255,.3)" stroke="rgba(255,255,255,.8)" strokeWidth="1.6" /></g>
                </g>
                <path d="M80 150 L99 400 Q100 411 112 411 L188 411 Q200 411 201 400 L220 150 Z" fill="url(#gl)" stroke="rgba(255,250,242,.85)" strokeWidth="2.2" strokeLinejoin="round" />
                <path d="M90 170 L104 380" stroke="rgba(255,255,255,.55)" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path className="s s-cof" d="M150 -10 V396" />
                <path className="s s-milk" d="M160 -10 C160 90 142 190 148 330" />
              </g>
            </svg>
          </div>
          <div className="mini"><img src={asset('photos/latte-heart-cup-sm.webp')} alt="Heart latte art in a paper cup" width="600" height="800" decoding="async" fetchpriority="high" /></div>
        </div>
      </div>
      <div className="scroll-hint"></div>
    </header>
  )
}
