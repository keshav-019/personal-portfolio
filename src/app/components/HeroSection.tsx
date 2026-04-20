'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaArrowRight, FaCircleCheck, FaDownload } from 'react-icons/fa6'
import { HERO_BADGES, TRUST_SIGNALS } from '../lib/constants'

export default function HeroSection() {
  return (
    <section className="section-shell relative overflow-hidden pb-16 pt-44 sm:pt-48 lg:pt-40">
      <div className="absolute left-1/2 top-0 h-72 w-[65rem] -translate-x-1/2 rounded-full bg-teal-300/15 blur-3xl" aria-hidden />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-900/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-teal-700 pulse-glow">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
            Open to opportunities
          </div>

          <div className="space-y-4">
            <p className="section-kicker">Distinct Value</p>
            <h1 className="display-font text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              I build high-performance interfaces for data-heavy products and real-world systems.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 sm:text-lg">
              Frontend engineer with production experience across enterprise workflows, API tooling, and IoT-driven
              products. I focus on speed, clarity, and maintainable architecture that teams can actually ship with.
            </p>
            <p className="text-base font-semibold text-teal-800">
              Current focus:{' '}
              <TypeAnimation
                sequence={[
                  'dashboard UX at scale.',
                  1800,
                  'fast developer tooling experiences.',
                  1800,
                  'bridging AI + product usability.',
                  1800,
                ]}
                speed={42}
                deletionSpeed={58}
                repeat={Infinity}
                cursor
                style={{ display: 'inline-block' }}
              />
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {HERO_BADGES.map((badge) => (
              <span key={badge} className="chip">
                {badge}
              </span>
            ))}
          </div>

          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <a href="#projects" className="primary-button w-full sm:w-auto">
              Explore Case Studies
              <FaArrowRight className="text-sm" />
            </a>
            <a href="/resume.pdf" download className="secondary-button w-full sm:w-auto">
              <FaDownload className="text-sm" />
              Download Resume
            </a>
            <a href="#contact" className="secondary-button w-full sm:w-auto">
              Let&apos;s Build Something
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_SIGNALS.map((signal, index) => (
              <motion.article
                key={signal.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 + index * 0.12, duration: 0.45 }}
                className="card-hover rounded-xl border border-teal-900/10 bg-white/80 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{signal.label}</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">{signal.value}</p>
                <p className="mt-1 text-sm text-slate-600">{signal.detail}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="gradient-border rounded-[1.6rem]">
            <article className="glass-panel relative rounded-[1.6rem] p-6 sm:p-7">
              <div className="dot-grid-bg absolute inset-0 rounded-[1.6rem] opacity-45" />
              <div className="relative z-10">
                <div className="mx-auto mb-6 h-44 w-44 overflow-hidden rounded-3xl border border-teal-900/10 bg-white shadow-lg float-ornament">
                  <Image
                    src="/images/profile.jpg"
                    alt="Keshav Kumar Jha"
                    width={176}
                    height={176}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>

                <h2 className="display-font text-center text-2xl font-bold text-slate-900">Keshav Kumar Jha</h2>
                <p className="mt-1 text-center text-sm font-semibold text-teal-700">Frontend Engineer | AI & Data Systems</p>

                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <FaCircleCheck className="mt-0.5 text-teal-600" />
                    Production feature development at Oracle (Aconex ecosystem).
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCircleCheck className="mt-0.5 text-teal-600" />
                    Experience across React, backend APIs, and embedded ML workflows.
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCircleCheck className="mt-0.5 text-teal-600" />
                    Strong focus on reliability, performance, and practical user impact.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
