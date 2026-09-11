import type { Experience } from '../data/types'

type GitGraphProps = {
  item: Experience
  isFirstVfx: boolean
  isLast: boolean
}

export default function GitGraph({ item, isFirstVfx, isLast }: GitGraphProps) {
  const isMerge = item.kind === 'dev'

  return (
    <div className="relative w-12 shrink-0 pb-6">
      <span
        className={`absolute left-[6px] top-0 w-px -translate-x-1/2 ${
          isLast
            ? 'h-30 bg-gradient-to-b from-amber/40 from-55% to-transparent'
            : 'bottom-0 bg-amber/40'
        }`}
        aria-hidden="true"
      />
      {!isMerge && (
        <span
          className={`absolute left-[36px] w-px -translate-x-1/2 ${
            isFirstVfx ? 'top-[13px]' : 'top-0'
          } ${
            isLast
              ? 'h-25 bg-gradient-to-b from-blue/40 from-55% to-transparent'
              : 'bottom-0 bg-blue/40'
          }`}
          aria-hidden="true"
        />
      )}

      {isMerge && (
        <svg
          className="pointer-events-none absolute left-0 top-[13px] h-full w-full"
          viewBox="0 0 48 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="36"
            y1="100"
            x2="6"
            y2="0"
            stroke="rgba(255, 176, 0, 0.4)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}

      {isMerge ? (
        <span
          className="absolute left-[6px] top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-amber shadow-[0_0_12px_rgba(255,176,0,0.7)]"
          aria-hidden="true"
        />
      ) : (
        <span
          className="absolute left-[36px] top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue"
          aria-hidden="true"
        />
      )}
    </div>
  )
}