'use client'

import Image from 'next/image'
import SocialLinks from './SocialLinks'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HeroSection() {
    const [index, setIndex] = useState(0)
    const [showCarousel, setShowCarousel] = useState(true)

    useEffect(() => {
        const graduationDate = new Date('2026-05-31')
        const today = new Date()

        if (today > graduationDate) {
            setShowCarousel(false)
            return
        }

        const interval = setInterval(() => {
            setIndex((prev) => (prev === 0 ? 1 : 0))
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const cards = [
        {
            text: (
                <>
                    <span className="font-medium text-indigo-700">Currently pursuing</span>{' '}
                    <span className="font-semibold text-purple-700">Masters in Technology (AI & Data Science)</span>{' '}
                    at{' '}
                    <span className="font-medium text-indigo-800">NIT Durgapur</span>
                </>
            ),
            date: "2024-2026"
        },
        {
            text: (
                <>
                    <span className="font-medium text-indigo-700">Currently working as</span>{' '}
                    <span className="font-semibold text-purple-700">Project Intern</span>{' '}
                    at{' '}
                    <span className="font-medium text-indigo-800">Oracle</span>
                </>
            ),
            date: "Jan 2026 - Present"
        }
    ]

    const activeCard = showCarousel ? cards[index] : cards[1]

    return (
        <section className="relative py-20 px-4 max-w-6xl mx-auto text-center bg-white">
            {/* Background */}
            <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
                <div className="absolute inset-0 bg-[url('/images/dots.svg')] bg-center"></div>
            </div>
            
            <div className="relative z-10 space-y-6 w-lg items-center m-auto">

                {/* Avatar */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-100 mb-6 shadow-sm hover:shadow-md transition-all"
                >
                    <Image 
                        src="/images/profile.jpg" 
                        alt="Keshav Kumar Jha"
                        width={160}
                        height={160}
                        className="object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-300"
                        priority
                    />
                </motion.div>

                {/* Name */}
                <motion.h1 
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
                >
                    Keshav Kumar Jha
                </motion.h1>

                {/* Roles */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-xl md:text-2xl h-8 font-medium text-indigo-600"
                >
                    <TypeAnimation
                        sequence={[
                            'AI & Data Science Engineer',
                            2000,
                            'IoT & Embedded Systems Engineer',
                            2000,
                            'Full Stack Developer',
                            2000,
                        ]}
                        speed={40}
                        deletionSpeed={60}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                        cursor
                    />
                </motion.div>

                {/* Carousel Card */}
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="max-w-md mx-auto"
                >
                    <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-lg">

                        {/* FIXED HEIGHT CONTENT AREA */}
                        <div className="min-h-[72px] flex items-center justify-center">
                            <motion.p
                                key={showCarousel ? index : 'oracle'}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-lg text-gray-700 leading-relaxed"
                            >
                                {activeCard.text}
                            </motion.p>
                        </div>

                        {/* Date badge */}
                        <div className="absolute -bottom-3 -right-3 bg-white px-3 py-1 rounded-lg text-sm font-medium text-indigo-600 shadow border border-gray-100 whitespace-nowrap">
                            {activeCard.date}
                        </div>

                        {/* Glow */}
                        <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 -z-10 opacity-70 blur-sm"></div>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <SocialLinks />
                </motion.div>

            </div>
        </section>
    )
}