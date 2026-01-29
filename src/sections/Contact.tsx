import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react'

export function Contact() {
  return (
    <section id="contato" className="py-32 scroll-mt-20">
      <div className="w-[80vw] max-w-[1400px] mx-auto px-6">

        {/* Título */}
        <h2 className="
          inline-block
          px-2
          pb-1
          text-2xl
          font-bold
          border-b
          border-white/60
        ">
          Contato
        </h2>

        {/* Texto */}
        <p className="mt-6 max-w-2xl px-2 text-zinc-300 leading-relaxed">
          Se você tem um projeto, uma ideia ou precisa resolver um problema
          real, podemos conversar.
        </p>

        <p className="mt-2 max-w-2xl px-2 text-zinc-400 leading-relaxed">
          Prefiro entender o contexto antes de propor qualquer solução.
        </p>

        {/* Botões */}
        <div className="
          mt-10
          px-2
          grid
          gap-4
          max-w-3xl
        ">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5581991708885?text=Olá%20Keviny,%0A%0A
            Vim%20através%20do%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%0A
            Podemos%20falar%20sobre%20escopo,%20prazo%20e%20viabilidade?"
            target="_blank"
            rel="noopener noreferrer"
            className="
            group
            flex
            items-center
            gap-4
            rounded-lg
            border
            border-zinc-800
            bg-zinc-900/40
            px-5
            py-4
            transition
            hover:border-green-500/50
            hover:bg-zinc-900/70
            "
          >
            <MessageCircle className="w-5 h-5 text-zinc-400 group-hover:text-green-400" />
            <span className="text-zinc-200">
            WhatsApp
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:joubert.kjc@gmail.com
              ?subject=Contato%20via%20site%20-%20Keviny%20Joubert
              &body=Olá%20Keviny,%0A%0AVim%20através%20do%20seu%20site%20e%20gostaria%20de%20conversar%20sobre:"
            className="
              group
              flex
              items-center
              gap-4
              rounded-lg
              border
              border-zinc-800
              bg-zinc-900/40
              px-5
              py-4
              transition
              hover:border-indigo-500/50
              hover:bg-zinc-900/70
            "
          >
            <Mail className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400" />
            <span className="text-zinc-200">
              joubert.kjc@gmail.com
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/kevinyjoubert"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-4
              rounded-lg
              border
              border-zinc-800
              bg-zinc-900/40
              px-5
              py-4
              transition
              hover:border-indigo-500/50
              hover:bg-zinc-900/70
            "
          >
            <Github className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400" />
            <span className="text-zinc-200">
              github.com/kevinyjoubert
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/keviny-joubert"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-4
              rounded-lg
              border
              border-zinc-800
              bg-zinc-900/40
              px-5
              py-4
              transition
              hover:border-indigo-500/50
              hover:bg-zinc-900/70
            "
          >
            <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400" />
            <span className="text-zinc-200">
              linkedin.com/in/keviny-joubert
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}