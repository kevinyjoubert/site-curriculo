/* Seção de Contato completa com alinhamento corrigido e integração do componente Button */
import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, ArrowRight, Check, Copy } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { FadeInView } from '../components/ui/FadeInView'
import { useInView } from '../hooks/UseInView'

export function Contact() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const { ref: sectionRef, visible: isVisible } = useInView<HTMLElement>(0.3)

  const part1 = "Vamos construir algo "
  const part2 = "extraordinário"
  const part3 = " ?"

  useEffect(() => {
    if (!isVisible) {
      setText1(''); setText2(''); setText3('')
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

  const copyToClipboard = async (text: string, id: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedItem(id);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
    }
  }

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Olá Keviny Joubert, vi seu portfólio e gostaria de discutir um projeto.")
    window.open(`https://wa.me/5581991708885?text=${text}`, '_blank')
  }

  const emailSubject = encodeURIComponent("Contato via Portfólio - [Seu Nome/Empresa]");
  const emailBody = encodeURIComponent("Olá Keviny Joubert,\n\nVi seu portfólio e gostaria de conversar sobre um projeto de...");

  return (
    <section id="contato" ref={sectionRef} className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white min-h-[100px] md:min-h-[90px] leading-tight">
                {text1}
                <span className="text-indigo-400">{text2}</span>
                {text3}
                <span className="animate-pulse text-indigo-400 inline-block ml-1">|</span>
              </h2>

              <FadeInView delay={500}>
                <p className="text-zinc-400 mb-8 text-base md:text-lg">
                  Estou disponível para novos projetos freelance. Se você busca soluções que atendam a sua necessidade, entre em contato agora.
                </p>
              </FadeInView>

              <FadeInView delay={700} className="flex flex-col gap-4">
                <Button
                  onClick={handleWhatsAppClick}
                  variant="custom"
                  className="w-full md:w-auto text-white py-4 px-8 bg-[#25D366] hover:bg-[#128C7E] text-lg font-bold shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Chamar no WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  href={`mailto:joubert.kjc@gmail.com?subject=${emailSubject}&body=${emailBody}`}
                  variant="secondary"
                  className="w-full md:w-auto py-4 px-6 bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  <Mail className="w-5 h-5 mr-2" /> Enviar E-mail
                </Button>
              </FadeInView>
            </div>

            <FadeInView delay={1000} className="h-full">
              <div className="bg-zinc-900/40 p-8 md:px-12 md:py-12 h-full flex flex-col justify-center rounded-2xl border border-zinc-800/50 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-white mb-8 text-center md:text-left">Canais Diretos</h3>
                <div className="space-y-6">

                  {/* Telefone */}
                  <Button
                    variant="custom"
                    onClick={() => copyToClipboard('+5581991708885', 'phone')}
                    className="w-full flex items-start gap-4 hover:bg-zinc-800/40 p-3 px-3 rounded-xl transition-all group border border-transparent hover:border-zinc-700/50 text-left justify-start"
                  >
                    <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500/20">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-zinc-500 mb-1 uppercase tracking-wider font-bold">Telefone / WhatsApp</p>
                      <p className="text-zinc-200 font-medium">+55 (81) 99170-8885</p>
                    </div>
                    <div className="self-center text-zinc-600 ml-2">
                      {copiedItem === 'phone' ? (
                        <Check className="w-4 h-4 text-green-500 animate-in zoom-in" />
                      ) : (
                        <Copy className="w-4 h-4 opacity-100 transition-opacity" />
                      )}
                    </div>
                  </Button>

                  {/* E-mail */}
                  <Button
                    variant="custom"
                    onClick={() => copyToClipboard('joubert.kjc@gmail.com', 'email')}
                    className="w-full flex items-start gap-4 hover:bg-zinc-800/40 p-3 px-3 rounded-xl transition-all group border border-transparent hover:border-zinc-700/50 text-left justify-start"
                  >
                    <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500/20">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-zinc-500 mb-1 uppercase tracking-wider font-bold">E-mail Profissional</p>
                      <p className="text-zinc-200 font-medium">joubert.kjc@gmail.com</p>
                    </div>
                    <div className="self-center text-zinc-600 ml-2">
                      {copiedItem === 'email' ? (
                        <Check className="w-4 h-4 text-green-500 animate-in zoom-in" />
                      ) : (
                        <Copy className="w-4 h-4 opacity-100 transition-opacity" />
                      )}
                    </div>
                  </Button>

                  {/* Localização */}
                  <div className="w-full flex items-start gap-4 p-3 px-6 border border-transparent">
                    <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-zinc-500 mb-1 uppercase tracking-wider font-bold">Localização</p>
                      <p className="text-zinc-200 font-medium">Recife - PE (Disponível Remoto)</p>
                    </div>
                    <div className="ml-2 w-4" />
                  </div>
                </div>
              </div>
            </FadeInView>

          </div>
        </div>
      </div>
    </section>
  )
}