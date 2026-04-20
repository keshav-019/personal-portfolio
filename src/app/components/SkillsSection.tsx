'use client'

import { motion } from 'framer-motion'
import { CORE_STRENGTHS, SUPPORTING_TOOLS } from '../lib/constants'
import { fadeIn, staggerContainer } from '../lib/motion'

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <motion.div
        variants={staggerContainer(0.1, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeIn('up', 0)} className="mb-10 space-y-4">
          <p className="section-kicker">Skill Focus</p>
          <h2 className="section-heading max-w-3xl">Core strengths first, supporting tools second.</h2>
          <p className="max-w-3xl text-slate-700">
            I prioritize depth in a few high-leverage areas instead of listing every technology I&apos;ve touched.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {CORE_STRENGTHS.map((group, index) => (
            <motion.article
              key={group.title}
              variants={fadeIn('up', 0.06 * index)}
              className="card-hover rounded-2xl border border-teal-900/10 bg-white/90 p-6"
            >
              <h3 className="display-font text-2xl font-bold text-slate-900">{group.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{group.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {SUPPORTING_TOOLS.map((group) => (
            <article key={group.title} className="rounded-2xl border border-orange-900/10 bg-orange-50/55 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-orange-700">Supporting Tools</p>
              <h3 className="display-font mt-1 text-2xl font-bold text-slate-900">{group.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{group.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-orange-300/60 bg-white px-3 py-1 text-xs font-semibold text-orange-800">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
