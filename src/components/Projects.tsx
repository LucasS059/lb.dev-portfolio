import { useState, useRef, useCallback } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'
import { ProjectModal } from './ProjectModal'
import type { Project } from '../types'

const statusLabel: Record<Project['status'], string> = {
  production: 'Em produção',
  academic:   'Acadêmico',
  freelance:  'Freelance',
}

const statusColor: Record<Project['status'], string> = {
  production: 'text-emerald-500',
  academic:   'text-sky-500',
  freelance:  'text-violet-400',
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [atStart, setAtStart]   = useState(true)
  const [atEnd, setAtEnd]       = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const checkEdges = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setAtStart(el.scrollLeft < 16)
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 16)
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector('article') as HTMLElement | null
    const step = card ? card.offsetWidth + 16 : 360
    el.scrollBy({ left: dir === 'right' ? step : -step, behavior: 'smooth' })
  }

  return (
    <>
      <section id="projetos" aria-labelledby="projects-heading" className="section">

        {/* Cabeçalho + setas */}
        <div className="mb-10 md:mb-14">
          <p className="text-[11px] font-mono text-[#00CFFF]/50 tracking-[0.2em] uppercase mb-4">
            — Projetos
          </p>
          <div className="flex items-end justify-between gap-4">
            <h2
              id="projects-heading"
              className="font-display font-bold leading-[0.95] tracking-tight text-white reveal"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              O que eu construí
            </h2>

            {/* Setas de navegação */}
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => scroll('left')}
                disabled={atStart}
                aria-label="Anterior"
                className="w-9 h-9 rounded-xl border border-[#1A1F2E] flex items-center justify-center text-[#475569] hover:text-[#CBD5E1] hover:border-[#00CFFF]/25 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={15} />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={atEnd}
                aria-label="Próximo"
                className="w-9 h-9 rounded-xl border border-[#1A1F2E] flex items-center justify-center text-[#475569] hover:text-[#CBD5E1] hover:border-[#00CFFF]/25 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Carrossel */}
        <div
          ref={scrollRef}
          onScroll={checkEdges}
          className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-1 items-stretch"
        >
          {projects.map((project, i) => (
            <article
              key={project.id}
              onClick={() => setSelected(project)}
              className={`
                reveal reveal-delay-${Math.min(i + 1, 4)}
                flex-shrink-0 snap-start cursor-pointer
                w-[82vw] sm:w-[360px] lg:w-[400px]
                rounded-2xl border border-[#1A1F2E] bg-[#0C0F18]
                hover:border-[#00CFFF]/20 hover:-translate-y-1
                transition-all duration-300 overflow-hidden group
                ${project.screenshotType === 'mobile' ? 'flex flex-row' : 'flex flex-col'}
              `}
            >
              {project.screenshotType === 'mobile' ? (
                <>
                  {/* Layout mobile: texto à esquerda, screenshot à direita */}
                  <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display font-semibold text-[#CBD5E1] text-base group-hover:text-white transition-colors leading-tight">
                          {project.title}
                        </h3>
                      </div>
                      <span className={`text-[10px] font-mono ${statusColor[project.status]} block mb-3`}>
                        {statusLabel[project.status]}
                      </span>
                      <p className="text-xs text-[#64748B] leading-relaxed mb-4 line-clamp-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map(t => (
                        <span key={t} className="tech-pill">{t}</span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="tech-pill">+{project.tags.length - 3}</span>
                      )}
                    </div>
                  </div>

                  {/* Screenshot mobile na lateral direita */}
                  <div className="w-[38%] flex-shrink-0 bg-[#080B13] flex items-center justify-center overflow-hidden p-3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Layout desktop: imagem no topo */}
                  <div className="h-48 bg-[#080B13] flex items-center justify-center overflow-hidden px-4 py-3 rounded-t-2xl flex-shrink-0">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    ) : (
                      <span className="text-[10px] font-mono text-[#334155]">sem imagem</span>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-semibold text-[#CBD5E1] text-base group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <span className={`text-[10px] font-mono flex-shrink-0 mt-0.5 ${statusColor[project.status]}`}>
                        {statusLabel[project.status]}
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tags.slice(0, 4).map(t => (
                        <span key={t} className="tech-pill">{t}</span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="tech-pill">+{project.tags.length - 4}</span>
                      )}
                    </div>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>

        {/* Indicador de quantidade */}
        <p className="text-[10px] font-mono text-[#334155] mt-4">
          {projects.length} projetos · arraste ou use as setas
        </p>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
