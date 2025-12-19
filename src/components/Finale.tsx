import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Finale() {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-20%' })

    return (
        <section
            ref={ref}
            className="full-height flex flex-col justify-center items-center safe-padding bg-black text-white relative overflow-hidden"
        >
            {/* Halftone background */}
            <div className="absolute inset-0 halftone opacity-[0.02]" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl">
                {/* Old year - struck through */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <span
                        className="text-mega opacity-30"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        2025
                    </span>
                    {/* Strike line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="absolute top-1/2 left-0 right-0 h-2 md:h-4 bg-white origin-left"
                    />
                </motion.div>

                {/* New year */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
                    className="relative -mt-8 md:-mt-16"
                >
                    <span
                        className="text-mega underline-brutal"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        2026
                    </span>
                </motion.div>

                {/* Message */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 }}
                    className="mt-12 text-mono-lg tracking-widest"
                >
                    THE STORY CONTINUES
                </motion.p>

                {/* Dots */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.4 }}
                    className="flex justify-center gap-2 mt-8"
                >
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                            className="w-2 h-2 bg-white rounded-full"
                        />
                    ))}
                </motion.div>
            </div>

            {/* End mark - Removed per user request */}

            {/* Footer */}
            <div className="absolute bottom-4 right-4 text-right text-xs opacity-50">
                IEEE COMPUTER SOCIETY<br />
                © 2025
            </div>
        </section>
    )
}
