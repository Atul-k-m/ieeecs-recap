import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Event {
    id: number
    month: string
    title: string
    description: string
    quote: string
    featured?: boolean
}

interface EventPanelProps {
    event: Event
    index: number
    isEven: boolean
}

export default function EventPanel({ event, index, isEven }: EventPanelProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-10%' })

    return (
        <section
            className={`min-h-screen flex items-center safe-padding py-16 ${event.featured ? 'bg-black text-white' : 'bg-white text-black'
                }`}
        >
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 80, rotate: isEven ? -2 : 2 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`w-full max-w-3xl ${isEven ? 'mr-auto' : 'ml-auto'}`}
            >
                {/* Panel */}
                <div className={`relative ${event.featured ? 'border-4 border-white' : 'manga-panel'}`}>

                    {/* Month tag */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                        className={`absolute -top-4 ${isEven ? 'left-4' : 'right-4'} ${event.featured ? 'bg-white text-black' : 'bg-black text-white'
                            } px-4 py-1`}
                    >
                        <span className="text-sm font-bold tracking-[0.2em]" style={{ fontFamily: 'var(--font-mono)' }}>
                            {event.month}
                        </span>
                    </motion.div>

                    {/* Content */}
                    <div className="p-6 md:p-10">
                        {/* Event number - large faded background */}
                        <div className={`absolute ${isEven ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 pointer-events-none select-none`}>
                            <span
                                className="text-[10rem] md:text-[14rem] leading-none opacity-5 font-bold"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {String(event.id).padStart(2, '0')}
                            </span>
                        </div>

                        {/* Title */}
                        <motion.h3
                            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="relative z-10 text-display mb-4"
                            style={{ fontFamily: 'var(--font-title)' }}
                        >
                            {event.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="relative z-10 text-lg md:text-xl leading-relaxed mb-6 max-w-lg"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            {event.description}
                        </motion.p>

                        {/* Quote */}
                        <motion.blockquote
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className={`relative z-10 text-xl md:text-2xl italic pl-4 border-l-4 ${event.featured ? 'border-white' : 'border-black'
                                }`}
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            {event.quote}
                        </motion.blockquote>
                    </div>

                    {/* Speed lines for featured */}
                    {event.featured && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    background: 'repeating-linear-gradient(90deg, transparent, transparent 3px, white 3px, white 4px)'
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* Page number */}
                <div className={`text-center mt-6 text-sm tracking-widest opacity-50`}>
                    {String(index + 2).padStart(3, '0')}
                </div>
            </motion.div>
        </section>
    )
}
