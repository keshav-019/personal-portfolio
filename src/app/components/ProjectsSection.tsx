'use client'

import { motion } from 'framer-motion'
import { PROJECTS } from '../lib/constants'
import { fadeIn, staggerContainer } from '../lib/motion'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <motion.div
        variants={staggerContainer(0.1, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeIn('up', 0)} className="mb-10 space-y-4">
          <p className="section-kicker">Project Case Studies</p>
          <h2 className="section-heading max-w-3xl">Not just screenshots. Problem, decisions, and impact.</h2>
          <p className="max-w-3xl text-slate-700">
            Each project answers what problem it solves, what I owned, and what technical decisions made it work.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div key={project.title} variants={fadeIn('up', 0.06 * index)}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
