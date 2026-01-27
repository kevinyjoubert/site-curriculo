import type { ReactNode } from 'react'
import { useInView } from '../../hooks/UseInView.tsx'

type Variant = 'default' | 'medium' | 'soft'

type PageBackgroundProps = {
  children: ReactNode
  variant?: Variant
}

export function PageBackground({
  children,
  variant = 'default',
}: PageBackgroundProps) {
  const { ref, visible } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="relative bg-zinc-950 overflow-hidden"
    >
      {/* Glows */}
      {variant === 'default' && (
        <>
          <div
            className={`
              absolute -top-40 -left-40 w-[600px] h-[600px]
              bg-indigo-500/20 rounded-full blur-3xl
              transition-all duration-1000 ease-out
              ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
            `}
          />
          <div
            className={`
              absolute bottom-[11%] right-[-200px] w-[700px] h-[700px]
              bg-purple-600/10 rounded-full blur-3xl
              transition-all duration-1000 ease-out delay-200
              ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
            `}
          />
        </>
      )}
      
      {variant === 'medium' && (
        <>
          <div
            className={`
              absolute top-[13vh] -left-40 w-[700px] h-[600px]
              bg-indigo-500/20 rounded-full blur-3xl
              transition-all duration-1000 ease-out
              ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
            `}
          />
          <div
            className={`
              absolute bottom-[11%] right-[-200px] w-[700px] h-[700px]
              bg-purple-600/10 rounded-full blur-3xl
              transition-all duration-1000 ease-out delay-200
              ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
            `}
          />
        </>
      )}

      {variant === 'soft' && (
        <>
          <div
            className={`
              absolute top-[16%] left-5 w-[260px] h-[230px]
              bg-indigo-500/10 rounded-full blur-3xl
              transition-all duration-1000 ease-out
              ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
            `}
          />
          <div
            className={`
              absolute bottom-[16%] right-5 w-[400px] h-[280px]
              bg-purple-600/10 rounded-full blur-3xl
              transition-all duration-1000 ease-out delay-150
              ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
            `}
          />
        </>
      )}

      <div className="relative">
        {children}
      </div>
    </div>
  )
}