import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/15 blur-[120px]"
      />

      <Reveal className="relative mx-auto max-w-5xl px-6 py-24 text-center">
        <div>
          <p className="section-heading">Contato</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Vamos conversar sobre a próxima oportunidade
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Estou aberto a novos desafios em back-end, arquitetura de sistemas distribuídos e times de engenharia de
            alta performance.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <MailIcon className="h-4 w-4" />
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
