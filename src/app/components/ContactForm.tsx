'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  name: string
  email: string
  projectType: string
  message: string
}

const inputVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.07,
      duration: 0.35,
    },
  }),
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setIsSuccess(false)

    try {
      const response = await fetch('https://formspree.io/f/xkopoewz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSuccess(true)
      reset()
    } catch (error) {
      console.error('Contact form submission failed', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <motion.div custom={0} initial="hidden" animate="visible" variants={inputVariants}>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold text-slate-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required.' })}
          className="w-full rounded-xl border border-teal-900/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-teal-500"
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-xs font-medium text-rose-600">{errors.name.message}</p>}
      </motion.div>

      <motion.div custom={1} initial="hidden" animate="visible" variants={inputVariants}>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email.',
            },
          })}
          className="w-full rounded-xl border border-teal-900/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-teal-500"
          placeholder="you@company.com"
        />
        {errors.email && <p className="mt-1 text-xs font-medium text-rose-600">{errors.email.message}</p>}
      </motion.div>

      <motion.div custom={2} initial="hidden" animate="visible" variants={inputVariants}>
        <label htmlFor="projectType" className="mb-1 block text-sm font-semibold text-slate-700">
          What do you want to build?
        </label>
        <input
          id="projectType"
          type="text"
          {...register('projectType')}
          className="w-full rounded-xl border border-teal-900/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-teal-500"
          placeholder="Dashboard, web app, feature enhancement..."
        />
      </motion.div>

      <motion.div custom={3} initial="hidden" animate="visible" variants={inputVariants}>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'Please share a short message.' })}
          className="w-full rounded-xl border border-teal-900/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-teal-500"
          placeholder="Tell me about your goal, timeline, and constraints."
        />
        {errors.message && <p className="mt-1 text-xs font-medium text-rose-600">{errors.message.message}</p>}
      </motion.div>

      <motion.div custom={4} initial="hidden" animate="visible" variants={inputVariants} className="pt-2">
        <button type="submit" disabled={isSubmitting} className="primary-button w-full disabled:cursor-not-allowed disabled:opacity-70">
          {isSubmitting ? 'Sending message...' : 'Send message'}
        </button>
      </motion.div>

      {isSuccess && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-teal-200 bg-teal-50 px-3 py-2 text-sm text-teal-900"
        >
          Message received. Thank you. I usually reply within 24 hours.
        </motion.p>
      )}
    </form>
  )
}
