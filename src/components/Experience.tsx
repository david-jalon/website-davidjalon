import { experience } from '../data/experience'
import GitGraph from './GitGraph'

export default function Experience() {
  const firstVfxIndex = experience.findIndex((item) => item.kind === 'vfx')

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text/60">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-amber" aria-hidden="true" />
          rama dev
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue" aria-hidden="true" />
          rama vfx
        </span>
        <span className="flex items-center gap-2">
          <span className="text-amber" aria-hidden="true">⟳</span>
          merge
        </span>
      </div>

      <ol>
        {experience.map((item, index) => {
          const isLast = index === experience.length - 1
          const isFirstVfx = index === firstVfxIndex
          const isMerge = item.kind === 'dev'

          return (
            <li key={`${item.company}-${item.start}`} className="relative flex gap-4 md:gap-6">
              <GitGraph item={item} isFirstVfx={isFirstVfx} isLast={isLast} />

              <div className="flex-1 pb-6">
                <div className="link-card rounded-xl px-5 py-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-sm font-bold text-text">{item.role}</h3>
                    <span className="text-xs text-text/50">
                      {item.start} — {item.end}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <p className={`text-sm ${isMerge ? 'text-amber' : 'text-blue'}`}>
                      {item.company}
                    </p>
                    {isMerge && (
                      <span className="rounded-full border border-amber px-2 py-0.5 text-[10px] text-amber">
                        ⟳ merge
                      </span>
                    )}
                  </div>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="text-xs leading-relaxed text-text/75">
                        <span
                          className={isMerge ? 'text-amber/60' : 'text-blue/60'}
                          aria-hidden="true"
                        >
                          ▸{' '}
                        </span>
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