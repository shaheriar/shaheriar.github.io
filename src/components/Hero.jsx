import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import LiquidEther from './LiquidEther'
import GradientText from './GradientText'
import ProfileCard from './ProfileCard'
import StarBorder from './StarBorder'
import profileImage from '../assets/transparent_profile.png'

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


  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden w-full pt-20">
      {/* LiquidEther Background */}
      <div className="absolute inset-0">
        <LiquidEther 
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={15} // Reduced for better performance
          cursorSize={80} // Reduced for better performance
          resolution={0.3} // Reduced resolution for better performance
          autoDemo={true}
          autoSpeed={0.3} // Slower for better performance
          autoIntensity={1.5} // Reduced intensity
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ pointerEvents: 'none' }}>
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
          {/* Mobile ProfileCard - Hidden on mobile, moved to About section */}
          <div className="hidden">
            {/* ProfileCard moved to About section for mobile */}
          </div>

          {/* Hero Text - Full width on mobile, 60% on desktop */}
          <div className="text-center lg:text-left lg:col-span-6 order-1">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <TypewriterText
              text="Hi, my name is "
              startAfter={0}
              speed={100}
            />
            <br className="sm:hidden" />
            <GradientText colors={['#8400ff', '#ff9ffc', '#8400ff']}>
              <TypewriterText
                text="Shaheriar Malik"
                startAfter={"Hi, my name is ".length * 100}
                speed={100}
                onComplete={() => setShowH2(true)} // triggers H2 animation
            />
            </GradientText>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={showH2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300 mb-8"
          >
            {showH2 ? (
              <>
                <TypewriterText
                  text="I'm a "
                  speed={100}
                />
                <GradientText colors={['#8400ff', '#ff9ffc', '#8400ff']}>
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
                </GradientText>
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
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about building innovative solutions with expertise in{" "}
            <GradientText colors={['#3b82f6', '#6366f1', '#3b82f6']}>Frontend Development</GradientText>,{" "}
            <GradientText colors={['#8400ff', '#a855f7', '#8400ff']}>AI/ML</GradientText>, and{" "}
            <GradientText colors={['#ec4899', '#f472b6', '#ec4899']}>Full-Stack Development</GradientText>
          </motion.p>


          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showCTA ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="mb-12"
          >
            <StarBorder
              color="#ff9ffc"
              speed="3s"
              thickness={2}
              style={{ pointerEvents: 'auto' }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(132, 0, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                style={{ pointerEvents: 'auto' }}
              >
                See More
              </motion.button>
            </StarBorder>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showSocial ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="flex justify-center space-x-6"
            style={{ pointerEvents: 'auto' }}
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

          {/* Right Side - ProfileCard (Desktop Only) */}
          <div className="hidden lg:flex justify-center lg:justify-end lg:col-span-4 lg:order-2" style={{ pointerEvents: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={showCTA ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
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
          </div>
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
