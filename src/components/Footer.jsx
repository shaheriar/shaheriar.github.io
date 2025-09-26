import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { staggerContainer, staggerItem, hoverScale } from '../config/animations'

const Footer = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/shaheriar/",
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      icon: FaGithub,
      href: "https://github.com/shaheriar",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: FaEnvelope,
      href: "mailto:shaheriarm@gmail.com",
      label: "Email",
      color: "hover:text-red-600 dark:hover:text-red-400"
    }
  ]

  return (
    <footer className="py-12" style={{ backgroundColor: 'var(--background-darker)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <motion.div variants={staggerItem} className="space-y-4">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold"
              >
                Shaheriar Malik
              </motion.h3>
              <p className="text-gray-400 leading-relaxed">
                Software Engineer passionate about building innovative solutions 
                with expertise in Frontend Development, AI/ML, and Full-Stack Development.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={staggerItem} className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.button
                      whileHover={{ x: 5, color: '#3B82F6' }}
                      onClick={() => {
                        const element = document.querySelector(`#${link.toLowerCase()}`)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={staggerItem} className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2">
                <motion.p
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-400"
                >
                  shaheriarm@gmail.com
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            variants={staggerItem}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-colors duration-300`}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={staggerItem}
            className="border-t border-gray-800 mb-8"
          />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              variants={staggerItem}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {new Date().getFullYear()} Shaheriar Malik
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex items-center space-x-2 text-gray-400 text-sm"
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>and lots of chai</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
