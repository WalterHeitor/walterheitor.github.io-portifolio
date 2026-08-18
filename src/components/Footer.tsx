import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-white/5">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
        </p>
        <p className="font-mono text-xs">Feito com React, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
