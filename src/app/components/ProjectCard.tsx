'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaChevronDown } from 'react-icons/fa6'
import { Project } from '../types/types'

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="card-hover overflow-hidden rounded-2xl border border-teal-900/10 bg-white/95 shadow-sm">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/90 p-3 backdrop-blur-sm">
          <h3 className="display-font text-xl font-bold text-slate-900">{project.title}</h3>
          <p className="text-sm text-slate-700">{project.summary}</p>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Problem</p>
          <p className="mt-1 text-sm text-slate-700">{project.problem}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">My Contribution</p>
          <p className="mt-1 text-sm text-slate-700">{project.role}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Impact</p>
          <p className="mt-1 text-sm text-slate-700">{project.impact}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((stack) => (
            <span key={stack} className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
              {stack}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="flex w-full items-center justify-between rounded-lg border border-teal-900/10 bg-slate-50 px-3 py-2 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          aria-expanded={expanded}
        >
          <span>Case Study Details</span>
          <FaChevronDown className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4 overflow-hidden"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">Key Features</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">Technical Highlights</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  {project.technicalHighlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-3 text-sm text-slate-700">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">Challenge & Learnings</p>
                <p className="mt-1">{project.challengeAndLearning}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-3 pt-1">
          {project.links.map((link) => (
            <Link
              key={`${project.title}-${link.type}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                link.type === 'demo'
                  ? 'primary-button text-sm'
                  : 'secondary-button border-slate-200 text-sm text-slate-700'
              }
            >
              {link.label}
              <FaArrowUpRightFromSquare className="text-xs" />
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}
