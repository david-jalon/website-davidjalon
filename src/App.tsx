import Nav from './components/Nav'
import Footer from './components/Footer'
import ShapeGridBackground from './components/ShapeGridBackground'
import Section from './components/Section'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-dvh bg-terminal font-mono text-text">
      <ShapeGridBackground
        className="fixed inset-0 z-0 h-full w-full opacity-70"
        direction="diagonal"
        speed={0.4}
        squareSize={40}
        shape="square"
        borderColor="rgba(255, 176, 0, 0.28)"
        hoverFillColor="rgba(255, 176, 0, 0.30)"
      />
      <div className="relative z-10 mx-auto w-full max-w-content border-x border-border px-6">
        <Nav />
        <main>
          <Hero />
          <Section id="sobre-mi" label="sobre-mi">
            <About />
          </Section>
          <Section id="experiencia" label="experiencia">
            <Experience />
          </Section>
          <Section id="proyectos" label="proyectos">
            <Projects />
          </Section>
          <Section id="tecnologias" label="tecnologias">
            <Skills />
          </Section>
          <Section id="formacion" label="formacion">
            <Education />
          </Section>
          <Section id="contacto" label="contacto">
            <Contact />
          </Section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App