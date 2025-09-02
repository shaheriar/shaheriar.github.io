import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

// Typewriter effect component
const TypewriterText = ({ text, startAfter = 0, speed = 50, onComplete }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, currentIndex === 0 ? startAfter : speed)

      return () => clearTimeout(timer)
    } else if (currentIndex === text.length && onComplete) {
      onComplete()
    }
  }, [currentIndex, text, startAfter, speed, onComplete])

  return <span>{displayText}</span>
}

const Hero = () => {
  const [showH2, setShowH2] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showCTA, setShowCTA] = useState(false)
  const [showSocial, setShowSocial] = useState(false)

  // Generate random animation values once
  const bg1 = React.useMemo(() => ({
    x: [0, Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200, 0],
    y: [0, Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200, 0],
    scale: [1, Math.random() * 2 + 0.5, Math.random() * 2 + 0.5, Math.random() * 2 + 0.5, 1],
    rotate: [0, 180, 360],
    opacity: [0.7, Math.random() * 0.6 + 0.2, Math.random() * 0.6 + 0.2, Math.random() * 0.6 + 0.2, 0.7],
  }), []);

  const bg2 = React.useMemo(() => ({
    x: [0, Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 500 - 250, 0],
    y: [0, Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 500 - 250, 0],
    scale: [1.2, Math.random() * 2.5 + 0.3, Math.random() * 2.5 + 0.3, Math.random() * 2.5 + 0.3, 1.2],
    rotate: [360, 180, 0],
    opacity: [0.6, Math.random() * 0.7 + 0.1, Math.random() * 0.7 + 0.1, Math.random() * 0.7 + 0.1, 0.6],
  }), []);

  const bg3 = React.useMemo(() => ({
    x: [0, Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300, 0],
    y: [0, Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300, 0],
    scale: [1, Math.random() * 3 + 0.2, Math.random() * 3 + 0.2, Math.random() * 3 + 0.2, Math.random() * 3 + 0.2, 1],
    rotate: [0, -180, -360],
    opacity: [0.8, Math.random() * 0.8 + 0.1, Math.random() * 0.8 + 0.1, Math.random() * 0.8 + 0.1, Math.random() * 0.8 + 0.1, 0.8],
  }), []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={bg1} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div animate={bg2} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div animate={bg3} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 whitespace-nowrap"
          >
            <TypewriterText
              text="Hi, my name is "
              startAfter={0}
              speed={100}
            />
            <span className="gradient-text">
              <TypewriterText
                text="Shaheriar Malik"
                startAfter={"Hi, my name is ".length * 100}
                speed={100}
                onComplete={() => setShowH2(true)} // triggers H2 animation
              />
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={showH2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300 mb-8"
          >
            {showH2 ? (
              <>
                <TypewriterText
                  text="I'm a "
                  speed={100}
                />
                <span className="gradient-text">
                  <TypewriterText
                    text="Software Engineer"
                    startAfter={"I'm a ".length * 100}
                    speed={100}
                    onComplete={() => {
                      setShowSubtitle(true)
                      setTimeout(() => setShowCTA(true), 200)
                      setTimeout(() => setShowSocial(true), 400)
                    }}
                  />
                </span>
              </>
            ) : <TypewriterText
                  text=""
                  speed={0}
                />}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={showSubtitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about building innovative solutions with expertise in{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Frontend Development</span>,{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">AI/ML</span>, and{" "}
            <span className="font-semibold text-pink-600 dark:text-pink-400">Full-Stack Development</span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showCTA ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="btn-primary"
            >
              Discover More
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showSocial ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/shaheriar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/shaheriar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:shaheriarm@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
            >
              <FaEnvelope size={28} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
