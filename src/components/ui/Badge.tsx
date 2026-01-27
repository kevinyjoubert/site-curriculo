type BadgeProps = {
  label: string
}

export function Badge({ label }: BadgeProps) {
  return (
    <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300">
      {label}
    </span>
  )
}
