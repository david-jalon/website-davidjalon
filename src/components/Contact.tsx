import { profile } from '../data/profile'
import CardIcon from './CardIcon'

export default function Contact() {
  const items = [
    { icon: 'email', label: profile.email, href: `mailto:${profile.email}` },
    { icon: 'phone', label: profile.phone, href: `tel:+34${profile.phone.replace(/\s/g, '')}` },
    { icon: 'linkedin', label: profile.linkedin.replace('https://', ''), href: profile.linkedin },
    { icon: 'github', label: profile.github.replace('https://', ''), href: profile.github },
  ]

  return (
    <div className="mx-auto w-full max-w-md">
      <p className="text-center text-sm text-text/70">
        ¿Hablamos? Escríbeme y te respondo en breve.
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
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
        className="link-card mt-5 flex items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm text-amber"
      >
        <span aria-hidden="true">↓</span> Descargar CV
      </a>
    </div>
  )
}