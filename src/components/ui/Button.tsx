import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'custom'
  href?: string
}

export function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  className,
  disabled,
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white',
    secondary: 'border border-zinc-700 hover:border-zinc-500 text-zinc-200',
    custom: ''
  }

  const finalClasses = `${base} ${variant !== 'custom' ? variants[variant] : ''} ${className ?? ''}`

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={finalClasses}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
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
      className={finalClasses}
      {...props}
    >
      {children}
    </button>
  )
}