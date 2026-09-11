import { profile } from '../data/profile'
import Avatar from './Avatar'

export default function Hero() {
  return (
    <section id="inicio" className="py-12 md:py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
        <div className="w-full md:max-w-2xl">
          <div className="link-card overflow-hidden rounded-2xl">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-dot-red" />
              <span className="h-2.5 w-2.5 rounded-full bg-dot-yellow" />
              <span className="h-2.5 w-2.5 rounded-full bg-dot-green" />
              <span className="ml-2 text-xs text-text/50">~/david</span>
            </div>
            <div className="px-6 py-8 md:px-8 md:py-10">
              <p className="text-sm text-text/50">$ whoami</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-text md:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg text-amber">{profile.role}</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-text/80">{profile.tagline}</p>
              <p className="mt-6 flex items-center gap-2 text-xs text-dot-green">
                <span className="inline-block h-2 w-2 rounded-full bg-dot-green" aria-hidden="true" />
                disponible para trabajar · {profile.location}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#proyectos"
                  className="rounded-lg bg-amber px-5 py-2.5 text-sm font-bold text-terminal transition-colors hover:bg-amber/90"
                >
                  Ver proyectos
                </a>
                <a
                  href={profile.cvUrl}
                  download
                  className="rounded-lg border border-amber px-5 py-2.5 text-sm text-amber transition-colors hover:bg-amber/10"
                >
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex-1">
          <Avatar />
        </div>
      </div>
    </section>
  )
}