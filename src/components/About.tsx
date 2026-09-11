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
    <div className="grid gap-8 md:grid-cols-2 md:items-start">
      <div className="link-card overflow-hidden rounded-2xl">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-dot-red" />
          <span className="h-2.5 w-2.5 rounded-full bg-dot-yellow" />
          <span className="h-2.5 w-2.5 rounded-full bg-dot-green" />
          <span className="ml-2 text-xs text-text/50">perfil.txt</span>
        </div>
        <dl className="flex flex-col gap-3 px-6 py-6 text-sm">
          {facts.map((fact) => (
            <div key={fact.key} className="flex justify-between gap-4">
              <dt className="text-text/60">{fact.key}</dt>
              <dd className="text-right text-text">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div>
        <p className="text-sm leading-relaxed text-text/80">
          Desarrollador recién graduado en el CFGS de Desarrollo de Aplicaciones Multiplataforma.
          Vengo del mundo de los VFX, donde trabajé varios años como FX Artist en Houdini,
          programando en VEX y creando herramientas para efectos bajo deadlines exigentes, en
          equipo y con autonomía.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-text/80">
          Tras varios años en producciones y equipos de trabajo, aporto responsabilidad y
          capacidad para resolver problemas. Busco integrarme en un equipo de desarrollo donde
          aportar esta experiencia y seguir creciendo profesionalmente.
        </p>
      </div>
    </div>
  )
}