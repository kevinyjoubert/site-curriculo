import { useState } from 'react'
import { ArrowUpRight, Lock, Code2, Database, LayoutTemplate } from 'lucide-react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import { Button } from '../components/ui/Button'
import { FadeInView } from '../components/ui/FadeInView'
import { ProjectModal } from '../components/ui/ProjectModal'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projetos" className="py-32 bg-zinc-950 relative overflow-hidden">
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

            <p className="mt-6 text-zinc-500 text-sm flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Clique nos cards para ver os detalhes
            </p>
          </div>
        </FadeInView>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.title.includes('Dashboard') || project.title.includes('Painel') 
              ? LayoutTemplate 
              : project.stack.includes('Java') || project.stack.includes('SQL') 
                ? Database 
                : Code2

            return (
              <FadeInView key={project.slug} delay={index * 100} className="h-full">
                <Button
                  variant="custom"
                  onClick={() => setSelectedProject(project)}
                  className="group relative w-full h-full p-8 rounded-2xl bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 text-left items-start justify-start flex-col px-8 py-8"
                >
                  <div className="flex justify-between items-start mb-6 w-full">
                    <div className="p-3 rounded-lg bg-zinc-800/50 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/10 group-hover:text-indigo-300 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    {project.images.length === 0 && (
                      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-zinc-500 font-bold px-2 py-1 rounded bg-zinc-950/50 border border-zinc-800">
                        <Lock className="w-3 h-3" /> Empresa Privada
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3 group-hover:text-zinc-300 transition-colors">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 border border-zinc-700/30 group-hover:border-zinc-600/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-xs px-2 py-1 text-zinc-600 font-medium">+{project.stack.length - 3}</span>
                    )}
                  </div>

                  <ArrowUpRight className="absolute top-3 right-3 w-5 h-5 text-zinc-600 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </Button>
              </FadeInView>
            )
          })}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}