import type { ReactNode } from 'react'
import { useInView } from '../../hooks/UseInView'

interface FadeInViewProps {
  children: ReactNode
  threshold?: number
  className?: string
  delay?: number
}

export function FadeInView({ children, threshold = 0.2, className = "", delay = 0 }: FadeInViewProps) {
  const { ref, visible } = useInView<HTMLDivElement>(threshold)

  return (
    <div
      ref={ref}
      // Se estiver visível, aplica o delay. Se não, remove o delay para "resetar" instantaneamente.
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`
        transition-all duration-1000 ease-out transform
        ${visible 
          ? 'opacity-100 translate-y-0' // Estado Visível (Animado)
          : 'opacity-0 translate-y-12'  // Estado Invisível (Resetado)
        }
        ${className}
      `}
    >
      {children}
    </div>
  )
}