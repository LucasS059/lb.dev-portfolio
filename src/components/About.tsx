import { GraduationCap, Briefcase } from 'lucide-react'

const timeline = [
  {
    icon: GraduationCap,
    period: '2023 — 2027',
    title: 'Ciência da Computação',
    org: 'Instituto Mauá de Tecnologia',
    note: 'Onde aprendi que arquitetura ruim cobra caro lá na frente.',
  },
  {
    icon: Briefcase,
    period: 'Set 2025 — presente',
    title: 'Desenvolvedor',
    org: 'Wassamara',
    note: 'Do diagnóstico à entrega em produção, múltiplas stacks, contato direto com a liderança.',
  },
]

export function About() {
  return (
    <section id="sobre" className="section" aria-labelledby="about-heading">

      {/* ── Topo editorial ─────────────────────────────────── */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <p className="text-[11px] font-mono text-[#00CFFF]/60 tracking-[0.2em] uppercase">
          — Sobre
        </p>
        <p className="text-[10px] font-mono text-[#334155] tracking-[0.12em] hidden sm:block">
          Lucas Silva Barboza
        </p>
      </div>

      {/* ── Heading principal ──────────────────────────────── */}
      <div className="reveal">
        <h2
          id="about-heading"
          className="font-display font-bold leading-[0.95] tracking-tight text-white"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}
        >
          <span className="block">Fullstack.</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(90deg, #00CFFF 0%, #5DDEFF 60%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Ponta a ponta.
          </span>
        </h2>

        {/* Linha separadora com detalhe */}
        <div className="flex items-center gap-4 mt-6 mb-14">
          <div className="h-px flex-1 bg-gradient-to-r from-[#00CFFF]/30 via-[#1A1F2E] to-transparent" />
          <span className="text-[10px] font-mono text-[#334155] tracking-widest uppercase whitespace-nowrap">
            banco · back · front · deploy
          </span>
        </div>
      </div>

      {/* ── Conteúdo: narrativa + trajetória ──────────────── */}
      <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-start">

        {/* Narrativa */}
        <div className="space-y-5 text-[#94A3B8] text-base leading-[1.85] reveal reveal-delay-1">
          <p>
            Antes de abrir o editor, preciso entender o problema real:
            o que o cliente precisa resolver, quem vai usar e o que não pode quebrar.
            Esse pensamento molda cada linha de código que escrevo.
          </p>
          <p>
            Trabalho de ponta a ponta — banco de dados, backend, interface e deploy.
            Nada de "isso não é minha área".{' '}
            <span className="text-[#CBD5E1]">Se faz parte do produto, faz parte do escopo.</span>
          </p>
          <p>
            Meu diferencial é a intersecção entre arquitetura limpa e velocidade de entrega:
            construir algo que funciona hoje e que outra pessoa consegue manter amanhã.
          </p>
        </div>

        {/* Trajetória */}
        <div className="reveal reveal-delay-2">
          <p className="text-[10px] font-mono text-[#475569] tracking-[0.18em] uppercase mb-6">
            Trajetória
          </p>
          <div className="space-y-8">
            {timeline.map(item => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <Icon size={14} className="text-[#475569]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#475569] mb-1">{item.period}</p>
                    <h3 className="text-sm font-medium text-[#CBD5E1] mb-0.5">{item.title}</h3>
                    <p className="text-[11px] text-[#00CFFF]/80 font-mono mb-2">{item.org}</p>
                    <p className="text-xs text-[#64748B] leading-relaxed">{item.note}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
