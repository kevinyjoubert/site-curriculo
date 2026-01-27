type CardProps = {
  title: string
  children: React.ReactNode
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition">
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-3 text-sm text-zinc-400">
        {children}
      </div>
    </div>
  )
}
