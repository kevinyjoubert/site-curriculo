import { Link } from 'react-router-dom'
import { ArrowUpRight, Lock, Code2, Database, LayoutTemplate } from 'lucide-react'
import { projects } from '../data/projects'
import { FadeInView } from '../components/ui/FadeInView'

export function Projects() {
  return (
    <section id="projetos" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeInView>
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Projetos Entregues
            </h2>
            <p className="text-zinc-400 text-lg">
              Alguns projetos são públicos, outros são confidenciais.
              Em todos, o foco é a excelência técnica e resolução de problemas complexos.
            </p>

            <p className="mt-6 max-w-2xl text-zinc-400 text-sm">
              Clique para mais detalhes de cada projeto
            </p>
          </div>
        </FadeInView>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            // Escolhe um ícone baseado no tipo de projeto
            const Icon = project.title.includes('Dashboard') ? LayoutTemplate : project.stack.includes('Java') ? Database : Code2

            return (
              <FadeInView key={project.slug} delay={index * 100} className="h-full">
                <Link
                  to={`/projetos/${project.slug}`}
                  className="group relative block h-full p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300"
                >
                  {/* Cabeçalho do Card */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-lg bg-zinc-800/50 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Se não tiver imagem, assume que é privado/interno */}
                    {project.images.length === 0 && (
                      <div className="flex items-center gap-1 text-xs text-zinc-500 font-medium px-2 py-1 rounded bg-zinc-900 border border-zinc-800">
                        <Lock className="w-3 h-3" /> Projeto Empresa Privada
                      </div>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Footer com Techs */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-xs px-2 py-1 text-zinc-500">+{project.stack.length - 3}</span>
                    )}
                  </div>

                  {/* Ícone de seta absoluta no topo */}
                  <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-zinc-600 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </Link>
              </FadeInView>
            )
          })}
        </div>
      </div>
    </section>
  )
}