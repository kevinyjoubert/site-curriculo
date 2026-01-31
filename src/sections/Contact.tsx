import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/Button'

export function Contact() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  
  // Estado para controlar se a seção está visível na tela
  const [isVisible, setIsVisible] = useState(false)
  
  // Referência para o elemento vigiado
  const sectionRef = useRef<HTMLElement>(null)
  
  const part1 = "Vamos construir algo "
  const part2 = "extraordinário"
  const part3 = " ?"

  // 1. Observer: Detecta quando a seção entra/sai da tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { 
        threshold: 0.3 
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // 2. Animação de Digitação
  useEffect(() => {
    if (!isVisible) {
      setText1('')
      setText2('')
      setText3('')
      return
    }

    let currentStep = 0
    const totalLength = part1.length + part2.length + part3.length
    
    const intervalId = setInterval(() => {
      if (currentStep < part1.length) {
        setText1(part1.slice(0, currentStep + 1))
      } else if (currentStep < part1.length + part2.length) {
        const offset = currentStep - part1.length
        setText2(part2.slice(0, offset + 1))
      } else if (currentStep < totalLength) {
        const offset = currentStep - (part1.length + part2.length)
        setText3(part3.slice(0, offset + 1))
      } else {
        clearInterval(intervalId)
      }
      currentStep++
    }, 50)

    return () => clearInterval(intervalId)
  }, [isVisible]) 

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Olá Keviny, vi seu portfólio e gostaria de discutir um projeto.")
    window.open(`https://wa.me/5581991708885?text=${text}`, '_blank')
  }

  // Classes base para animação de entrada (Fade In + Slide Up)
  const baseAnimationClass = "transition-all duration-1000 ease-out transform"
  const hiddenClass = "opacity-0 translate-y-12"
  const visibleClass = "opacity-100 translate-y-0"

  return (
    <section 
      id="contato" 
      ref={sectionRef} 
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Coluna da Esquerda */}
            <div>
              {/* Título com Digitação */}
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white min-h-[80px] md:min-h-[90px]">
                {text1}
                <span className="text-indigo-400">{text2}</span>
                {text3}
                <span className="animate-pulse text-indigo-400 inline-block ml-1">|</span>
              </h2>
              
              {/* Parágrafo com animação */}
              <p 
                className={`
                  text-zinc-400 mb-8 text-lg 
                  ${baseAnimationClass} delay-500
                  ${isVisible ? visibleClass : hiddenClass}
                `}
              >
                Estou disponível para novos projetos freelance. Se você busca soluções que atendam a sua necessidade,
                facilite a sua rotina com um visual perfeito e rápido, entre em contato agora comigo.
              </p>

              {/* Botões com animação */}
              <div 
                className={`
                  flex flex-col gap-4
                  ${baseAnimationClass} delay-700
                  ${isVisible ? visibleClass : hiddenClass}
                `}
              >
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white py-4 text-lg transition-transform hover:scale-105"
                >
                  Chamar no WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <a
                  href="mailto:joubert.kjc@gmail.com?subject=Contato%20via%20site%20-%20Keviny%20Joubert&body=Olá%20Keviny,%0A%0AVim%20através%20do%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                  className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60
                  "
                >
                  <Mail className="w-5 h-5" />
                  Enviar E-mail
                </a>
              </div>
            </div>

            {/* Coluna da Direita (Card Canais) - Animação (Delay 1000ms) */}
            <div 
              className={`
                bg-zinc-900/50 px-14 h-full flex justify-center flex-col rounded-2xl border border-zinc-800 backdrop-blur-sm
                ${baseAnimationClass} delay-1000
                ${isVisible ? visibleClass : hiddenClass}
              `}
            >
              <h3 className="text-xl font-semibold text-white mb-6">Canais Diretos</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 hover:bg-zinc-800/50 p-2 rounded transition-colors">
                  <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Telefone / WhatsApp</p>
                    <p className="text-zinc-200 font-medium">+55 (81) 99170-8885</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:bg-zinc-800/50 p-2 rounded transition-colors">
                  <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">E-mail Profissional</p>
                    <p className="text-zinc-200 font-medium">joubert.kjc@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:bg-zinc-800/50 p-2 rounded transition-colors">
                  <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Localização</p>
                    <p className="text-zinc-200 font-medium">Recife - PE (Disponível Remoto)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}