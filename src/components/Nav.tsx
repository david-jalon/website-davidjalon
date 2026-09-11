import { useEffect, useState } from 'react'

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) {
          const closest = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0]
          setActive(`#${closest.target.id}`)
        }
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 -mx-6 border-b border-border bg-terminal/80 backdrop-blur-md">
      <nav
        className="mx-auto flex w-full max-w-content items-center justify-between gap-4 px-6 py-3"
        aria-label="Principal"
      >
        <a href="#inicio" className="text-sm font-bold text-text transition-colors hover:text-amber">
          davidjalon<span className="blink text-amber" aria-hidden="true">▊</span>
        </a>

        <ul className="hidden items-center gap-4 md:flex md:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                className={`text-xs transition-colors ${
                  active === link.href ? 'text-amber' : 'text-text/70 hover:text-amber'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text transition-colors hover:text-amber md:hidden"
        >
          <span className="sr-only">{menuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={`md:hidden ${menuOpen ? 'border-t border-border' : 'hidden'}`}
      >
        <ul className="mx-auto flex max-w-content flex-col gap-1 px-6 py-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={active === link.href ? 'true' : undefined}
                className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  active === link.href ? 'text-amber' : 'text-text/80 hover:text-amber'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}