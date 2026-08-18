import { profile } from '../data/profile'
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon } from './icons'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px]"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-start px-6 pb-24 pt-20 sm:pt-28">
        <span className="badge animate-fade-in-up motion-reduce:animate-none" style={{ animationDelay: '0ms' }}>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Disponível para novas oportunidades
        </span>

        <h1
          className="mt-6 animate-fade-in-up text-4xl font-extrabold tracking-tight text-slate-900 motion-reduce:animate-none dark:text-white sm:text-5xl md:text-6xl"
          style={{ animationDelay: '80ms' }}
        >
          {profile.name}
        </h1>

        <p
          className="mt-3 animate-fade-in-up font-mono text-lg text-accent-600 motion-reduce:animate-none dark:text-accent-400 sm:text-xl"
          style={{ animationDelay: '160ms' }}
        >
          {profile.role}
        </p>

        <p
          className="mt-6 max-w-2xl animate-fade-in-up text-lg leading-relaxed text-slate-600 motion-reduce:animate-none dark:text-slate-300"
          style={{ animationDelay: '240ms' }}
        >
          {profile.tagline}
        </p>

        <div
          className="mt-10 flex animate-fade-in-up flex-wrap items-center gap-3 motion-reduce:animate-none"
          style={{ animationDelay: '320ms' }}
        >
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <MailIcon className="h-4 w-4" />
            Entrar em contato
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary">
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <a
          href="#sobre"
          className="mt-16 inline-flex animate-fade-in-up items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-accent-600 motion-reduce:animate-none dark:text-slate-400 dark:hover:text-accent-400"
          style={{ animationDelay: '400ms' }}
        >
          Saiba mais sobre minha trajetória
          <ArrowRightIcon className="h-4 w-4 rotate-90" />
        </a>
      </div>
    </section>
  )
}
