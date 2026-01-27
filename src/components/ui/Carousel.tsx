import { useEffect, useState } from 'react'

type CarouselProps = {
    images: string[]
}

export function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="
      relative
      w-full
      h-full
      rounded-lg
      overflow-hidden
      bg-zinc-900
    ">
      <img
        src={images[index]}
        alt=""
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      <div className="absolute bottom-4 right-4 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              i === index ? 'bg-indigo-400' : 'bg-zinc-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}