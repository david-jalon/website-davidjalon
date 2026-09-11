import Nav from './components/Nav'
import Footer from './components/Footer'
import ShapeGridBackground from './components/ShapeGridBackground'

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
          <section id="inicio" className="flex min-h-[calc(100dvh-6rem)] items-center justify-center">
            <p className="text-sm text-text/60">Shell listo — secciones en la Fase 2.</p>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App