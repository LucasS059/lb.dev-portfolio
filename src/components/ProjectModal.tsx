import { useEffect, useState, useCallback } from 'react'
import { X, GitFork, ExternalLink, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import type { Project } from '../types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const statusMeta: Record<Project['status'], { label: string; color: string }> = {
  production: { label: 'Em produção', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  academic:   { label: 'Acadêmico',   color: 'bg-sky-500/10 text-sky-400 border-sky-500/20' },
  freelance:  { label: 'Freelance',   color: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
}

/* ── Lightbox ── */
function Lightbox({ images, index, onClose }: { images: string[]; index: number; onClose: () => void }) {
  const [current, setCurrent] = useState(index)

  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length])

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft')  prev()
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose, next, prev])

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center" role="dialog" aria-modal="true">
      {/* Fundo escuro */}
      <div className="absolute inset-0 bg-black/95" onClick={onClose} />

      {/* Fechar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
        aria-label="Fechar"
      >
        <X size={18} />
      </button>

      {/* Contador */}
      {images.length > 1 && (
        <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-mono text-white/40">
          {current + 1} / {images.length}
        </span>
      )}

      {/* Imagem */}
      <img
        key={current}
        src={images[current]}
        alt={`Screenshot ${current + 1}`}
        className="relative max-w-[92vw] max-h-[88vh] object-contain rounded-xl"
        style={{ animation: 'fadeIn 0.2s ease' }}
      />

      {/* Setas */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Próxima"
          >
            <ChevronRight size={20} />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para screenshot ${i + 1}`}
                className={`rounded overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                  i === current ? 'border-[#00CFFF] opacity-100' : 'border-transparent opacity-40 hover:opacity-70'
                }`}
                style={{ width: '48px', height: '36px' }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/* ── Modal principal ── */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [current, setCurrent]     = useState(0)
  const [paused, setPaused]       = useState(false)
  const [lightbox, setLightbox]   = useState<number | null>(null)

  const images      = project?.images?.length ? project.images : project?.image ? [project.image] : []
  const hasMultiple = images.length > 1
  const isMobile    = project?.screenshotType === 'mobile'

  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length])

  useEffect(() => { setCurrent(0) }, [project?.id])

  useEffect(() => {
    if (!hasMultiple || paused || lightbox !== null) return
    const id = setInterval(next, 3000)
    return () => clearInterval(id)
  }, [hasMultiple, paused, next, lightbox])

  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [project])

  useEffect(() => {
    if (lightbox !== null) return
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft')  prev()
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose, next, prev, lightbox])

  if (!project) return null

  const status = statusMeta[project.status]

  /* Componente de imagem clicável */
  const ClickableImg = ({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) => (
    <div className="relative group cursor-zoom-in" onClick={() => setLightbox(current)}>
      <img src={src} alt={alt} className={className} style={style} />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20 rounded-xl">
        <ZoomIn size={20} className="text-white drop-shadow" />
      </div>
    </div>
  )

  return (
    <>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

        <article
          className="relative w-full max-w-2xl bg-[#0C0F18] border border-[#1A1F2E] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
          style={{ maxHeight: '90vh' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-lg text-[#475569] hover:text-[#CBD5E1] hover:bg-[#1A1F2E] transition-all duration-200"
            aria-label="Fechar"
          >
            <X size={17} />
          </button>

          {isMobile ? (
            /* Mobile: texto rola à esquerda, foto fixa à direita */
            <div className="flex" style={{ maxHeight: '90vh' }}>

              {/* Coluna de texto */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-7 min-w-0">
                <div className="flex items-start gap-3 mb-4 pr-6">
                  <h2 id="modal-title" className="font-display text-xl font-bold text-white flex-1">
                    {project.title}
                  </h2>
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border flex-shrink-0 mt-1 ${status.color}`}>
                    {status.label}
                  </span>
                </div>

                <div className="text-sm text-[#94A3B8] leading-[1.85] mb-6 whitespace-pre-line">
                  {project.longDescription}
                </div>

                {project.highlights.length > 0 && (
                  <div className="grid grid-cols-1 gap-2.5 mb-6">
                    {project.highlights.map(h => (
                      <div key={h} className="flex items-center gap-2.5 text-sm text-[#CBD5E1]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00CFFF] flex-shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map(t => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                {(project.links.github || project.links.live) && (
                  <div className="flex gap-3">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                         className="btn-ghost text-sm py-2.5 px-4">
                        <GitFork size={14} /> GitHub
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                         className="btn-primary text-sm py-2.5 px-4">
                        <ExternalLink size={14} /> Ver projeto
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Coluna da foto — fixa, altura total */}
              <div className="w-[150px] flex-shrink-0 bg-[#080B13] border-l border-[#1A1F2E] flex flex-col items-center justify-between py-6 px-3">
                <div className="flex-1 flex items-center justify-center w-full">
                  <ClickableImg
                    src={images[current]}
                    alt={`${project.title} — screenshot ${current + 1}`}
                    className="rounded-xl object-contain w-full"
                    style={{ maxHeight: 'calc(90vh - 100px)' }}
                  />
                </div>

                {hasMultiple && (
                  <div className="flex items-center gap-2 mt-4 flex-shrink-0">
                    <button onClick={prev} aria-label="Anterior"
                      className="w-6 h-6 flex items-center justify-center rounded border border-[#1A1F2E] text-[#475569] hover:text-white transition-all">
                      <ChevronLeft size={12} />
                    </button>
                    <span className="text-[10px] font-mono text-[#475569]">{current + 1}/{images.length}</span>
                    <button onClick={next} aria-label="Próxima"
                      className="w-6 h-6 flex items-center justify-center rounded border border-[#1A1F2E] text-[#475569] hover:text-white transition-all">
                      <ChevronRight size={12} />
                    </button>
                  </div>
                )}
              </div>
            </div>

          ) : (
            /* Desktop: imagem fullwidth no topo */
            <div className="overflow-y-auto" style={{ maxHeight: '90vh' }}>
              {images.length > 0 && (
                <div className="pt-10">
                <div className="relative bg-[#080B13] overflow-hidden">
                  {/* Imagem — se adapta à proporção original */}
                  <div className="w-full flex items-center justify-center px-5 pb-8" style={{ minHeight: '160px', maxHeight: '280px' }}>
                    <ClickableImg
                      src={images[current]}
                      alt={`${project.title} — screenshot ${current + 1}`}
                      className="w-full h-auto object-contain rounded-md"
                      style={{ maxHeight: '260px' }}
                    />
                  </div>

                  {/* Setas sobrepostas */}
                  {hasMultiple && (
                    <>
                      <button onClick={prev} aria-label="Anterior"
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg bg-black/60 text-white/70 hover:text-white hover:bg-black/90 transition-all border border-white/10">
                        <ChevronLeft size={15} />
                      </button>
                      <button onClick={next} aria-label="Próxima"
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg bg-black/60 text-white/70 hover:text-white hover:bg-black/90 transition-all border border-white/10">
                        <ChevronRight size={15} />
                      </button>

                      {/* Dots na base */}
                      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                          <button key={i} onClick={() => { setCurrent(i); setPaused(true) }}
                            aria-label={`Screenshot ${i + 1}`}
                            className={`rounded-full transition-all duration-300 ${i === current ? 'w-4 h-1.5 bg-[#00CFFF]' : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                </div>
              )}

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 id="modal-title" className="font-display text-xl sm:text-2xl font-bold text-white">
                    {project.title}
                  </h2>
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border flex-shrink-0 ${status.color}`}>
                    {status.label}
                  </span>
                </div>

                <div className="text-sm text-[#94A3B8] leading-[1.85] mb-6 whitespace-pre-line">
                  {project.longDescription}
                </div>

                {project.highlights.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {project.highlights.map(h => (
                      <div key={h} className="flex items-center gap-2.5 text-sm text-[#CBD5E1]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00CFFF] flex-shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map(t => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                {(project.links.github || project.links.live) && (
                  <div className="flex gap-3">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                         className="btn-ghost text-sm py-2.5 px-5">
                        <GitFork size={14} /> GitHub
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                         className="btn-primary text-sm py-2.5 px-5">
                        <ExternalLink size={14} /> Ver projeto
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </article>
      </div>

      {/* Lightbox — abre ao clicar na foto */}
      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}
