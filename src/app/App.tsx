import StarfieldBackground from './components/StarfieldBackground'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <StarfieldBackground />
      <div className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  )
}
