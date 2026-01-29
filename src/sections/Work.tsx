export function Work() {
  return (
    <section
      id="como-eu-conduzo-os-projetos"
      aria-labelledby="work-title"
      className="py-24 scroll-mt-4"
    >
      <div className="w-[80vw] max-w-[1400px] mx-auto px-6">
        <h2
          id="work-title"
          className="
            inline-block
            px-2
            pb-1
            text-2xl
            font-bold
            border-b
            border-white/60
          "
        >
          Como eu conduzo os projetos
        </h2>

        <div className="mt-10 max-w-4xl space-y-8 text-zinc-400">

          {/* Etapa 1 */}
          <section aria-labelledby="work-step-1">
            <h3
              id="work-step-1"
              className="text-zinc-200 font-semibold"
            >
              1. Entendimento do problema
            </h3>

            <p className="mt-2 leading-relaxed">
              Mapeio a necessidade do projeto, regras de negócio, exceções,
              dependências e causas antes de executar.
            </p>

            <p className="mt-2 leading-relaxed">
              Estruturo a arquitetura, documentação e etapas do desenvolvimento
              desde o início, porque perguntar cedo evita retrabalho e atrasos
              na entrega.
            </p>
          </section>

          {/* Etapa 2 */}
          <section aria-labelledby="work-step-2">
            <h3
              id="work-step-2"
              className="text-zinc-200 font-semibold"
            >
              2. Solução Personalizada
            </h3>

            <p className="mt-2 leading-relaxed">
              Entrego uma solução personalizada de acordo com o que foi solicitado
              e com a real necessidade do projeto.
            </p>

            <p className="mt-2 leading-relaxed">
              O foco é construir algo funcional, claro e alinhado ao uso prático,
              não apenas “bonito”, mas efetivo no que precisa ser feito.
            </p>
          </section>

          {/* Etapa 3 */}
          <section aria-labelledby="work-step-3">
            <h3
              id="work-step-3"
              className="text-zinc-200 font-semibold"
            >
              3. Estrutura pensando em manutenção
            </h3>

            <p className="mt-2 leading-relaxed">
              Estruturo o projeto pensando em manutenção, evolução e correções futuras,
              para que mudanças não se tornem um problema.
            </p>

            <p className="mt-2 leading-relaxed">
              Um sistema bem organizado permite ajustes rápidos e seguros, evitando
              que pequenas alterações exijam reescritas ou soluções improvisadas.
            </p>
          </section>

          {/* Etapa 4 */}
          <section aria-labelledby="work-step-4">
            <h3
              id="work-step-4"
              className="text-zinc-200 font-semibold"
            >
              4. Evolução contínua
            </h3>

            <p className="mt-2 leading-relaxed">
              Sistemas evoluem com o uso. Ajusto estrutura, nomenclaturas e fluxos
              conforme novas demandas surgem.
            </p>

            <p className="mt-2 leading-relaxed">
              Refatorações são feitas com critério, garantindo evolução sem comprometer
              estabilidade ou prazos.
            </p>
          </section>

        </div>
      </div>
    </section>
  )
}