import { certifications, education } from '../data/profile'
import { Reveal } from './Reveal'

export function Education() {
  return (
    <section id="formacao" className="border-y border-slate-200 bg-slate-50/60 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <p className="section-heading">Formação</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Educação e certificações</h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Formação acadêmica
            </h3>
            <ul className="mt-4 space-y-3">
              {education.map((item) => (
                <li key={item.degree} className="card p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.degree}</p>
                    <span className="font-mono text-xs text-accent-600 dark:text-accent-400">{item.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.institution}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Certificações
            </h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <li key={cert.title} className="card p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{cert.title}</p>
                    <span className="font-mono text-xs text-accent-600 dark:text-accent-400">{cert.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{cert.items}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
