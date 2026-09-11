import { projects } from '../data/projects'
import CardIcon from './CardIcon'

export default function Projects() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.name} className="link-card rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <span className="text-amber" aria-hidden="true">
              <CardIcon name={project.icon} />
            </span>
            <h3 className="text-sm font-bold text-text">{project.name}</h3>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-text/75">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-2.5 py-1 text-[10px] text-text/70"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber hover:underline"
              >
                Demo →
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text/70 transition-colors hover:text-amber"
              >
                Código
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}