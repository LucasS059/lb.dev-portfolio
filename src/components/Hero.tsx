import { GitFork, Link2, ArrowRight } from 'lucide-react'
import lucasImg from '../assets/Images/Lucas.jpg'

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Lucas Silva Barboza — Desenvolvedor Fullstack"
      className="min-h-screen pt-16 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 w-full min-h-[calc(100vh-4rem)] flex items-center py-14 lg:py-0">

        {/* ── Layout: sidebar editorial + conteúdo ── */}
        <div className="w-full flex gap-0 lg:gap-14 xl:gap-20">

          {/* Sidebar esquerda — só desktop */}
          <aside className="hidden lg:flex flex-col justify-between w-28 xl:w-32 flex-shrink-0 border-r border-[#1E2535] pr-8 py-2">
            <div className="space-y-1">
              <p className="text-[9px] font-mono text-[#334155] tracking-[0.18em] uppercase">Role</p>
              <p className="text-[11px] font-mono text-[#475569] leading-relaxed">
                Dev<br />Fullstack
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-[9px] font-mono text-[#334155] tracking-[0.18em] uppercase">Base</p>
              <p className="text-[11px] font-mono text-[#475569] leading-relaxed">
                São Paulo<br />Brasil
              </p>
            </div>

            <div className="space-y-2.5">
              <a
                href="https://github.com/LucasS059"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-mono text-[#334155] hover:text-[#64748B] transition-colors duration-200"
              >
                <GitFork size={10} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-barboza-dev-br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-mono text-[#334155] hover:text-[#64748B] transition-colors duration-200"
              >
                <Link2 size={10} />
                LinkedIn
              </a>
            </div>
          </aside>

          {/* ── Área principal ── */}
          <div className="flex-1 flex flex-col lg:flex-row items-center gap-10 lg:gap-10 xl:gap-12">

            {/* Texto */}
            <div className="flex-1 min-w-0">
              <h1
                className="font-display font-bold text-white leading-[0.88] tracking-tight mb-8"
                style={{ fontSize: 'clamp(3.2rem, 7.5vw, 7.5rem)' }}
              >
                <span className="block">Lucas</span>
                <span className="block">Barboza.</span>
              </h1>

              <div className="mb-9 space-y-2">
                <p
                  className="text-[#CBD5E1] leading-snug"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}
                >
                  Você tem uma ideia.{' '}
                  <span className="text-white font-medium">Eu coloco no ar.</span>
                </p>
                <p className="text-sm text-[#64748B]">
                  Sites, aplicativos e sistemas — do zero ao deploy em produção.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a href="#projetos" className="group btn-primary">
                  Ver projetos
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a href="#contato" className="btn-ghost">
                  Entrar em contato
                </a>
              </div>

              {/* Sociais — visível só no mobile (sidebar cuida do desktop) */}
              <div className="flex items-center gap-5 lg:hidden">
                <a
                  href="https://github.com/LucasS059"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#475569] hover:text-[#94A3B8] transition-colors duration-200"
                >
                  <GitFork size={13} />
                  <span className="font-mono">LucasS059</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-barboza-dev-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#475569] hover:text-[#94A3B8] transition-colors duration-200"
                >
                  <Link2 size={13} />
                  <span className="font-mono">linkedin</span>
                </a>
              </div>
            </div>

            {/* Foto */}
            <div className="flex-shrink-0 flex justify-center lg:justify-end">
              <img
                src={lucasImg}
                alt="Lucas Silva Barboza — Desenvolvedor Fullstack"
                className="rounded-2xl object-cover shadow-2xl shadow-black/60"
                style={{
                  width: 'min(290px, 82vw)',
                  aspectRatio: '2 / 3',
                  objectPosition: '50% 22%',
                  filter: 'brightness(0.9) saturate(0.9) contrast(1.05)',
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
