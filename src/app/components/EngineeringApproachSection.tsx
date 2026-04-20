'use client'

import { motion } from 'framer-motion'
import { ENGINEERING_PRINCIPLES } from '../lib/constants'
import { fadeIn, staggerContainer } from '../lib/motion'

export default function EngineeringApproachSection() {
  return (
    <section id="approach" className="section-shell">
      <motion.div
        variants={staggerContainer(0.1, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeIn('up', 0)} className="mb-10 space-y-4">
          <p className="section-kicker">How I Build</p>
          <h2 className="section-heading max-w-3xl">Engineering approach that shows how I think, not just what I ship.</h2>
          <p className="max-w-3xl text-slate-700">
            Hiring teams care about decisions and tradeoffs. These are the principles I use when building product
            features and interfaces.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {ENGINEERING_PRINCIPLES.map((principle, index) => (
            <motion.article
              key={principle.title}
              variants={fadeIn('up', 0.06 * index)}
              className="card-hover rounded-2xl border border-teal-900/10 bg-white/85 p-5"
            >
              <h3 className="display-font text-xl font-bold text-slate-900">{principle.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{principle.description}</p>

              <div className="mt-4 rounded-xl border border-orange-200/65 bg-orange-50/65 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">Tradeoff</p>
                <p className="mt-1 text-sm text-slate-700">{principle.tradeoff}</p>
              </div>

              <div className="mt-3 rounded-xl border border-teal-200/75 bg-teal-50/60 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Applied Example</p>
                <p className="mt-1 text-sm text-slate-700">{principle.example}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
