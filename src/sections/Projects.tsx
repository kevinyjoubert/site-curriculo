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
      className="h-screen"
    >
      <div className="h-full w-[80vw] max-w-[1400px] mx-auto px-6 flex flex-col">
        {/* Título fixo */}
        <h2 className="self-start inline-block px-2 pb-1 text-2xl font-bold border-b border-white">
          Projetos
        </h2>

        {/* Área principal */}
        <div className="flex-1 grid lg:grid-cols-2 gap-10 overflow-hidden py-6">

          {/* Lista de projetos (SCROLL INTERNO) */}
          <div className="overflow-y-auto pr-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
              {projects.slice(0, 10).map(project => (
                <div
                  key={project.slug}
                  onClick={() => setActiveProject(project)}
                  className={`cursor-pointer transition ${
                    activeProject.slug === project.slug
                      ? 'ring-2 ring-indigo-500'
                      : 'hover:ring-1 hover:ring-zinc-700'
                  }`}
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
                        Ver mais detalhes →
                      </Link>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Preview fixo (SEM SCROLL) */}
          <div className="h-full">
            <Carousel images={activeProject.images} />
          </div>

        </div>
      </div>
    </section>
  )
}