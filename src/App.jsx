import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MetaTags from './components/MetaTags'

function App() {
  return (
    <ThemeProvider>
      <MetaTags />
      <div
        className="App prevent-overflow grid grid-cols-1 md:grid-cols-[minmax(220px,300px)_minmax(0,1fr)] items-start"
        style={{ backgroundColor: 'var(--background-dark)', minHeight: '100vh', width: '100%' }}
      >
        <Sidebar />
        <main className="min-w-0">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
