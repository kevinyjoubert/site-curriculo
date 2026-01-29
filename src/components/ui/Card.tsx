type CardProps = {
  title: string
  children: React.ReactNode
  className?: string
}

export function Card({ title, children, className }: CardProps) {
  const headingId = `card-title-${title.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <div
      role="group"
      aria-labelledby={headingId}
      tabIndex={0}
      className={`
        p-6
        rounded-xl
        bg-zinc-900/20
        border
        border-zinc-800
        hover:border-zinc-700
        transition
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-indigo-500/40
        focus-visible:ring-offset-2
        focus-visible:ring-offset-zinc-950
        ${className ?? ''}
      `}
    >
      <h3 id={headingId} className="font-semibold">
        {title}
      </h3>

      <div className="mt-3 text-sm text-zinc-400">
        {children}
      </div>
    </div>
  )
}