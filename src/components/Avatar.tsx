type AvatarProps = {
  className?: string
}

export default function Avatar({ className = '' }: AvatarProps) {
  return (
    <div
      className={`avatar-glow flex flex-col overflow-hidden rounded-2xl border border-amber bg-surface ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-dot-red" />
        <span className="h-2 w-2 rounded-full bg-dot-yellow" />
        <span className="h-2 w-2 rounded-full bg-dot-green" />
        <span className="ml-1.5 text-[10px] text-text/50">avatar.png</span>
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