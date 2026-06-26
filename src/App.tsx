import { useTheme } from './hooks/useTheme'
import { useScrollReveal } from './hooks/useScrollReveal'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const { theme, toggle } = useTheme()
  useScrollReveal()

  return (
    <div className="min-h-screen bg-[#07090E]">
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main-content" role="main">
        <Hero />
        <div className="h-px bg-[#1A1F2E] mx-5 sm:mx-6 lg:mx-10" />
        <About />
        <div className="h-px bg-[#1A1F2E] mx-5 sm:mx-6 lg:mx-10" />
        <Projects />
        <div className="h-px bg-[#1A1F2E] mx-5 sm:mx-6 lg:mx-10" />
        <Stack />
        <div className="h-px bg-[#1A1F2E] mx-5 sm:mx-6 lg:mx-10" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
