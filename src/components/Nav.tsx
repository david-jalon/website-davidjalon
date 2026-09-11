const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-terminal/80 backdrop-blur-md">
      <nav
        className="mx-auto flex w-full max-w-content items-center justify-between gap-4 px-6 py-3"
        aria-label="Principal"
      >
        <a href="#inicio" className="text-sm font-bold text-text transition-colors hover:text-amber">
          davidjalon<span className="blink text-amber" aria-hidden="true">▊</span>
        </a>
        <ul className="no-scrollbar flex items-center gap-4 overflow-x-auto whitespace-nowrap md:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs text-text/70 transition-colors hover:text-amber"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}