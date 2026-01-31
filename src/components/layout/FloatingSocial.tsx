import { Github, Linkedin, MessageCircle } from 'lucide-react'

export function FloatingSocial() {
  return (
    <nav
      aria-label="Redes sociais"
      className="
      fixed 
      right-6 
      bottom-6
      z-50 
      hidden md:flex 
      flex-col 
      gap-4
    "
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/5581991708885?text=Olá%20Keviny,%20vim%20através%20do%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-12 h-12 
          flex items-center justify-center
          rounded-full 
          bg-green-500 
          text-white 
          hover:scale-110 
          transition
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-indigo-500/60
          focus-visible:ring-offset-2
          focus-visible:ring-offset-zinc-950
        "
        aria-label="WhatsApp"
      >
        <MessageCircle aria-hidden="true" size={20} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/kevinyjoubert"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-12 h-12 
          flex items-center justify-center 
          rounded-full 
          bg-zinc-800 
          text-white 
          hover:scale-110 
          transition
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-indigo-500/60
          focus-visible:ring-offset-2
          focus-visible:ring-offset-zinc-950
        "
        aria-label="GitHub"
      >
        <Github aria-hidden="true" size={20} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/keviny-joubert"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-12 h-12 
          flex items-center justify-center 
          rounded-full 
          bg-blue-600 
          text-white 
          hover:scale-110 
          transition
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-indigo-500/60
          focus-visible:ring-offset-2
          focus-visible:ring-offset-zinc-950
        "
        aria-label="LinkedIn"
      >
        <Linkedin aria-hidden="true" size={20} />
      </a>
    </nav>
  )
}