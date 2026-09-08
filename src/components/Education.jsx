import React from 'react'

const education = [
  { institution: 'University of California, Riverside', degree: 'Master of Science in Computer Engineering', duration: 'Sep 2022 – Jun 2023' },
  { institution: 'University of California, Riverside', degree: 'Bachelor of Science in Computer Engineering', duration: 'Sep 2019 – Mar 2022' },
]

const Education = () => {
  return (
    <section id="education" style={{ padding: '56px clamp(24px,6vw,80px) 0' }}>
      <p className="font-mono-brand" style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '0 0 20px' }}>
        03 · education
      </p>
      {education.map((edu, i) => (
        <div key={i} style={{ padding: '22px 0', borderTop: '1px solid var(--border-color)' }}>
          <div className="flex justify-between items-baseline flex-wrap gap-2" style={{ marginBottom: 6 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
              {edu.institution}
            </h3>
            <span className="font-mono-brand" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
              {edu.duration}
            </span>
          </div>
          <div className="font-mono-brand" style={{ fontSize: 12, color: 'var(--accent)' }}>
            {edu.degree}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Education
