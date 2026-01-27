import { Github, Linkedin, MessageCircle } from 'lucide-react'

export function FloatingSocial() {
  return (
    <div className="
      fixed 
      right-6 
      bottom-6
      z-50 
      hidden md:flex 
      flex-col 
      gap-4
    ">
      {/* WhatsApp */}
      <a
        href="https://wa.me/5581991708885"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-12 h-12 
          flex items-center  justify-center
          rounded-full 
          bg-green-500 
          text-white 
          hover:scale-110 
          transition
        "
        aria-label="WhatsApp"
      >
        <MessageCircle size={20} />
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
        "
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/seu-usuario"
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
        "
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
    </div>
  )
}