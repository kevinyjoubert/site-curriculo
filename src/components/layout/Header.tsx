import { useEffect, useState } from 'react'

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'como-trabalho', label: 'Como trabalho' },
  { id: 'contato', label: 'Contato' },
]

export function Header() {
  const [active, setActive] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <div className="w-[80vw] max-w-[1400px] px-6 h-16 flex items-center justify-between">
        
        {/* Botão voltar ao início */}
        <a
          href="#"
          className="font-bold tracking-tight text-white hover:text-indigo-400 transition"
        >
          Keviny Joubert Cruz
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition ${
                active === link.id
                  ? 'text-indigo-400 font-medium'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 animate-fade-in">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`transition ${
                  active === link.id
                    ? 'text-indigo-400'
                    : 'text-zinc-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
