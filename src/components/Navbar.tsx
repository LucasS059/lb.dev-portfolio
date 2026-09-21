import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#sobre',        label: 'Sobre' },
  { href: '#projetos',     label: 'Projetos' },
  { href: '#stack',        label: 'Stack' },
  { href: '#certificados', label: 'Certificados' },
  { href: '#contato',      label: 'Contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D1117]/95 backdrop-blur-xl border-b border-[#1E2535] shadow-lg shadow-black/20'
          : 'bg-[#0D1117]/80 backdrop-blur-md border-b border-[#1E2535]/40'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          className="font-display font-semibold text-white hover:text-[#F97316] transition-colors duration-200 text-base"
        >
          lb<span className="text-[#F97316]">.</span>dev
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-[#64748B] hover:text-[#E2E8F0] transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#F97316] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden p-2 rounded-lg text-[#64748B] hover:text-[#E2E8F0] hover:bg-[#141925] transition-all"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden bg-[#0D1117]/98 backdrop-blur-xl border-t border-[#1E2535] px-5 py-5 flex flex-col gap-1"
          role="dialog"
          aria-label="Menu de navegação"
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#64748B] hover:text-[#E2E8F0] transition-colors py-3 border-b border-[#1E2535] last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
