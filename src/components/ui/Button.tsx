type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  className?: string
}

export function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  disabled = false,
  className,
}: ButtonProps) {
  const base =
    `
    inline-flex items-center justify-center
    px-6 py-3 rounded-lg font-medium transition
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-indigo-500/60
    focus-visible:ring-offset-2
    focus-visible:ring-offset-zinc-950
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${className ?? ''}
    `

  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white',
    secondary:
      'border border-zinc-700 hover:border-zinc-500 text-zinc-200',
  }

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        className={`${base} ${variants[variant]}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  )
}