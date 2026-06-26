export function Footer() {
  return (
    <footer role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8">

        {/* Separador */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1A1F2E] to-transparent mb-5" />

        {/* Copyright centralizado */}
        <p className="text-center text-[11px] font-mono text-[#334155] tracking-wide">
          © {new Date().getFullYear()} Lucas Silva Barboza. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}