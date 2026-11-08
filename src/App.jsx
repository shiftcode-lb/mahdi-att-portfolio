import { useEffect, useRef } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Certs from './components/Certs.jsx'
import { Features, About, Experience, Skills, Gallery, Contact, Footer, WhatsAppFab } from './components/Sections.jsx'

export default function App() {
  const bar = useRef(null)

  /* progress bar + about-photo parallax */
  useEffect(() => {
    const par = [...document.querySelectorAll('.split .ph img')]
    let tk = false
    const onScroll = () => {
      tk = false
      bar.current.style.transform = `scaleX(${scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)})`
      par.forEach((im) => {
        const r = im.parentElement.getBoundingClientRect()
        im.style.setProperty('--py', (r.top + r.height / 2 - innerHeight / 2) * -0.07 + 'px')
      })
    }
    const handler = () => {
      if (!tk) {
        tk = true
        requestAnimationFrame(onScroll)
      }
    }
    addEventListener('scroll', handler, { passive: true })
    onScroll()
    return () => removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <div id="bar" ref={bar} aria-hidden="true"></div>
      <Nav />
      <Hero />
      <main id="main">
      <Features />
      <About />
      <Experience />
      <Skills />
      <Gallery />
      <Certs />
      <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
