import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const links = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'como-trabalho', label: 'Como Trabalho' },
  { id: 'contato', label: 'Contato' },
]

export function Header() {
  const [active, setActive] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) return
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [isHome])

  /**
   * Executa o scroll suave sem alterar a URL (#hash)
   */
  const handleScrollNavigation = (id: string) => {
    setOpen(false)
    
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <div className="w-[90vw] max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleScrollNavigation('inicio')}
          className="font-bold tracking-tight text-white transition hover:text-indigo-400"
        >
          Keviny Joubert Cruz
        </button>

        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => handleScrollNavigation(link.id)}
              className={`
                transition focus:outline-none 
                ${active === link.id && isHome ? 'text-indigo-400 font-medium' : 'text-zinc-300 hover:text-white'}
              `}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile button */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px] w-8 h-8 justify-center">
          <span className={`h-[2px] w-full bg-white transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`h-[2px] w-full bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`h-[2px] w-full bg-white transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 animate-fade-in">
          <nav className="flex flex-col px-6 py-6 gap-6">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => handleScrollNavigation(link.id)}
                className={`text-left transition ${active === link.id ? 'text-indigo-400' : 'text-zinc-300'}`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}