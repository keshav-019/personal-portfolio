'use client'

import { motion } from 'framer-motion'
import { EDUCATION, EXPERIENCE } from '../lib/constants'
import { fadeIn, staggerContainer } from '../lib/motion'

export default function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <motion.div
        variants={staggerContainer(0.12, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeIn('up', 0)} className="mb-10 space-y-4">
          <p className="section-kicker">About</p>
          <h2 className="section-heading max-w-3xl">From embedded devices to enterprise UIs, I build for real constraints.</h2>
          <p className="max-w-3xl text-slate-700">
            My edge is cross-domain thinking: I can reason about product UX, backend integration, and system behavior
            together. That helps me build interfaces that are not just attractive, but operationally reliable.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.article variants={fadeIn('up', 0.1)} className="card-hover rounded-2xl border border-teal-900/10 bg-white/80 p-6">
            <h3 className="display-font text-2xl font-bold text-slate-900">Experience Snapshot</h3>
            <div className="mt-5 space-y-5">
              {EXPERIENCE.map((exp) => (
                <div key={`${exp.company}-${exp.role}`} className="rounded-xl border border-teal-900/10 bg-teal-50/35 p-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">{exp.duration}</p>
                  <h4 className="display-font mt-1 text-xl font-bold text-slate-900">
                    {exp.role} <span className="text-base font-semibold text-slate-600">@ {exp.company}</span>
                  </h4>
                  <p className="mt-2 text-sm text-slate-700">{exp.description}</p>
                  {exp.highlights && (
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {exp.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article variants={fadeIn('up', 0.2)} className="card-hover rounded-2xl border border-teal-900/10 bg-white/80 p-6">
            <h3 className="display-font text-2xl font-bold text-slate-900">Education Context</h3>
            <div className="mt-5 space-y-5">
              {EDUCATION.map((edu) => (
                <div key={`${edu.degree}-${edu.institution}`} className="rounded-xl border border-orange-900/10 bg-orange-50/45 p-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">{edu.duration}</p>
                  <h4 className="display-font mt-1 text-xl font-bold text-slate-900">{edu.degree}</h4>
                  <p className="text-sm font-semibold text-slate-600">{edu.institution}</p>
                  <p className="mt-2 text-sm text-slate-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  )
}
