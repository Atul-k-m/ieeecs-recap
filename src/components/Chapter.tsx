import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ChapterProps {
    number: string
    title: string
    subtitle: string
}

export default function Chapter({ number, title, subtitle }: ChapterProps) {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-20%' })

    return (
        <section
            ref={ref}
            className="full-height flex items-center justify-center safe-padding bg-black text-white relative overflow-hidden"
        >
            {/* Large background number */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            >
                <span className="text-[50vw] leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                    {number}
                </span>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl">
                {/* Chapter label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="chapter-marker bg-white text-black">
                        CHAPTER {number}
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-display"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    {title}
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.6 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 text-lg md:text-xl tracking-wide"
                    style={{ fontFamily: 'var(--font-mono)' }}
                >
                    {subtitle}
                </motion.p>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 h-0.5 bg-white w-16 mx-auto origin-center"
                />
            </div>
        </section>
    )
}
