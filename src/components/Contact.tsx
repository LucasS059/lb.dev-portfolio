import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Send, GitFork, Link2, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? ''

type Status = 'idle' | 'sending' | 'success' | 'error'

const contactLinks = [
  { href: 'mailto:dev.lucas.silva59@gmail.com',               icon: Mail,          label: 'dev.lucas.silva59@gmail.com', aria: 'Email',    external: false },
  { href: 'https://www.linkedin.com/in/lucas-barboza-dev-br', icon: Link2,         label: 'LinkedIn',                   aria: 'LinkedIn', external: true },
  { href: 'https://github.com/LucasS059',                     icon: GitFork,       label: 'GitHub',                     aria: 'GitHub',   external: true },
]

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contato" className="section" aria-labelledby="contact-heading">

      <p className="text-[11px] font-mono text-[#00CFFF]/60 tracking-[0.2em] uppercase mb-10 md:mb-14">
        — Contato
      </p>

      <h2
        id="contact-heading"
        className="font-display font-bold leading-[0.95] tracking-tight text-white mb-10 md:mb-14 reveal"
        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
      >
        Tem um projeto?{' '}
        <span
          style={{
            background: 'linear-gradient(90deg, #00CFFF 0%, #5DDEFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Bora conversar.
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">

        {/* Info */}
        <div className="reveal reveal-delay-1">
          <p className="text-[#94A3B8] text-base leading-relaxed mb-8 max-w-sm">
            Seja um site, um app ou um sistema interno — me manda uma mensagem
            explicando o que você precisa. Respondo em até 24h.
          </p>

          <div className="space-y-4">
            {contactLinks.map(item => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  aria-label={item.aria}
                  className="flex items-center gap-3 text-sm text-[#64748B] hover:text-[#CBD5E1] transition-colors duration-200"
                >
                  <Icon size={14} className="flex-shrink-0" />
                  <span className="font-mono text-xs">{item.label}</span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Formulário */}
        <div className="reveal reveal-delay-2">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" aria-label="Formulário de contato">
            {[
              { name: 'from_name',  label: 'Nome',    type: 'text',  placeholder: 'João Silva' },
              { name: 'from_email', label: 'Email',   type: 'email', placeholder: 'joao@empresa.com' },
              { name: 'subject',    label: 'Assunto', type: 'text',  placeholder: 'Site, app, sistema...' },
            ].map(f => (
              <div key={f.name}>
                <label htmlFor={f.name} className="block text-[10px] font-mono text-[#475569] mb-1.5 tracking-[0.1em] uppercase">
                  {f.label}
                </label>
                <input id={f.name} name={f.name} type={f.type} required placeholder={f.placeholder} className="input" />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-[10px] font-mono text-[#475569] mb-1.5 tracking-[0.1em] uppercase">
                Mensagem
              </label>
              <textarea id="message" name="message" required rows={4} placeholder="Descreva o que você precisa..." className="input resize-none" />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending'
                ? <><Loader2 size={14} className="animate-spin" />Enviando...</>
                : <><Send size={14} />Enviar mensagem</>
              }
            </button>

            {status === 'success' && (
              <div role="status" className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-4 py-3 rounded-xl border border-emerald-500/20">
                <CheckCircle size={13} /> Mensagem enviada! Respondo em até 24h.
              </div>
            )}
            {status === 'error' && (
              <div role="alert" className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 px-4 py-3 rounded-xl border border-red-500/20">
                <AlertCircle size={13} /> Erro ao enviar. Tente pelo email diretamente.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
