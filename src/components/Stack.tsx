import { stack } from '../data/profile'
import { Reveal } from './Reveal'

export function Stack() {
  return (
    <section id="stack" className="border-y border-slate-200 bg-slate-50/60 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <p className="section-heading">Stack técnica</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Ferramentas do dia a dia</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((category, i) => (
            <Reveal key={category.title} delay={i * 80}>
              <div className="card h-full p-6">
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {category.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item.name} className="badge">
                      <item.icon className="h-4 w-4 text-accent-600 dark:text-accent-400" />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
