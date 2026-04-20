import { SOCIAL_LINKS } from '../lib/constants'

export default function SocialLinks() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-hover flex items-center justify-between rounded-xl border border-teal-900/10 bg-white/75 p-4"
          aria-label={link.name}
        >
          <span className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-teal-700">
              <link.icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-slate-900">{link.name}</span>
              <span className="block text-xs text-slate-600">{link.cta}</span>
            </span>
          </span>
          <span className="text-xs font-semibold text-teal-700">Open</span>
        </a>
      ))}
    </div>
  )
}
