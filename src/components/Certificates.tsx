import { FileText } from 'lucide-react'

import certFlutter  from '../assets/pdf/CC2011-DesenvolvimentodjeAplicacoesHibridjascomFlutter-2024.pdf'
import certPython   from '../assets/pdf/EN3027-Criacaodjejogos2DatravesdjoPython-2024.pdf'
import certHtmlCss  from '../assets/pdf/Lucas SIlva Barboza - Curso HTML e CSS_ ambientes de desenvolvimento, estrutura de arquivos e tags - Alura.pdf'
import certImersao  from '../assets/pdf/Lucas SIlva Barboza - Imersão FrontEnd.pdf'

const certs = [
  {
    title: 'Imersão FrontEnd',
    issuer: 'Alura',
    year: '2024',
    file: certImersao,
  },
  {
    title: 'HTML & CSS — Ambientes e Estrutura',
    issuer: 'Alura',
    year: '2024',
    file: certHtmlCss,
  },
  {
    title: 'Apps Híbridos com Flutter',
    issuer: 'Instituto Mauá de Tecnologia',
    year: '2024',
    file: certFlutter,
  },
  {
    title: 'Criação de Jogos 2D com Python',
    issuer: 'Instituto Mauá de Tecnologia',
    year: '2024',
    file: certPython,
  },
]

export function Certificates() {
  return (
    <section id="certificados" className="section" aria-labelledby="certs-heading">

      <p className="text-[11px] font-mono text-[#F97316]/60 tracking-[0.2em] uppercase mb-10 md:mb-14">
        — Certificados
      </p>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 reveal">
        <h2
          id="certs-heading"
          className="font-display font-bold leading-[0.95] tracking-tight text-white"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
          Sempre aprendendo
        </h2>
        <p className="text-sm text-[#475569] font-mono max-w-xs text-right hidden md:block">
          cursos além da graduação
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 reveal reveal-delay-1">
        {certs.map((cert) => (
          <a
            key={cert.title}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 p-4 rounded-xl border border-[#1E2535] bg-[#141925]
                       hover:border-[#F97316]/25 hover:bg-[#F97316]/[0.03]
                       transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-2">
              <FileText
                size={14}
                className="text-[#475569] group-hover:text-[#F97316] transition-colors duration-200 flex-shrink-0 mt-0.5"
              />
              <span className="text-[10px] font-mono text-[#334155]">{cert.year}</span>
            </div>

            <div>
              <p className="text-sm font-medium text-[#94A3B8] group-hover:text-[#CBD5E1] transition-colors duration-200 leading-snug mb-1">
                {cert.title}
              </p>
              <p className="text-[10px] font-mono text-[#475569]">{cert.issuer}</p>
            </div>
          </a>
        ))}
      </div>

    </section>
  )
}

