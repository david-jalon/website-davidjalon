import { useState } from 'react'
import { profile } from '../data/profile'
import CardIcon from './CardIcon'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const items = [
    { icon: 'linkedin', label: profile.linkedin.replace('https://', ''), href: profile.linkedin },
    { icon: 'github', label: profile.github.replace('https://', ''), href: profile.github },
  ]

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <p className="text-center text-sm text-text/70">
        ¿Hablamos? Escríbeme y te respondo en breve.
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li>
          <button
            type="button"
            onClick={handleCopy}
            className="link-card flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm text-text transition-colors hover:text-amber"
          >
            <span className="text-amber" aria-hidden="true">
              <CardIcon name="email" />
            </span>
            <span aria-live="polite">{copied ? '¡Correo copiado!' : profile.email}</span>
          </button>
        </li>
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card flex items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm text-text transition-colors hover:text-amber"
            >
              <span className="text-amber" aria-hidden="true">
                <CardIcon name={item.icon} />
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href={profile.cvUrl}
        download
        className="mt-5 flex items-center justify-center gap-3 rounded-xl bg-amber px-4 py-3 text-sm font-bold text-terminal transition-colors hover:bg-amber/90"
      >
        <span aria-hidden="true">↓</span> Descargar CV
      </a>
    </div>
  )
}