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
      <div className="min-h-screen flex items-center justify-center">
        <p>Projeto não encontrado.</p>
      </div>
    )
  }

  return (
    <>
      <Header />

      <main className="pt-24 bg-zinc-950 text-zinc-100 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">

          <a
            href="/#projetos"
            className="text-sm text-indigo-400 hover:underline"
          >
            ← Voltar
          </a>

          <h1 className="mt-6 text-4xl font-bold">
            {project.title}
          </h1>

          <p className="mt-4 text-zinc-400">
            {project.description}
          </p>

          {/* Stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <Badge key={tech} label={tech} />
            ))}
          </div>

          {/* Problema */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold">Problema</h2>
            <p className="mt-3 text-zinc-400">
              {project.problem}
            </p>
          </section>

          {/* Solução */}
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Solução</h2>
            <p className="mt-3 text-zinc-400">
              {project.solution}
            </p>
          </section>

          {/* Destaques */}
          <section className="mt-10">
            <h2 className="text-xl font-semibold">
              Principais pontos
            </h2>

            <ul className="mt-4 list-disc list-inside text-zinc-400 space-y-2">
              {project.highlights.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <Carousel images={project.images} />

        </div>
      </main>

    </>
  )
}
