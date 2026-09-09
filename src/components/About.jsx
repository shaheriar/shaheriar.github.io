import React from 'react'

const About = () => {
  return (
    <section id="about" style={{ padding: '56px clamp(24px,6vw,80px) 0' }}>
      <p className="font-mono-brand" style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '0 0 20px', letterSpacing: '0.02em' }}>
        01 · about
      </p>
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 16,
          lineHeight: 1.75,
          color: 'var(--text-secondary)',
          maxWidth: '58ch',
          margin: '0 0 20px',
        }}
      >
        A creative and driven software engineer with an M.S. in Computer Engineering and a strong background in Deep Learning, Data Science, and full-stack software development — currently leading web app development at BAE Systems.
      </p>
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 16,
          lineHeight: 1.75,
          color: 'var(--text-secondary)',
          maxWidth: '58ch',
          margin: 0,
        }}
      >
        Eager to work in a healthy team-based environment that is equally passionate and excited about building and creating new ways for people to connect with technology, and each other.
      </p>
    </section>
  )
}

export default About
