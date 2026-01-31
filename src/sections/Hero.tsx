import { ArrowRight, MessageCircle, Database, Code2, Cpu, FileText, Building2, FileSpreadsheet, Zap, Chrome, BarChart3 } from 'lucide-react'
import { FadeInView } from '../components/ui/FadeInView'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950"
    >
      {/* Efeitos de Fundo Cinematográficos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          
          <FadeInView delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Disponível para novos projetos
            </div>
          </FadeInView>

          <FadeInView delay={200}>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white">
              Keviny Joubert
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mt-2">
                Sistemas que escalam negócios.
              </span>
            </h1>
          </FadeInView>

          <FadeInView delay={300}>
            <p className="mt-8 text-lg md:text-xl text-zinc-400 leading-relaxed">
              Desenvolvedor Full Stack com foco em sistemas corporativos de alta performance. 
              Transformo processos complexos em ferramentas digitais simples, seguras e lucrativas.
            </p>
          </FadeInView>

          <FadeInView delay={400}>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 items-stretch">
              {[
                { icon: Code2, text: "Desenvolvimento Web e Aplicações" },
                { icon: Database, text: "Arquitetura de Dados" },
                { icon: Cpu, text: "Automações & Integrações(APIs)" },
                { icon: Building2, text: "Soluções no ERP Sankhya" },
                { icon: FileText, text: "Relatórios Formatados" },
                { icon: BarChart3, text: "Dashboards" },
                { icon: FileSpreadsheet, text: "Automações em Google Sheets" },
                { icon: Zap, text: "Soluções com Google Apps Script" },
                { icon: Chrome, text: "Integração com Ferramentas do Google" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-zinc-800/80 border border-zinc-800 p-3 rounded-xl text-zinc-300 hover:border-indigo-500/50 hover:bg-zinc-900/80 transition-all duration-300 w-full"
                >
                  <item.icon className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-xs md:text-sm font-medium leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </FadeInView>

          <FadeInView delay={500}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href="#projetos"
                className="group px-8 py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-zinc-300 transition-all active:scale-95"
              >
                Ver Soluções Reais
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contato"
                className="px-8 py-4 rounded-xl border border-zinc-800 text-white font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-zinc-500" />
                Iniciar uma conversa
              </a>
            </div>
          </FadeInView>

        </div>
      </div>
    </section>
  )
}