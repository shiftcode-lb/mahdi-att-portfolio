import { Fragment, useEffect, useRef, useState } from 'react'

/* Scroll-reveal wrapper: adds .rv, then .in once visible (optionally staggered). */
export function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  const [d, setD] = useState(delay)

  useEffect(() => {
    const el = ref.current
    let t
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          t = setTimeout(() => setD(0), 1600)
          io.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      clearTimeout(t)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${className} rv${shown ? ' in' : ''}`.trim()}
      style={d ? { ...style, transitionDelay: d + 'ms' } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* Heading text split into masked words */
export function Words({ text }) {
  const words = text.split(' ')
  return words.map((w, i) => (
    <Fragment key={i}>
      <span className="w">
        <span style={{ '--i': i }}>{w}</span>
      </span>
      {i < words.length - 1 ? ' ' : null}
    </Fragment>
  ))
}

/* Count-up number */
export function Stat({ n, s = '', label }) {
  const ref = useRef(null)
  const [v, setV] = useState(0)

  useEffect(() => {
    let timer
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        let k = 0
        timer = setInterval(() => {
          k++
          setV(k)
          if (k >= n) clearInterval(timer)
        }, 1100 / n)
      },
      { threshold: 0.12 }
    )
    io.observe(ref.current)
    return () => {
      io.disconnect()
      clearInterval(timer)
    }
  }, [n])

  return (
    <div>
      <b ref={ref}>{v === 0 ? '0' : v + s}</b>
      <span>{label}</span>
    </div>
  )
}
