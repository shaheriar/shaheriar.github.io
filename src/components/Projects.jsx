import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa'
import { staggerContainer, staggerItem, hoverScale } from '../config/animations'

const Projects = () => {
  const projects = [
    {
      title: "Enhancing Image Captioning with Deep Learning Models",
      description: "Collaborated with a team of 2 to develop a deep learning model combining an encoder Wide ResNet50 with a decoder LSTM with an attention layer to accomplish the complex task of image captioning.",
      image: "/assets/project1.png",
      githubUrl: "https://github.com/shaheriar/CS-228-Deep-Learning-Project",
      technologies: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "LSTM", "Attention Mechanism"],
      featured: true,
      isPrivate: false
    },
    {
      title: "Blog Post Automation using RAG, OpenAI, Langchain, with MongoDB",
      description: "Built an AI-powered blog platform using OpenAI, LangChain, and FAISS embeddings to generate company-specific posts, fetch relevant images from Pexels, and serve them via MongoDB to the website frontend.",
      image: "/assets/project4.png",
      technologies: ["Python", "RAG", "OpenAI", "Langchain", "MongoDB"],
      featured: true,
      isPrivate: true
    },
    {
      "title": "Peer-to-Peer Rental Marketplace",
      "description": "Developed a peer-to-peer rental platform using React, Flask, AWS, and MongoDB, integrated Stripe for secure payments, and built ETL pipelines to track rentals and transactions.",
      "image": "/assets/project5.png",
      "technologies": ["React", "Flask", "AWS", "MongoDB", "Stripe"],
      "featured": true,
      "isPrivate": true
    },
    {
      title: "Motion Planning & Trajectory Generation with Turtlebot3",
      description: "Developed the necessary software in ROS to plan a path for the Turtlebot3 using the A* algorithm to avoid obstacles and hit the ball in the goal, and generate a trajectory using a PID controller to follow the path.",
      image: "/assets/project2.png",
      githubUrl: "https://github.com/shaheriar/Motion-Planning-Trajectory-Generation-with-Turtlebot3",
      technologies: ["ROS", "C++", "Python", "Robotics", "A* Algorithm", "PID Controller"],
      featured: true,
      isPrivate: false
    },
    {
      title: "Smart Chessboard",
      description: "Led a team of 4 and designed the Flutter front-end and Python AI for the construction of a chessboard designed to enhance the playing experience using the on-board 192 LEDs and touch screen.",
      image: "/assets/project3.png",
      githubUrl: "https://github.com/shaheriar/Senior-Design-Project-UCR",
      technologies: ["Flutter", "Python", "AI", "Hardware Integration", "LED Control", "Touch Interface"],
      featured: true,
      isPrivate: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Featured Projects
          </motion.h2>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={staggerItem}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ 
                      rotateY: 5, 
                      rotateX: 5,
                      scale: 1.05,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="text-white bg-white bg-opacity-20 rounded-full p-3 backdrop-blur-sm"
                      >
                        <FaExternalLinkAlt size={24} />
                      </motion.div>
                    </div>
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-60"
                          style={{
                            left: `${20 + (i * 15)}%`,
                            top: `${30 + (i * 10)}%`,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0, 0.6, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Project Content */}
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                >
                  <motion.h3
                    whileHover={{ scale: 1.02 }}
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3"
                  >
                    {project.title}
                    {project.isPrivate && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-1 text-amber-600 dark:text-amber-400 text-sm font-medium bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded-full"
                        title="Private/Proprietary Project"
                      >
                        <FaLock size={12} />
                        Private
                      </motion.span>
                    )}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Project Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex space-x-4"
                  >
                    {project.isPrivate ? (
                      <motion.div
                        {...hoverScale}
                        className="flex items-center space-x-2 bg-amber-600 dark:bg-amber-700 text-white px-6 py-3 rounded-full cursor-not-allowed opacity-75"
                        title="Private/Proprietary - Code not available"
                      >
                        <FaLock size={18} />
                        <span>Private</span>
                      </motion.div>
                    ) : (
                      <motion.a
                        {...hoverScale}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300"
                      >
                        <FaGithub size={18} />
                        <span>View Code</span>
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={staggerItem}
            className="text-center mt-16"
          >
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-6"
            >
              Interested in seeing more of my work?
            </motion.p>
            <motion.a
              {...hoverScale}
              href="https://github.com/shaheriar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <FaGithub size={20} />
              <span>Visit My GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
