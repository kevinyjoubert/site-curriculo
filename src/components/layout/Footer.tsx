export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">
      <div className="w-[80vw] max-w-[1400px] px-6 text-sm text-zinc-500 flex flex-col md:flex-row justify-between gap-4">
        <span>
          © {new Date().getFullYear()} Joubert
        </span>

        <span>
          Desenvolvedor de Sistemas
        </span>
      </div>
    </footer>
  )
}
