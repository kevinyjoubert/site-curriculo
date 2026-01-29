export function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        animate-fade-in
        
      "
    >

      {/* Conteúdo */}
      <div
        className="
          relative
          w-[80vw]
          max-w-[1400px]
          mx-auto
          px-6
          pt-24
          pb-32
        "
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Keviny Joubert Cruz
          <span className="block text-indigo-400 mt-2">
            Desenvolvedor de Sistemas
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-300 text-lg leading-relaxed">
          Atuo há quase uma década em TI, desenvolvendo sistemas corporativos
          do zero, desde a interface e experiência do usuário até regras de
          negócio do sistema, até estrutura e tratamento em banco de dados.
        </p>

        <p className="mt-2 max-w-2xl text-zinc-300 text-lg leading-relaxed">
          Trabalho com desenvolvimento full stack, integrações e automações,
          entregando soluções que sustentam operações reais e funcionam fora
          do ambiente de teste.
        </p>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Meu foco é transformar necessidade em sistema estável,
          com código organizado e decisões técnicas pensadas para o médio
          e longo prazo.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projetos"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
          >
            Ver projetos reais
          </a>

          <a
            href="#contato"
            className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 transition"
          >
            Falar comigo
          </a>
        </div>
      </div>
    </section>
  )
}