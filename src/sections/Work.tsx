import { MessageSquare, Code2, Rocket, LayoutTemplate } from 'lucide-react'
import { FadeInView } from '../components/ui/FadeInView'


const steps = [
  {
    icon: MessageSquare,
    title: 'Entender seu Objetivo',
    description: 'Primeiro, identifico onde seu negócio precisa melhorar. Seja para vender mais, organizar suas informações ou automatizar tarefas manuais e repetitivas.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  {
    icon: LayoutTemplate,
    title: 'Planejar a Solução',
    description: 'Defino a melhor estratégia. Se o foco é seu cliente, crio um visual incrível. Se é controle interno, estruturo seus dados com segurança e lógica inteligente.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  },
  {
    icon: Code2,
    title: 'Construção Completa',
    description: 'Desenvolvo tudo de ponta a ponta. Do visual que aparece na tela até o sistema complexo por trás. Você não precisa contratar várias pessoas, eu resolvo.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20'
  },
  {
    icon: Rocket,
    title: 'Tudo Pronto para Usar',
    description: 'Entrego a solução rodando perfeitamente. Configuro o que for necessário na internet ou no seu sistema e deixo pronto para você começar a ter resultados.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20'
  }
]

export function Work() {
  return (
    <section id="como-eu-conduzo-os-projetos" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Como transformo sua ideia em <span className="text-indigo-400">Realidade</span>
            </h2>
            <p className="text-zinc-400">
              Um processo transparente e eficiente, focado em entregar valor do início ao fim.
            </p>
          </div>
        </FadeInView>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Linha Vertical Central (Apenas Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <FadeInView key={index} threshold={0.4} className="w-full">
                  <div className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Metade Vazia */}
                    <div className="flex-1 w-full" />

                    {/* Ícone Central */}
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 z-10 shrink-0 my-4 md:my-0 md:mx-8 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                      <div className={`absolute inset-0 rounded-full ${step.bg} blur opacity-50`} />
                    </div>

                    {/* Conteúdo do Card */}
                    <div className="flex-1 w-full">
                      <div className={`
                        p-6 rounded-2xl border bg-zinc-950/50 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1
                        ${step.border} 
                        ${isEven ? 'md:text-right' : 'md:text-left'}
                        text-center md:text-left
                      `}>
                        <h3 className={`text-xl font-bold text-white mb-2 ${step.color}`}>
                          {step.title}
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                  </div>
                </FadeInView>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}