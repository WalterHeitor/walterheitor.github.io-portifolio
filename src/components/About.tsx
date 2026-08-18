import { about } from '../data/profile'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <p className="section-heading">Sobre mim</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
          Quem constrói o que está por trás da tela
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {about.map((paragraph, i) => (
          <Reveal key={i} delay={i * 100} className={i === 0 ? 'sm:col-span-2' : ''}>
            <p className="card h-full p-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
