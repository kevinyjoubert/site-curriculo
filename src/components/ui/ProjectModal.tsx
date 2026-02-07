import { useEffect } from 'react'
import { X, ExternalLink, CheckCircle2 } from 'lucide-react'
import type { Project } from '../../data/projects'
import { Button } from '../ui/Button'
import { Badge } from './Badge'
import { Carousel } from './Carousel'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {

  // trava scroll da página
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  // ESC para fechar
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">

        {/* BOTÃO FECHAR FIXO */}
        <Button
          variant="custom"
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 text-white hover:bg-white hover:text-black backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* HEADER */}
        <div className="relative h-64 md:h-80 w-full">
          {project.images?.[0] ? (
            <>
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
              <span className="text-zinc-500">Projeto Privado - Imagens privadas</span>
            </div>
          )}

          <div className="absolute bottom-0 left-0 p-8 w-full">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-zinc-300 text-lg line-clamp-1">
              {project.summary}
            </p>
          </div>
        </div>

        {/* CONTEÚDO COM SCROLL */}
        <div className="overflow-y-auto max-h-[calc(90vh-20rem)]">

          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* COLUNA PRINCIPAL */}
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Sobre o Projeto
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-950/50 p-6 rounded-xl border border-zinc-800/50">
                  <h4 className="text-indigo-400 font-medium mb-3">
                    O Problema
                  </h4>
                  <p className="text-sm text-zinc-400">
                    {project.problem}
                  </p>
                </div>

                <div className="bg-zinc-950/50 p-6 rounded-xl border border-zinc-800/50">
                  <h4 className="text-emerald-400 font-medium mb-3">
                    A Solução
                  </h4>
                  <p className="text-sm text-zinc-400">
                    {project.solution}
                  </p>
                </div>
              </div>

              {project.images && project.images.length > 1 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-6">
                    Galeria
                  </h3>

                  <Carousel images={project.images} />
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="space-y-8">

              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  variant="primary"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Projeto Online
                </Button>
              )}

              <div>
                <h4 className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-wider">
                  Stack Tecnológico
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <Badge key={tech} label={tech} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-wider">
                  Destaques
                </h4>
                <ul className="space-y-3">
                  {project.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-zinc-300 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
