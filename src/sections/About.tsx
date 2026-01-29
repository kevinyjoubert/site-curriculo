import {
  Server,
  Layout,
  Wrench,
  Database
} from 'lucide-react'

export function About() {
  return (
    <section
      id="sobre"
      className="
        relative
        py-24
        scroll-mt-4
        overflow-hidden
      "
    >

      {/* Conteúdo */}
      <div className="relative w-[80vw] max-w-[1400px] mx-auto px-6">
        <h2 className="inline-block px-2 pb-1 text-2xl font-bold border-b border-white">
          Como eu trabalho
        </h2>

        <p className="mt-4 px-3 max-w-3xl text-zinc-300 leading-relaxed">
          Atuo há vários anos no desenvolvimento e manutenção de sistemas corporativos,
          lidando com integrações, banco de dados e regras de negócio que sustentam
          operações reais. Minha experiência passa por ambientes legados e modernos,
          sempre com foco em estabilidade, clareza e continuidade do sistema.
        </p>

        <p className="mt-4 px-3 max-w-3xl text-zinc-400">
          Antes de escrever código, busco entender o contexto, o impacto no negócio e
          como aquela solução vai se comportar no médio e longo prazo.
        </p>

        <div className="mt-10 px-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Frontend */}
          <div className="p-6 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm hover:border-zinc-700 cursor-default">
            <div className="flex items-center gap-3">
              <Layout className="w-5 h-5 text-zinc-400" />
              <h3 className="font-semibold">Interfaces funcionais</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-400">
              Interfaces objetivas, pensadas para o uso diário, sem excesso visual
              e com foco em usabilidade e manutenção.
            </p>
          </div>

          {/* Backend */}
          <div className="p-6 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm hover:border-zinc-700 cursor-default">
            <div className="flex items-center gap-3">
              <Server className="w-5 h-5 text-zinc-400" />
              <h3 className="font-semibold">Backend consistente</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-400">
              Desenvolvimento de APIs e serviços com regras de negócio claras,
              dados confiáveis e integração entre sistemas.
            </p>
          </div>

          {/* Banco de dados */}
          <div className="p-6 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm hover:border-zinc-700 cursor-default">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-zinc-400" />
              <h3 className="font-semibold">Banco de dados e integridade</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-400">
              Modelagem, consultas e rotinas focadas em consistência, performance e
              confiabilidade dos dados que sustentam o sistema.
            </p>
          </div>

          {/* Manutenção */}
          <div className="p-6 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm hover:border-zinc-700 cursor-default">
            <div className="flex items-center gap-3">
              <Wrench className="w-5 h-5 text-zinc-400" />
              <h3 className="font-semibold">Manutenção e evolução</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-400">
              Código organizado e decisões técnicas que facilitam ajustes futuros,
              correções e novas funcionalidades.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}