import { profile } from '../data/profile'

export default function About() {
  const facts = [
    { key: 'ubicación', value: profile.location },
    { key: 'perfil', value: profile.role.replace('➜ ', '') },
    { key: 'email', value: profile.email },
    { key: 'linkedin', value: profile.linkedin.replace('https://', '') },
    { key: 'github', value: profile.github.replace('https://', '') },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
      <div className="link-card flex flex-col overflow-hidden rounded-2xl">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-dot-red" />
          <span className="h-2.5 w-2.5 rounded-full bg-dot-yellow" />
          <span className="h-2.5 w-2.5 rounded-full bg-dot-green" />
          <span className="ml-2 text-xs text-text/70">perfil.txt</span>
        </div>
        <dl className="flex flex-1 flex-col justify-between gap-3 px-6 py-6 text-sm">
          {facts.map((fact) => (
            <div key={fact.key} className="flex justify-start gap-4">
              <dt className="text-text/70">{fact.key}</dt>
              <dd className="text-right text-text">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="link-card flex flex-col overflow-hidden rounded-2xl">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-dot-red" />
          <span className="h-2.5 w-2.5 rounded-full bg-dot-yellow" />
          <span className="h-2.5 w-2.5 rounded-full bg-dot-green" />
          <span className="ml-2 text-xs text-text/70">bio.txt</span>
        </div>
        <div className="flex flex-1 flex-col justify-center px-6 py-6">
          <p className="text-sm text-text/70">$ cat bio.txt</p>
          {profile.bio.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-sm leading-relaxed text-text/80">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}