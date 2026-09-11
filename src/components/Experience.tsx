import { experience } from '../data/experience'

export default function Experience() {
  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text/60">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-amber" aria-hidden="true" />
          rama dev
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-amber/30" aria-hidden="true" />
          rama vfx
        </span>
        <span className="flex items-center gap-2">
          <span className="text-amber" aria-hidden="true">⟳</span>
          merge
        </span>
      </div>

      <ol className="relative">
        {experience.map((item, index) => {
          const isLast = index === experience.length - 1
          const isMerge = item.kind === 'dev'
          return (
            <li key={`${item.company}-${item.start}`} className="relative flex gap-4 pb-6 md:gap-6">
              <div className="relative flex w-4 shrink-0 flex-col items-center">
                {!isLast && (
                  <span
                    className={`absolute left-1/2 top-4 bottom-[-8px] w-px -translate-x-1/2 ${
                      isMerge ? 'bg-amber/50' : 'bg-border'
                    }`}
                    aria-hidden="true"
                  />
                )}
                <span
                  className={`relative z-10 mt-2 block h-3 w-3 rounded-full ${
                    isMerge ? 'bg-amber shadow-[0_0_12px_rgba(255,176,0,0.7)]' : 'bg-amber/30'
                  }`}
                  aria-hidden="true"
                />
              </div>

              <div className="flex-1">
                <div className="link-card rounded-xl px-5 py-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-sm font-bold text-text">{item.role}</h3>
                    <span className="text-xs text-text/50">
                      {item.start} — {item.end}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <p className="text-sm text-amber">{item.company}</p>
                    {isMerge && (
                      <span className="rounded-full border border-amber px-2 py-0.5 text-[10px] text-amber">
                        ⟳ merge
                      </span>
                    )}
                  </div>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="text-xs leading-relaxed text-text/75">
                        <span className="text-amber/60" aria-hidden="true">▸ </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}