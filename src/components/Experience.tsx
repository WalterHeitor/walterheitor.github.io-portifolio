import { experience } from '../data/profile'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <p className="section-heading">Experiência</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Trajetória profissional</h2>
      </Reveal>

      <ol className="mt-10 space-y-8 border-l border-slate-200 dark:border-white/10">
        {experience.map((item, i) => (
          <li key={item.company} className="relative pl-8">
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-accent-500 dark:border-[#0b0a10]" />

            <Reveal delay={i * 100}>
              <div className="card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.company}</h3>
                  <span className="font-mono text-sm text-accent-600 dark:text-accent-400">{item.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{item.context}</p>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight, hi) => (
                    <li key={hi} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
