import { projects } from '../data/profile'
import { ExternalLinkIcon } from './icons'
import { Reveal } from './Reveal'

export function Projects() {
  return (
    <section id="projetos" className="border-y border-slate-200 bg-slate-50/60 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <p className="section-heading">Projetos em destaque</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">O que venho construindo</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <div className="card flex h-full flex-col p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-accent-50 px-2 py-1 font-mono text-xs font-medium text-accent-700 dark:bg-accent-500/10 dark:text-accent-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:text-accent-500 dark:text-accent-400"
                  >
                    Ver projeto
                    <ExternalLinkIcon className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
