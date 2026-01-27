export function Contact() {
  return (
    <section id="contato" className="py-24 scroll-mt-20">
      <div className="w-[80vw] max-w-[1400px] mx-auto px-6">
        <h2 className="text-2xl font-bold">Contato</h2>

        <p className="mt-4 text-zinc-400">
          Quer conversar sobre um projeto ou ideia?
        </p>

        <div className="mt-6 flex flex-col gap-2">
          <a
            href="mailto:seuemail@email.com"
            className="text-indigo-400 hover:underline"
          >
            seuemail@email.com
          </a>

          <a
            href="https://github.com/seugithub"
            className="text-indigo-400 hover:underline"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/seulinkedin"
            className="text-indigo-400 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
