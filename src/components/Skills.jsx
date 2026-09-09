import React from 'react'

const skills = [
  { category: 'Mobile & Cross-Platform', line: 'Flutter · React Native · Dart' },
  { category: 'Web Development', line: 'React · NextJS · Flask · Node.js · Express · REST APIs · HTML · CSS' },
  { category: 'Programming Languages', line: 'Python · JavaScript · Ruby · TypeScript · C++ · C · Java · MATLAB · Bash' },
  { category: 'AI/ML Frameworks', line: 'PyTorch · TensorFlow · OpenAI · LangChain · RAG · Scikit-Learn · OpenCV · Keras · Hugging Face' },
  { category: 'Cloud & Databases', line: 'AWS · MongoDB · PostgreSQL · Redis · Docker · Kubernetes' },
  { category: 'Development Tools', line: 'Git · GitHub · Docker · SonarQube · Jest · Cypress · Postman' },
]

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '56px clamp(24px,6vw,80px) 0' }}>
      <p className="font-mono-brand" style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '0 0 20px' }}>
        04 · skills
      </p>

      <div>
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="grid gap-6 items-baseline"
            style={{
              gridTemplateColumns: 'minmax(180px,240px) 1fr',
              padding: '16px 0',
              borderTop: '1px solid var(--border-color)',
            }}
          >
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
              {skill.category}
            </h3>
            <p className="font-mono-brand" style={{ fontSize: 13, lineHeight: 1.9, color: 'var(--text-secondary)', margin: 0 }}>
              {skill.line}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
