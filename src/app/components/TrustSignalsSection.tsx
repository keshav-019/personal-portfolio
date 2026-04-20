'use client'

import { motion } from 'framer-motion'
import { QUICK_LINKS } from '../lib/constants'
import { fadeIn, staggerContainer } from '../lib/motion'
import SocialLinks from './SocialLinks'

export default function TrustSignalsSection() {
  return (
    <section className="section-shell">
      <motion.div
        variants={staggerContainer(0.1, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeIn('up', 0)} className="mb-10 space-y-4">
          <p className="section-kicker">Trust Signals</p>
          <h2 className="section-heading max-w-3xl">Proof of work, not just claims.</h2>
          <p className="max-w-3xl text-slate-700">
            If you want to validate output quickly, these links point directly to my activity, resume, and professional
            profile.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div variants={fadeIn('up', 0.05)} className="rounded-2xl border border-teal-900/10 bg-white/90 p-6">
            <h3 className="display-font text-2xl font-bold text-slate-900">Quick Validation Links</h3>
            <div className="mt-4 space-y-3">
              {QUICK_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-hover flex items-center justify-between rounded-xl border border-teal-900/10 bg-teal-50/55 px-4 py-3"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-teal-700">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-teal-700">Open</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn('up', 0.1)} className="rounded-2xl border border-teal-900/10 bg-white/90 p-6">
            <h3 className="display-font text-2xl font-bold text-slate-900">Public Profiles</h3>
            <p className="mt-2 text-sm text-slate-700">
              Explore coding activity, competitive programming, and professional background.
            </p>
            <div className="mt-5">
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
