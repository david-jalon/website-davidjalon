import { education } from '../data/education'

export default function Education() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <ol className="flex flex-col gap-5">
        {education.map((item) => (
          <li key={`${item.title}-${item.school}`} className="border-l-2 border-amber/30 pl-4">
            <span className="text-xs text-amber">
              {item.start} — {item.end}
            </span>
            <h3 className="mt-1 text-sm font-bold text-text">{item.title}</h3>
            <p className="mt-0.5 text-xs text-text/70">{item.school}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}