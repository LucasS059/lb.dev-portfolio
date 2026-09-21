import { useState } from 'react'
import { Server, Monitor, Smartphone, Database, Cloud } from 'lucide-react'
import { stack, categoryLabels } from '../data/stack'
import type { StackItem } from '../types'

const categoryOrder: StackItem['category'][] = ['backend', 'frontend', 'mobile', 'database', 'infra']

const categoryMeta: Record<StackItem['category'], { icon: React.ElementType; description: string }> = {
  backend:  { icon: Server,     description: 'APIs, autenticação, lógica de negócio' },
  frontend: { icon: Monitor,    description: 'Interfaces web rápidas e acessíveis' },
  mobile:   { icon: Smartphone, description: 'Apps iOS e Android — nativos e cross-platform' },
  database: { icon: Database,   description: 'Modelagem, queries e persistência' },
  infra:    { icon: Cloud,      description: 'Deploy, containers, CI/CD' },
}

type Category = StackItem['category'] | 'all'

export function Stack() {
  const [active, setActive] = useState<Category>('all')

  const grouped = categoryOrder.reduce((acc, cat) => {
    acc[cat] = stack.filter(s => s.category === cat)
    return acc
  }, {} as Record<StackItem['category'], StackItem[]>)

  const visible = active === 'all' ? categoryOrder : [active as StackItem['category']]

  const filters: [Category, string][] = [
    ['all', 'Todas'],
    ...categoryOrder.map(c => [c, categoryLabels[c]] as [Category, string]),
  ]

  return (
    <section id="stack" aria-labelledby="stack-heading" className="section">

      <p className="text-[11px] font-mono text-[#F97316]/60 tracking-[0.2em] uppercase mb-10 md:mb-14">
        — Stack
      </p>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12 reveal">
        <h2
          id="stack-heading"
          className="font-display font-bold leading-[0.95] tracking-tight text-white"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
          Ferramentas que uso
        </h2>

        {/* Filtros */}
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {filters.map(([cat, label]) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`text-xs font-mono transition-colors duration-200 pb-0.5 ${
                active === cat
                  ? 'text-[#F97316] border-b border-[#F97316]/50'
                  : 'text-[#64748B] hover:text-[#94A3B8] border-b border-transparent'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((cat, i) => {
          const { icon: Icon, description } = categoryMeta[cat]
          const items = grouped[cat]
          return (
            <article
              key={`${cat}-${active}`}
              className="p-5 rounded-2xl border border-[#1A1F2E] bg-[#0C0F18] hover:border-[#F97316]/15 transition-colors duration-300"
              style={{
                animation: `fadeUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${i * 55}ms both`,
              }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <Icon size={13} className="text-[#475569]" />
                <div>
                  <h3 className="text-xs font-medium text-[#94A3B8]">{categoryLabels[cat]}</h3>
                  <p className="text-[10px] text-[#475569] mt-0.5 hidden sm:block">{description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map(item => (
                  <span
                    key={item.name}
                    className={item.level === 'primary' ? 'tech-pill-primary' : 'tech-pill'}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
