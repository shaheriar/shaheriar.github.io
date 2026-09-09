import React from 'react'

const projects = [
  {
    index: '01',
    title: 'Meal Planning WebApp',
    description: 'Subscription-based meal planning SaaS built with React and FastAPI, deployed on AWS EC2 with MongoDB. Implemented optimizations to support 50+ concurrent users in production, with REST APIs managing user preferences, recipes, and dynamically generated weekly meal plans. Premium feature gating via Stripe webhooks, AWS Cognito, and Google OAuth.',
    techLine: 'React · FastAPI · MongoDB · AWS · Google Cloud · Stripe · Aug 2025 – Present',
  },
  {
    index: '02',
    title: 'Rental Marketplace WebApp',
    description: 'Founded a peer-to-peer rental marketplace web app using React and Flask, deployed on AWS with MongoDB. Built backend APIs for listings, availability, bookings, and renter-owner workflows, with real-time chat via WebSockets.',
    techLine: 'React · Flask · AWS · MongoDB · Stripe · WebSockets · Jan 2024 – Present',
  },
  {
    index: '03',
    title: 'AI RAG Content Generator',
    description: 'ReactJS + Flask + LangChain webapp to generate contextual LinkedIn posts using RAG and embeddings, with a scalable pipeline to reuse company knowledge in content generation. Integrated Pexels API for images, storing content in MongoDB and AWS S3.',
    techLine: 'React · Flask · LangChain · OpenAI · MongoDB · AWS · Jun 2025 – Present',
  },
  {
    index: '04',
    title: 'Enhancing Image Captioning with Deep Learning Models',
    description: 'Collaborated with a team of 2 to develop a deep learning model combining an encoder (Wide ResNet50) with a decoder LSTM and an attention layer to accomplish image captioning.',
    techLine: 'Python · PyTorch · Deep Learning · Computer Vision · LSTM · Attention Mechanism',
    github: 'https://github.com/shaheriar/CS-228-Deep-Learning-Project',
  },
  {
    index: '05',
    title: 'Motion Planning & Trajectory Generation with Turtlebot3',
    description: 'Software in ROS to plan a path for the Turtlebot3 using the A* algorithm to avoid obstacles and hit a ball into the goal, and generate a trajectory using a PID controller to follow the path.',
    techLine: 'ROS · C++ · Python · Robotics · A* Algorithm · PID Controller',
    github: 'https://github.com/shaheriar/Motion-Planning-Trajectory-Generation-with-Turtlebot3',
  },
  {
    index: '06',
    title: 'Smart Chessboard',
    description: 'Led a team of 4 and designed the Flutter front-end and Python AI for a chessboard designed to enhance the playing experience using 192 onboard LEDs and a touch screen.',
    techLine: 'Flutter · Python · AI · Hardware Integration · LED Control · Touch Interface',
    github: 'https://github.com/shaheriar/Senior-Design-Project-UCR',
  },
]

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '56px clamp(24px,6vw,80px) 0' }}>
      <p className="font-mono-brand" style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '0 0 20px' }}>
        05 · selected work
      </p>
      <div>
        {projects.map((project) => (
          <div key={project.index} className="grid gap-6" style={{ gridTemplateColumns: '56px 1fr', padding: '22px 0', borderTop: '1px solid var(--border-color)' }}>
            <span className="font-mono-brand" style={{ fontSize: 13, color: 'var(--text-muted)', paddingTop: 4 }}>
              {project.index}
            </span>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 10px' }}>
                {project.title}
              </h3>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14.5, lineHeight: 1.75, color: 'var(--text-secondary)', margin: '0 0 14px', maxWidth: '70ch' }}>
                {project.description}
              </p>
              <p className="font-mono-brand" style={{ fontSize: 11.5, color: 'var(--text-muted)', margin: '0 0 14px' }}>
                {project.techLine}
              </p>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-brand no-underline border-b border-transparent hover:!border-b-[#14b8a6]"
                  style={{ fontSize: 12, color: 'var(--accent)' }}
                >
                  Code ↗
                </a>
              ) : (
                <span className="font-mono-brand" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                  Private codebase
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center" style={{ marginTop: 56 }}>
        <p className="font-mono-brand" style={{ fontSize: 13, color: 'var(--text-secondary)', margin: '0 0 16px' }}>
          Interested in seeing more of my work?
        </p>
        <a
          href="https://github.com/shaheriar"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-brand inline-block no-underline hover:!border-white/40"
          style={{ fontSize: 13, padding: '12px 22px', border: '1px solid var(--border-color-strong)', borderRadius: 8, color: 'var(--text-primary)' }}
        >
          VISIT MY GITHUB →
        </a>
      </div>
    </section>
  )
}

export default Projects
