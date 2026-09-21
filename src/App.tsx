import { useScrollReveal } from './hooks/useScrollReveal'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import { Certificates } from './components/Certificates'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <div className="h-px bg-[#1E2535] mx-5 sm:mx-6 lg:mx-10" />
        <About />
        <div className="h-px bg-[#1E2535] mx-5 sm:mx-6 lg:mx-10" />
        <Projects />
        <div className="h-px bg-[#1E2535] mx-5 sm:mx-6 lg:mx-10" />
        <Stack />
        <div className="h-px bg-[#1E2535] mx-5 sm:mx-6 lg:mx-10" />
        <Certificates />
        <div className="h-px bg-[#1E2535] mx-5 sm:mx-6 lg:mx-10" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
