'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLocationDot } from 'react-icons/fa6'
import ContactForm from '../../components/ContactForm'
import { fadeIn, staggerContainer } from '../../lib/motion'

export default function ContactPage() {
  return (
    <section id="contact" className="section-shell pb-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.1, 0.12)}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeIn('up', 0)} className="mb-10 space-y-4">
          <p className="section-kicker">Contact</p>
          <h2 className="section-heading max-w-3xl">Let&apos;s build something useful, not just flashy.</h2>
          <p className="max-w-3xl text-slate-700">
            Share your project context and I&apos;ll respond with clear next steps. I typically reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.aside variants={fadeIn('up', 0.08)} className="rounded-2xl border border-teal-900/10 bg-white/90 p-6">
            <h3 className="display-font text-2xl font-bold text-slate-900">Direct Contact</h3>
            <p className="mt-2 text-sm text-slate-700">
              For opportunities, collaborations, or engineering conversations, email works best.
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <a
                href="mailto:keshav.k.jha.dev@gmail.com"
                className="card-hover flex items-center gap-3 rounded-xl border border-teal-900/10 bg-teal-50/55 px-4 py-3"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-teal-700">
                  <FaEnvelope className="h-4 w-4" />
                </span>
                <span>
                  <span className="block break-all font-semibold text-slate-800">keshav.k.jha.dev@gmail.com</span>
                  <span className="text-xs text-slate-600">Primary communication channel</span>
                </span>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-orange-900/10 bg-orange-50/55 px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-orange-700">
                  <FaLocationDot className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-semibold text-slate-800">India (IST)</span>
                  <span className="text-xs text-slate-600">Comfortable with remote collaboration</span>
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Response expectation</p>
              <p className="mt-1">You&apos;ll usually get a response within 24 hours with either follow-up questions or a proposed plan.</p>
            </div>
          </motion.aside>

          <motion.div variants={fadeIn('up', 0.12)} className="rounded-2xl border border-teal-900/10 bg-white/95 p-6">
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
