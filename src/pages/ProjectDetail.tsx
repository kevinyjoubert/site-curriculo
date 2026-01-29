import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { Badge } from '../components/ui/Badge'
import { Header } from '../components/layout/Header'
import { Carousel } from '../components/ui/Carousel'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        role="alert"
        aria-live="assertive"
      >
        <p>Projeto não encontrado.</p>
      </div>
    )
  }

  return (
    <>
      <Header />

      <main
        className="pt-24 bg-zinc-950 text-zinc-100 min-h-screen"
        role="main"
        aria-labelledby="project-title"
      >
        <div className="max-w-4xl mx-auto px-6">

          {/* Voltar */}
          <a
            href="/#projetos"
            className="
              text-sm text-indigo-400 hover:underline
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-indigo-500/60
              focus-visible:ring-offset-2
              focus-visible:ring-offset-zinc-950
            "
            aria-label="Voltar para a lista de projetos"
          >
            ← Voltar
          </a>

          {/* Título */}
          <h1
            id="project-title"
            className="mt-6 text-4xl font-bold"
          >
            {project.title}
          </h1>

          {/* Descrição */}
          <p className="mt-4 text-zinc-400">
            {project.description}
          </p>

          {/* Stack */}
          <section
            className="mt-6"
            aria-labelledby="project-stack"
          >
            <h2 id="project-stack" className="sr-only">
              Tecnologias utilizadas
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <Badge key={tech} label={tech} />
              ))}
            </div>
          </section>

          {/* Problema */}
          <section
            className="mt-12"
            aria-labelledby="project-problem"
          >
            <h2
              id="project-problem"
              className="text-xl font-semibold"
            >
              Problema
            </h2>
            <p className="mt-3 text-zinc-400">
              {project.problem}
            </p>
          </section>

          {/* Solução */}
          <section
            className="mt-10"
            aria-labelledby="project-solution"
          >
            <h2
              id="project-solution"
              className="text-xl font-semibold"
            >
              Solução
            </h2>
            <p className="mt-3 text-zinc-400">
              {project.solution}
            </p>
          </section>

          {/* Destaques */}
          <section
            className="mt-10"
            aria-labelledby="project-highlights"
          >
            <h2
              id="project-highlights"
              className="text-xl font-semibold"
            >
              Principais pontos
            </h2>

            <ul className="mt-4 list-disc list-inside text-zinc-400 space-y-2">
              {project.highlights.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Galeria */}
          {project.images?.length > 0 && (
            <section
              className="mt-12"
              aria-labelledby="project-gallery"
            >
              <h2 id="project-gallery" className="sr-only">
                Imagens do projeto
              </h2>

              <Carousel images={project.images} />
            </section>
          )}

        </div>
      </main>
    </>
  )
}