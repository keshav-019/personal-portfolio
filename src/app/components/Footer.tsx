import { siteConfig } from '../config/site'

export default function Footer() {
  return (
    <footer className="border-t border-teal-900/10 bg-white/80 px-4 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-600 md:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Built with intent, performance, and practical product thinking.
        </p>
        <p className="font-semibold text-teal-800">Available for frontend and product engineering roles.</p>
      </div>
    </footer>
  )
}
