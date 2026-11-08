import { useEffect, useState } from 'react'

const LINKS = [
  ['hero', 'Home'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['gallery', 'Latte Art'],
  ['certs', 'Certificates'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    document.querySelectorAll('header[id],section[id]').forEach((x) => io.observe(x))
    return () => io.disconnect()
  }, [])

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap">
        <a href="#hero" className="logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z" />
            <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" />
            <path d="M7 3c-1 1.2 1 2 0 3.2M11 3c-1 1.2 1 2 0 3.2" />
          </svg>
          Mahdi Atallah
        </a>
        <button className="burger" id="burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>☰</button>
        <ul id="menu" className={open ? 'open' : ''} onClick={() => setOpen(false)}>
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'act' : ''}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className={`nav-cta${active === 'contact' ? ' act' : ''}`}>Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
