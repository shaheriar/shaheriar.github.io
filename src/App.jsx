import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Suspense, lazy } from 'react'

// Lazy load heavy components for better performance
const LazyHero = lazy(() => import('./components/Hero'))
const LazyAbout = lazy(() => import('./components/About'))
import ScrollToTop from './components/ScrollToTop'
import MetaTags from './components/MetaTags'

function App() {
  return (
    <ThemeProvider>
      <MetaTags />
      <div className="App min-h-screen transition-colors duration-300 overflow-x-hidden prevent-overflow" style={{ backgroundColor: 'var(--background-dark)', color: 'var(--text-primary)' }}>
        <Navigation />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div></div>}>
          <LazyHero />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div></div>}>
          <LazyAbout />
        </Suspense>
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App