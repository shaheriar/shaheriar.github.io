import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { staggerContainer, staggerItem, hoverScale } from '../config/animations'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:shaheriarm@gmail.com?subject=${subject}&body=${body}`
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "shaheriarm@gmail.com",
      href: "mailto:shaheriarm@gmail.com",
      color: "text-red-500"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shaheriar",
      href: "https://www.linkedin.com/in/shaheriar/",
      color: "text-blue-500"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/shaheriar",
      href: "https://github.com/shaheriar",
      color: "text-gray-700 dark:text-gray-300"
    }
  ]

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--background-dark)' }}>
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
            Get In Touch
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={staggerItem} className="space-y-8">
              <div>
                <motion.h3
                  whileHover={{ scale: 1.02 }}
                  className="text-2xl font-bold mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Let's Connect
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question, want to collaborate, or just want to say hi, 
                  feel free to reach out!
                </motion.p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg transition-colors duration-300 group"
                    style={{ 
                      backgroundColor: 'var(--card-bg)',
                      border: '1px solid var(--card-border)'
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <contact.icon size={24} />
                    </motion.div>
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{contact.label}</p>
                      <p style={{ color: 'var(--text-secondary)' }}>{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="pt-4"
              >
                <motion.a
                  {...hoverScale}
                  href="mailto:shaheriarm@gmail.com"
                  className="inline-flex items-center space-x-2 btn-primary"
                >
                  <FaEnvelope size={20} />
                  <span>Send Email</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={staggerItem}>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ 
                        backgroundColor: 'var(--card-bg)',
                        borderColor: 'var(--card-border)',
                        color: 'var(--text-primary)',
                        focusRingColor: 'var(--purple-primary)'
                      }}
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ 
                        backgroundColor: 'var(--card-bg)',
                        borderColor: 'var(--card-border)',
                        color: 'var(--text-primary)',
                        focusRingColor: 'var(--purple-primary)'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{ 
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--card-border)',
                      color: 'var(--text-primary)',
                      focusRingColor: 'var(--purple-primary)'
                    }}
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none"
                    style={{ 
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--card-border)',
                      color: 'var(--text-primary)',
                      focusRingColor: 'var(--purple-primary)'
                    }}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary relative overflow-hidden group"
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    Send Message
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
