import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { staggerContainer, staggerItem, hoverScale } from '../config/animations'
import ProfileCard from './ProfileCard'
import SkillsMagicBento from './SkillsMagicBento'
import profileImage from '../assets/transparent_profile.png'

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

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* ProfileCard - Left Column */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col items-center lg:items-center space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-sm"
              >
                <ProfileCard
                  avatarUrl={profileImage}
                  name="Shaheriar Malik"
                  title="Software Engineer"
                  handle="shaheriar"
                  status="Let's chat!"
                  contactText="Contact Me"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={true}
                  mobileTiltSensitivity={3}
                  onContactClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="w-full"
                />
              </motion.div>

              {/* Social Links - Under ProfileCard */}
              <motion.div
                variants={staggerItem}
                className="flex flex-col space-y-3 w-full max-w-xs"
              >
                <motion.a
                  {...hoverScale}
                  href="https://www.linkedin.com/in/shaheriar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full transition-colors duration-300 font-medium"
                  style={{ 
                    backgroundColor: 'var(--purple-primary)', 
                    color: 'var(--text-primary)',
                    border: '1px solid var(--purple-border)'
                  }}
                >
                  <FaLinkedin size={20} />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  {...hoverScale}
                  href="https://github.com/shaheriar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full transition-colors duration-300 font-medium"
                  style={{ 
                    backgroundColor: 'var(--card-bg)', 
                    color: 'var(--text-primary)',
                    border: '1px solid var(--card-border)'
                  }}
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Skills MagicBento - Center and Right Columns */}
            <motion.div
              variants={staggerItem}
              className="lg:col-span-2"
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
