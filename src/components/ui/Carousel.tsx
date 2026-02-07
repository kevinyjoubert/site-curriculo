import { useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'

interface CarouselProps {
  images: string[]
}

export function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1))

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <>
      {/* CAROUSEL */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">

        {/* IMAGEM */}
        <img
          src={images[index]}
          alt={`Imagem ${index + 1}`}
          className="w-full h-full object-cover"
        />

        {/* OVERLAY GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        {/* BOTÕES */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* MAXIMIZAR */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition"
          aria-label="Expandir imagem"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* FULLSCREEN */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center">

          {/* FECHAR */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/70 text-white hover:bg-white hover:text-black transition z-10"
            aria-label="Fechar imagem"
          >
            <X className="w-6 h-6" />
          </button>

          {/* ANTERIOR */}
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition z-10"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* PRÓXIMA */}
          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition z-10"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* IMAGEM */}
          <img
            src={images[index]}
            alt={`Imagem ${index + 1}`}
            className="max-w-[95vw] max-h-[95vh] object-contain"
          />
        </div>
      )}
    </>
  )
}
