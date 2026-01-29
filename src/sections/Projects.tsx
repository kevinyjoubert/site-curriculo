import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projects-title"
      className="min-h-screen scroll-mt-20"
    >
      <div
        className="
          min-h-[90vh]
          w-[80vw]
          max-w-[1400px]
          mx-auto
          px-6
          flex
          flex-col
        "
      >
        {/* Título */}
        <h2
          id="projects-title"
          className="
            self-start
            inline-flex
            items-center
            gap-2
            px-2
            pb-1
            text-2xl
            font-bold
            border-b
            border-white/60
          "
        >
          Projetos
          <span className="text-sm font-normal text-zinc-400">
            ({projects.length} destaques)
          </span>
        </h2>

        {/* Lista */}
        <div className="flex-1 py-6">
          <div
            className="
              md:h-full
              md:overflow-y-auto
              pr-4
            "
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6"
              aria-live="polite"
            >
              {projects.slice(0, 10).map(project => (
                <Card
                  key={project.slug}
                  title={project.title}
                  className="
                    transition-colors
                    bg-zinc-900/70
                    hover:bg-zinc-900/45
                    hover:border-zinc-700
                  "
                >
                  <p>{project.summary}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <Badge key={tech} label={tech} />
                    ))}
                  </div>

                  <div className="mt-4">
                    <Link
                      to={`/projetos/${project.slug}`}
                      className="
                        text-sm text-indigo-400 hover:underline
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-indigo-500/60
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-zinc-950
                      "
                      aria-label={`Ver detalhes do projeto ${project.title}`}
                    >
                      Ver detalhes →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}