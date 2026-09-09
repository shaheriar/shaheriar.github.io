import React from 'react'

const experiences = [
  {
    company: 'BAE Systems, Inc.',
    position: 'Senior Software Engineer',
    location: 'Westminster, CO',
    duration: 'Jun 2026 – Present',
    achievements: [
      'Leading development of the SATCOM web app using ReactJS, Python FastAPI REST API & WebSockets',
      'Delivered the end-to-end full stack for the internal hardware reservation system with ReactJS, FastAPI, & SQLite',
      'Authored test reports, ICDs, and other technical documentation to present software proposals to stakeholders',
      'Mentored and trained new engineers, ramping them up on best coding practices and testing methodologies',
    ],
  },
  {
    company: 'BAE Systems, Inc.',
    position: 'Software Engineer II',
    location: 'Westminster, CO',
    duration: 'Nov 2023 – Jun 2026',
    achievements: [
      'Designed machine learning clustering algorithms on a LADAR system with a custom multithreaded DBSCAN in C++, improving throughput by 90% via parallelization across CPU cores',
      'Built microservices with pub/sub architecture using Python, C++, Ruby, and MQTT on Embedded Linux',
      'Utilized Google Test & GitLab CI/CD for unit tests and COSMOS/OpenC3 for integration testing',
    ],
  },
  {
    company: 'UC Riverside',
    position: 'Graduate Teaching Assistant',
    location: 'Riverside, CA',
    duration: 'Jan 2023 – Jun 2023',
    achievements: [
      'Instructed a class of 100+ undergraduate students, focused on fundamentals of programming in C++',
      'Assessed assignments and projects, maintaining a 95%+ student satisfaction rating in evaluations',
      'Hosted weekly office hours and provided 1-on-1 mentorship, improving student project quality and pass rates',
    ],
  },
  {
    company: 'MindTApp',
    position: 'Software Engineer Intern',
    location: 'Riverside, CA',
    duration: 'Aug 2020 – Oct 2020',
    achievements: [
      'Built and deployed cross-platform mobile applications using Flutter SDK, releasing to both iOS and Android',
      'Integrated Firebase NoSQL database for real-time data storage, synchronization, and user authentication',
      'Collaborated in an Agile 4-person team to design, develop, and launch a production-ready application',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '56px clamp(24px,6vw,80px) 0' }}>
      <p className="font-mono-brand" style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '0 0 20px' }}>
        02 · experience
      </p>
      {experiences.map((exp) => (
        <div key={`${exp.company}-${exp.position}`} style={{ padding: '22px 0', borderTop: '1px solid var(--border-color)' }}>
          <div className="flex justify-between items-baseline flex-wrap gap-2" style={{ marginBottom: 6 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
              {exp.position} <span style={{ color: 'var(--accent)' }}>· {exp.company}</span>
            </h3>
            <span className="font-mono-brand" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
              {exp.duration}
            </span>
          </div>
          <div className="font-mono-brand" style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>
            {exp.location}
          </div>
          <div className="flex flex-col gap-2.5">
            {exp.achievements.map((ach, i) => (
              <div key={i} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14.5, lineHeight: 1.7, color: 'var(--text-secondary)', display: 'flex', gap: 10 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>—</span>
                <span>{ach}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experience
