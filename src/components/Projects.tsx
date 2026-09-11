import { useState } from 'react'
import { fxLinks, projects } from '../data/projects'
import CardIcon from './CardIcon'

export default function Projects() {
  const [open, setOpen] = useState(false)

  return (
    <div>
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

      <div className="mx-auto mt-6 max-w-md">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="fx-links"
          className="link-card flex w-full items-center justify-between rounded-2xl px-6 py-4 text-sm text-text transition-colors hover:text-amber"
        >
          <span>Antiguos proyectos FX</span>
          <span className="text-amber" aria-hidden="true">
            {open ? '▾' : '▸'}
          </span>
        </button>

        <div
          id="fx-links"
          inert={!open}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="mt-3 flex flex-col gap-3">
              {fxLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-card flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-text transition-colors hover:text-amber"
                >
                  <span className="text-amber" aria-hidden="true">
                    <CardIcon name={link.icon} />
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}