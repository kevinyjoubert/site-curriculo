import { Github, Linkedin, MessageCircle } from 'lucide-react'
import { Button } from '../ui/Button'

export function FloatingSocial() {
  const iconButtonClass = "w-12 h-12 p-0 !inline-flex items-center justify-center rounded-full min-h-0 min-w-0 leading-none overflow-hidden"

  return (
    <nav
      aria-label="Redes sociais"
      className="fixed right-6 bottom-6 z-50 flex flex-col gap-4"
    >
      <Button
        href="https://wa.me/5581991708885?text=Olá%20Keviny,%20vim%20através%20do%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
        target="_blank"
        rel="noopener noreferrer"
        variant="custom"
        className={`${iconButtonClass} bg-[#25D366] text-white shadow-lg shadow-green-500/20 hover:scale-110 active:scale-95 border-none`}
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} className="shrink-0" />
      </Button>

      <div className="hidden md:flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <Button
          href="https://github.com/kevinyjoubert"
          target="_blank"
          rel="noopener noreferrer"
          variant="custom"
          className={`${iconButtonClass} bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:scale-110`}
          aria-label="GitHub"
        >
          <Github size={20} className="shrink-0" />
        </Button>

        <Button
          href="https://linkedin.com/in/keviny-joubert"
          target="_blank"
          rel="noopener noreferrer"
          variant="custom"
          className={`${iconButtonClass} bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:scale-110`}
          aria-label="LinkedIn"
        >
          <Linkedin size={20} className="shrink-0" />
        </Button>
      </div>
    </nav>
  )
}