import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'

type CarouselProps = {
  images: string[]
}

export function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden bg-zinc-900"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Galeria de imagens do projeto"
    >
      <img
        src={images[index]}
        alt={`Imagem ${index + 1} de ${images.length}`}
        className="w-full h-full object-cover transition-opacity duration-500"
        aria-live="polite"
      />

      <div
        className="absolute bottom-4 right-4 flex gap-2"
        role="tablist"
        aria-label="Selecionar imagem"
      >
        {images.map((_, i) => (
          <Button
            key={i}
            variant="custom"
            onClick={() => setIndex(i)}
            aria-label={`Ir para imagem ${i + 1}`}
            aria-selected={i === index}
            role="tab"
            className={`
              w-2.5 h-2.5 min-h-0 min-w-0 p-0 rounded-full bg-transparent
              ${i === index ? 'bg-indigo-400' : 'bg-zinc-600'}
            `}
          />
        ))}
      </div>
    </div>
  )
}