import { Github, Linkedin, MessageCircle } from 'lucide-react'

export function FloatingSocial() {
  return (
    <nav
      aria-label="Redes sociais"
      className="fixed right-6 bottom-6 z-50 flex flex-col gap-4"
    >
      {/* WhatsApp - Sempre visível */}
      <a
        href="https://wa.me/5581991708885?text=Olá%20Keviny,%20vim%20através%20do%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/20 hover:scale-110 active:scale-95 transition-all"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* GitHub e LinkedIn - Ocultos no mobile */}
      <div className="hidden md:flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <a
          href="https://github.com/kevinyjoubert"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover:scale-110"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>

        <a
          href="https://linkedin.com/in/keviny-joubert"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </nav>
  )
}