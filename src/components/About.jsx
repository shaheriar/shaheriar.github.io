import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { staggerContainer, staggerItem, hoverScale } from '../config/animations'
import SkillsMagicBento from './SkillsMagicBento'

const About = () => {
  const skills = [
    {
      category: "Mobile & Cross-Platform",
      items: ["Flutter", "React Native", "Dart"]
    },
    {
      category: "Web Development",
      items: ["React", "NextJS", "Flask", "Node.js", "Express", "REST APIs"]
    },
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "TypeScript", "C++", "C", "Java", "MATLAB", "Bash", "HTML", "CSS"]
    },
    {
      category: "AI/ML Frameworks",
      items: ["PyTorch", "TensorFlow", "OpenAI", "Langchain", "RAG", "Scikit-Learn", "OpenCV", "Keras", "Hugging Face"]
    },
    {
      category: "Cloud & Databases",
      items: ["AWS", "MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes"]
    },
    {
      category: "Development Tools",
      items: ["Git", "GitHub", "Docker", "SonarQube", "Jest", "Cypress", "Postman"]
    }
  ]

  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'var(--background-dark)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Section Title */}
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: 'var(--text-primary)' }}
          >
            About Me
          </motion.h2>

          {/* About Content - Top Section */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <motion.p
              variants={staggerItem}
              className="text-xl leading-relaxed max-w-4xl mx-auto mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              I am a creative and driven Software Engineer with an M.S. in Computer Engineering, 
              a strong background in Deep Learning, Data Science, and Full-Stack Software Development, 
              but also like to spend time making art and music.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ color: 'var(--text-muted)' }}
            >
              Eager to work in a healthy team-based environment that is equally as passionate 
              and excited about building and creating new ways for people to connect with technology, 
              and each other.
            </motion.p>
          </motion.div>

          {/* Skills MagicBento - Full Width */}
          <motion.div
            variants={staggerItem}
            className="w-full"
          >
            <SkillsMagicBento 
              skills={skills}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              clickEffect={true}
              enableMagnetism={true}
              glowColor="132, 0, 255"
              particleCount={6}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
