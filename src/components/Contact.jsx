import React from 'react'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/shaheriar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shaheriar/' },
  { label: 'Email', href: 'mailto:shaheriarm@gmail.com' },
]

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '56px clamp(24px,6vw,80px) 72px' }}>
      <p className="font-mono-brand" style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '0 0 24px' }}>
        06 · contact
      </p>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 28px' }}>
        Let's connect.
      </h2>
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '56ch', margin: '0 0 32px' }}>
        I'm always interested in new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hi — feel free to reach out.
      </p>
      <a
        href="mailto:shaheriarm@gmail.com"
        className="inline-block no-underline"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(20px,2.6vw,28px)',
          fontWeight: 600,
          color: 'var(--accent)',
          borderBottom: '2px solid var(--accent)',
          marginBottom: 32,
        }}
      >
        shaheriarm@gmail.com
      </a>
      <div className="flex gap-6 flex-wrap">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-brand no-underline hover:!text-[#14b8a6]"
            style={{ fontSize: 13, color: 'var(--text-secondary)' }}
          >
            {link.label} ↗
          </a>
        ))}
      </div>
      <p className="font-mono-brand" style={{ fontSize: 11.5, color: 'var(--text-faint)', margin: '64px 0 0' }}>
        © {new Date().getFullYear()} Shaheriar Malik
      </p>
    </section>
  )
}

export default Contact
