import { skills } from '../data/skills'

export default function Skills() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skills.map((group) => (
        <div
          key={group.category}
          className="rounded-2xl border border-border bg-surface p-5"
        >
          <h3 className="mb-3 text-xs text-text/70">{group.category}</h3>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-text transition-colors hover:border-amber hover:text-amber"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}