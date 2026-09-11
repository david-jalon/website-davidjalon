export default function Avatar() {
  return (
    <div className="avatar-glow flex h-full min-h-64 flex-col overflow-hidden rounded-2xl border border-amber bg-surface/60 backdrop-blur-md">
      <div className="flex items-center gap-1.5 border-b border-amber px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-dot-red" />
        <span className="h-2.5 w-2.5 rounded-full bg-dot-yellow" />
        <span className="h-2.5 w-2.5 rounded-full bg-dot-green" />
        <span className="ml-2 text-xs text-text/50">avatar.png</span>
      </div>
      <div className="relative min-h-0 flex-1">
        <img
          src="/avatar.png"
          alt="Retrato de David Jalón"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: '50% 13%' }}
        />
      </div>
    </div>
  )
}