import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import profileImg from '../assets/transparent_profile.png'

const navItems = [
  { id: 'about', label: 'About', num: '01' },
  { id: 'experience', label: 'Experience', num: '02' },
  { id: 'education', label: 'Education', num: '03' },
  { id: 'skills', label: 'Skills', num: '04' },
  { id: 'projects', label: 'Work', num: '05' },
  { id: 'contact', label: 'Contact', num: '06' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/shaheriar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shaheriar/' },
  { label: 'Email', href: 'mailto:shaheriarm@gmail.com' },
]

export const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.pageYOffset - 24
  window.scrollTo({ top, behavior: 'smooth' })
  if (!window.scrollTo) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const Sidebar = () => {
  const nameRef = useRef(null)
  const [imgSize, setImgSize] = useState(null)

  useLayoutEffect(() => {
    const measure = () => {
      if (nameRef.current) {
        setImgSize(nameRef.current.offsetWidth)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (nameRef.current) setImgSize(nameRef.current.offsetWidth)
      })
    }
  }, [])

  return (
    <aside
      className="md:sticky md:top-0 md:self-start md:min-h-screen flex flex-col min-w-0 border-b md:border-b-0 md:border-r"
      style={{
        padding: '56px clamp(20px,3vw,40px)',
        borderColor: 'var(--border-color)',
      }}
    >
      <img
        src={profileImg}
        alt="Shaheriar Malik"
        style={{
          width: imgSize ?? 180,
          height: imgSize ?? 180,
          objectFit: 'cover',
          marginBottom: 20,
          border: '1px solid var(--border-color-strong)',
          background: '#141b18',
        }}
      />
      <h1
        ref={nameRef}
        className="font-mono-brand"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 24,
          fontWeight: 600,
          color: 'var(--text-primary)',
          margin: '0 0 6px',
          lineHeight: 1.2,
          display: 'inline-block',
        }}
      >
        Shaheriar Malik
      </h1>
      <div
        className="font-mono-brand"
        style={{ fontSize: 12.5, color: 'var(--accent)', marginBottom: 20 }}
      >
        Senior Software Engineer
      </div>

      <div
        className="font-mono-brand"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          fontSize: 10.5,
          color: 'var(--text-muted)',
          marginBottom: 40,
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
        BAE SYSTEMS · DENVER, CO
      </div>

      <nav className="flex flex-col gap-0.5 mb-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="font-mono-brand flex items-baseline gap-2.5 bg-transparent border-none cursor-pointer text-left w-full hover:!text-[#eef4f2] transition-colors"
            style={{ fontSize: 12.5, color: 'var(--text-muted)', padding: '9px 0' }}
          >
            <span style={{ color: 'var(--accent)', fontSize: 11 }}>{item.num}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div
        className="flex flex-col gap-0.5"
        style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border-color)' }}
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-brand no-underline hover:!text-[#14b8a6] transition-colors"
            style={{ fontSize: 12, color: 'var(--text-muted)', padding: '6px 0' }}
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
