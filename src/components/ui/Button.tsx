type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  onClick,
  href,
  variant = 'primary',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-500'

  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white',
    secondary:
      'border border-zinc-700 hover:border-zinc-500 text-zinc-200',
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]}`}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  )
}
