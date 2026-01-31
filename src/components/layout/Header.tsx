import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const links = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'como-eu-conduzo-os-projetos', label: 'Como eu conduzo os projetos' },
  { id: 'contato', label: 'Contato' },
]

export function Header() {
  const [active, setActive] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  // Hooks para gerenciar navegação híbrida
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    // O Observer só deve rodar se estivermos na Home
    if (!isHome) return

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
  }, [isHome])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHome) {

      e.preventDefault()

      setOpen(false)

      navigate(`/#${id}`)

      setTimeout(() => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)

    } else {
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <div className="w-[80vw] max-w-[1400px] px-6 h-16 flex items-center justify-between">
        <a
          href="/#inicio"
          className="font-bold tracking-tight text-white transition hover:text-indigo-400"
        >
          Keviny Joubert Cruz
        </a>

        <nav className="hidden md:flex gap-6 text-sm absolute right-5">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`
                transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60
                ${active === link.id && isHome ? 'text-indigo-400 font-medium' : 'text-zinc-300 hover:text-white'}
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(prev => !prev)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="
            md:hidden absolute right-5
            flex flex-col justify-center gap-[5px]
            w-8 h-8
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-indigo-500/60
            focus-visible:ring-offset-2
            focus-visible:ring-offset-zinc-950
          "
        >
          <span
            aria-hidden="true"
            className={`
              h-[2px] w-full bg-white transition-all duration-300
              ${open ? 'rotate-45 translate-y-[7px]' : ''}
            `}
          />
          <span
            aria-hidden="true"
            className={`
              h-[2px] w-full bg-white transition-all duration-300
              ${open ? 'opacity-0' : ''}
            `}
          />
          <span
            aria-hidden="true"
            className={`
              h-[2px] w-full bg-white transition-all duration-300
              ${open ? '-rotate-45 -translate-y-[7px]' : ''}
            `}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="menu-mobile"
          className="md:hidden bg-zinc-950 border-t border-zinc-800 animate-fade-in"
        >
          <nav
            aria-label="Navegação principal"
            className="flex flex-col px-6 py-4 gap-4"
          >
            {links.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={active === link.id ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={`
                  transition
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-indigo-500/60
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-zinc-950
                  ${active === link.id
                    ? 'text-indigo-400'
                    : 'text-zinc-300 hover:text-white'
                  }
                `}
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