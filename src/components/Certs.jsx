import { useCallback, useEffect, useRef, useState } from 'react'
import { CERTS, FILTERS, asset } from '../data.js'
import { Reveal, Words } from './ui.jsx'

const preload = (slug) => {
  const im = new Image()
  im.src = asset(`certs/${slug}.webp`)
}

export default function Certs() {
  const [filter, setFilter] = useState('all')
  const [lb, setLb] = useState(null) // index of open certificate, or null
  const [count, setCount] = useState('1 / 12')
  const grid = useRef(null)

  const visible = CERTS.map((c, i) => i).filter((i) => filter === 'all' || CERTS[i].f === filter)

  /* ---- lightbox ---- */
  const step = useCallback(
    (d) => setLb((cur) => visible[(visible.indexOf(cur) + d + visible.length) % visible.length]),
    [filter] // eslint-disable-line react-hooks/exhaustive-deps
  )
  useEffect(() => {
    document.body.style.overflow = lb === null ? '' : 'hidden'
    if (lb === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLb(null)
      if (e.key === 'ArrowLeft') step(-1)
      if (e.key === 'ArrowRight') step(1)
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [lb, step])

  /* ---- mobile slider counter ---- */
  const update = useCallback(() => {
    const g = grid.current
    const v = [...g.querySelectorAll('.cert:not(.hide)')]
    if (!v.length) return
    const mid = g.scrollLeft + g.clientWidth / 2
    let k = 0, best = 1e9
    v.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid)
      if (d < best) { best = d; k = i }
    })
    setCount(k + 1 + ' / ' + v.length)
  }, [])
  const go = (d) => {
    const c = grid.current.querySelector('.cert:not(.hide)')
    if (c) grid.current.scrollBy({ left: d * (c.offsetWidth + 14), behavior: 'smooth' })
  }
  useEffect(() => {
    const g = grid.current
    const onScroll = () => requestAnimationFrame(update)
    g.addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', update)
    update()
    return () => {
      g.removeEventListener('scroll', onScroll)
      removeEventListener('resize', update)
    }
  }, [update])
  useEffect(() => {
    grid.current.scrollLeft = 0
    requestAnimationFrame(update)
  }, [filter, update])

  const c = lb === null ? null : CERTS[lb]

  return (
    <>
      <section id="certs">
        <div className="wave" style={{ '--wc': 'var(--terra)' }}></div>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Learning never stops</span>
            <h2><Words text="Certificates & training" /></h2>
            <p className="lead">12 certifications from Barista Hustle, The Coffee Sensorium and the Coffee Knowledge Hub — click any certificate to view it full size or open the PDF.</p>
          </Reveal>
          <Reveal className="filters" id="filters">
            {FILTERS.map(([key, label]) => (
              <button key={key} className={filter === key ? 'on' : ''} onClick={() => setFilter(key)}>{label}</button>
            ))}
          </Reveal>
          <div className="cert-grid" id="certGrid" ref={grid}>
            {CERTS.map((x, i) => (
              <Reveal
                as="article"
                key={x.s}
                className={`cert${filter !== 'all' && x.f !== filter ? ' hide' : ''}`}
                delay={(i % 4) * 110}
                onClick={() => setLb(i)}
                onMouseEnter={() => preload(x.s)}
                onFocus={() => preload(x.s)}
                role="button"
                tabIndex={x.f !== filter && filter !== 'all' ? -1 : 0}
                aria-label={`View ${x.t} certificate full size`}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setLb(i))}
              >
                <div className="img">
                  <img loading={i < 6 ? 'eager' : 'lazy'} fetchpriority={i < 3 ? 'high' : undefined} decoding="async" width="640" height="453" src={asset(`certs/${x.s}-sm.webp`)} alt={`${x.t} certificate`} />
                  <div className="zoom">View certificate</div>
                </div>
                <div className="info">
                  <small>{x.n}</small>
                  <h3>{x.t}</h3>
                  <p>{x.i} · {x.d}</p>
                  <p className="desc">{x.x}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="cert-nav" aria-label="Certificate slider">
            <button id="cPrev" aria-label="Previous certificate" onClick={() => go(-1)}>‹</button>
            <span id="cCount">{count}</span>
            <button id="cNext" aria-label="Next certificate" onClick={() => go(1)}>›</button>
          </div>
        </div>
      </section>

      <div className={`lb${c ? ' open' : ''}`} id="lb" role="dialog" aria-modal="true" aria-label="Certificate viewer" aria-hidden={!c} onClick={(e) => e.target === e.currentTarget && setLb(null)}>
        <button className="x" id="lbx" aria-label="Close" onClick={() => setLb(null)}>✕</button>
        <button className="nv prev" id="lbp" aria-label="Previous" onClick={() => step(-1)}>‹</button>
        <button className="nv next" id="lbn" aria-label="Next" onClick={() => step(1)}>›</button>
        <figure>
          <img id="lbi" decoding="async" src={c ? asset(`certs/${c.s}.webp`) : undefined} alt={c ? c.t : ''} />
          <figcaption>
            <span id="lbc">
              {c && (
                <>
                  <b>{c.t}</b> — {c.i}, {c.d}
                  <br />
                  <span style={{ opacity: 0.8, fontSize: '.92rem' }}>{c.x}</span>
                </>
              )}
            </span>
            <a id="lbl" href={c ? asset(`certs/${c.s}.pdf`) : undefined} target="_blank" rel="noopener">Open PDF ↗</a>
          </figcaption>
        </figure>
      </div>
    </>
  )
}
