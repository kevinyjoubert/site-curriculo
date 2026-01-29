import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Carousel } from '../components/ui/Carousel'

export function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <section
      id="projetos"
      className="
        h-screen
        scroll-mt-20
        overflow-hidden
        relative
      "
    >
      <div
        className="
          h-[90vh]
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
            ({projects.length})
          </span>
        </h2>

        {/* Área principal */}
        <div
          className="
            flex-1
            grid
            lg:grid-cols-2
            gap-10
            overflow-hidden
            py-6
          "
        >
          {/* Lista de projetos */}
          <div className="relative overflow-y-auto pr-4">
            {/* Fade superior indicando scroll */}
            <div
              className="
                pointer-events-none
                sticky
                top-0
                h-3
                z-10
              "
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
              {projects.slice(0, 10).map(project => {
                const isActive = activeProject.slug === project.slug

                return (
                  <div
                    key={project.slug}
                    onClick={() => setActiveProject(project)}
                    className={`
                      cursor-pointer
                      transition-all
                      rounded-xl
                      $${isActive
                        ? `
                          bg-zinc-900/60
                          rounded-xl
                          scale-[1.01]
                          shadow-[3px_3px_0_rgba(99,102,241,0.45)]
                        `
                        : `hover:bg-zinc-900/40
                          hover:shadow-[3px_3px_0_rgba(124,102,255,0.30)]
                          `
                      }
                    `}
                  >
                    <Card title={project.title}>
                      <p>{project.summary}</p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                          <Badge key={tech} label={tech} />
                        ))}
                      </div>

                      <div className="mt-4">
                        <Link
                          to={`/projetos/${project.slug}`}
                          onClick={e => e.stopPropagation()}
                          className="text-sm text-indigo-400 hover:underline"
                        >
                          Detalhes do Projeto →
                        </Link>
                      </div>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Preview */}
          <div
            className="
              h-full
              rounded-xl
              bg-zinc-900/40
              p-4
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                relative
                h-full
                w-full
                overflow-hidden
                rounded-xl
                ring-1
                ring-white/10
              "
            >
              <Carousel images={activeProject.images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}