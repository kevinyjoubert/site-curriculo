type CardProps = {
  title: string
  children: React.ReactNode
  className?: String
}

export function Card({ title, children, className }: CardProps) {
  return (
      <div
        className={`
          p-6
          rounded-xl
          bg-zinc-900/20
          border
          border-zinc-800
          hover:border-zinc-700
          transition
          ${className ?? ''}
        `}
        >
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-3 text-sm text-zinc-400">
        {children}
      </div>
    </div>
  )
}
