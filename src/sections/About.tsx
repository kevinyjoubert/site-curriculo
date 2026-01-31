import { Server, Layout, Wrench, Database } from 'lucide-react'
import { FadeInView } from '../components/ui/FadeInView'

export function About() {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden bg-zinc-950">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zinc-900/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <FadeInView>
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                Mais do que tecnologia, <br />
                <span className="text-indigo-400">entrego soluções reais.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                <p>
                  Ajudo empresas e empreendedores a transformarem ideias em ferramentas digitais lucrativas. 
                  Meu trabalho é garantir que sua tecnologia funcione sem interrupções, permitindo 
                  que você foque no que realmente importa: o seu negócio.
                </p>
                <p>
                  Minha abordagem é estratégica. Antes de criar qualquer funcionalidade, entendo 
                  seus objetivos comerciais para entregar uma solução que não apenas resolva 
                  o problema hoje, mas que cresça junto com sua empresa.
                </p>
                <p className="text-white font-medium">
                  Foco total em segurança, agilidade e retorno sobre seu investimento.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {['Sistemas Web', 'Aplicativos Práticos', 'Organização de Dados', 'Integração de Ferramentas', 'ERP Sankhya', 'Relatórios Formatados', 'Dashboards', 'Automações em Google Sheets', 'Soluções com Google Apps Script', 'Integração com Ferramentas do Google'].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeInView>

          <div className="grid sm:grid-cols-2 gap-6">
            
            <FadeInView delay={100} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/30 hover:bg-zinc-900/80 transition-all duration-300 group">
                <div className="mb-6 p-4 rounded-xl bg-zinc-950 w-fit group-hover:bg-indigo-500/10 transition-colors">
                  <Layout className="w-8 h-8 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Telas Intuitivas</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Crio interfaces fáceis de usar para você e sua equipe. O objetivo é economizar 
                  seu tempo com um visual limpo, moderno e que funciona em qualquer dispositivo.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={200} className="h-full sm:translate-y-12">
              <div className="h-full p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/30 hover:bg-zinc-900/80 transition-all duration-300 group">
                <div className="mb-6 p-4 rounded-xl bg-zinc-950 w-fit group-hover:bg-purple-500/10 transition-colors">
                  <Server className="w-8 h-8 text-zinc-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Sistemas Seguros</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Construo a estrutura interna do seu projeto com foco em estabilidade. 
                  Sistemas que conectam suas ferramentas e garantem que tudo funcione perfeitamente.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={300} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 hover:bg-zinc-900/80 transition-all duration-300 group">
                <div className="mb-6 p-4 rounded-xl bg-zinc-950 w-fit group-hover:bg-emerald-500/10 transition-colors">
                  <Database className="w-8 h-8 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Gestão de Dados</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Organizo as informações do seu negócio para que sejam confiáveis. 
                  Tenha dados precisos para tomar decisões melhores e evitar prejuízos.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={400} className="h-full sm:translate-y-12">
              <div className="h-full p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 hover:bg-zinc-900/80 transition-all duration-300 group">
                <div className="mb-6 p-4 rounded-xl bg-zinc-950 w-fit group-hover:bg-blue-500/10 transition-colors">
                  <Wrench className="w-8 h-8 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Suporte e Evolução</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Não apenas entrego e sumo. Construo projetos organizados que permitem 
                  atualizações rápidas e melhorias contínuas sem dores de cabeça.
                </p>
              </div>
            </FadeInView>

          </div>
        </div>
      </div>
    </section>
  )
}