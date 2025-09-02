import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { staggerContainer, staggerItem, hoverScale } from '../config/animations'
import profileImage from '../assets/profile.jpeg'

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "TypeScript", "C++", "C", "Java", "MATLAB", "Bash", "HTML", "CSS"]
    },
    {
      category: "AI/ML Frameworks",
      items: ["PyTorch", "TensorFlow", "OpenAI", "Langchain", "RAG", "Scikit-Learn", "OpenCV", "Keras", "Hugging Face"]
    },
    {
      category: "Web Development",
      items: ["React", "NextJS", "Flask", "Node.js", "Express", "REST APIs"]
    },
    {
      category: "Mobile & Cross-Platform",
      items: ["Flutter", "React Native", "Dart"]
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
          >
            About Me
          </motion.h2>

          {/* About Content - Top Section */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <motion.p
              variants={staggerItem}
              className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6"
            >
              I am a creative and driven Software Engineer with an M.S. in Computer Engineering, 
              a strong background in Deep Learning, Data Science, and Full-Stack Software Development, 
              but also like to spend time making art and music.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto"
            >
              Eager to work in a healthy team-based environment that is equally as passionate 
              and excited about building and creating new ways for people to connect with technology, 
              and each other.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Profile Image - Left Column */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col items-center lg:items-center space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
                <img
                  src={profileImage}
                  alt="Shaheriar Malik"
                  className="relative w-64 h-64 object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>

              {/* Social Links - Under Image */}
              <motion.div
                variants={staggerItem}
                className="flex flex-col space-y-3 w-full max-w-xs"
              >
                <motion.a
                  {...hoverScale}
                  href="https://www.linkedin.com/in/shaheriar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  <FaLinkedin size={20} />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  {...hoverScale}
                  href="https://github.com/shaheriar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300 font-medium"
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Skills Grid - Center and Right Columns */}
            <motion.div
              variants={staggerItem}
              className="lg:col-span-2"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">{skill.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: (index * 0.1) + (itemIndex * 0.03),
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -2,
                            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
                          }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 cursor-default"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
