import { GitFork, Link2, Mail } from 'lucide-react'

const navLinks = [
  { href: '#sobre',    label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#stack',    label: 'Stack' },
  { href: '#contato',  label: 'Contato' },
]

const socials = [
  { href: 'https://github.com/LucasS059',                     label: 'GitHub',   icon: GitFork },
  { href: 'https://www.linkedin.com/in/lucas-barboza-dev-br', label: 'LinkedIn', icon: Link2 },
  { href: 'mailto:dev.lucas.silva59@gmail.com',                label: 'E-mail',   icon: Mail },
]

export function Footer() {
  return (
    <footer role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8">

        {/* Linha superior: logo · nav · sociais */}
        <div className="flex flex-wrap items-center justify-between gap-5 mb-7">

          <a
            href="#inicio"
            className="font-display font-semibold text-[#64748B] hover:text-white transition-colors duration-200 text-sm"
          >
            lb<span className="text-[#00CFFF]">.</span>dev
          </a>

          <nav className="flex items-center gap-5" aria-label="Rodapé">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-[#475569] hover:text-[#94A3B8] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socials.map(s => {
              const Icon = s.icon
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="flex items-center gap-1.5 text-xs text-[#475569] hover:text-[#94A3B8] transition-colors duration-200 group"
                >
                  <Icon size={13} />
                  <span className="font-mono hidden sm:inline">{s.label}</span>
                </a>
              )
            })}
          </div>
        </div>

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
