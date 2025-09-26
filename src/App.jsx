import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import MetaTags from './components/MetaTags'

function App() {
  return (
    <ThemeProvider>
      <MetaTags />
      <div className="App min-h-screen transition-colors duration-300 overflow-x-hidden prevent-overflow" style={{ backgroundColor: 'var(--background-dark)', color: 'var(--text-primary)' }}>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App