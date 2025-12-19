import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Event {
    id: number
    month: string
    title: string
    description: string
    size?: 'small' | 'medium' | 'large' | 'wide' | 'tall'
}

interface BentoGridProps {
    events: Event[]
}

export default function BentoGrid({ events }: BentoGridProps) {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-10%' })

    // Size classes for Bento grid items
    const getSizeClass = (size?: string) => {
        switch (size) {
            case 'large': return 'md:col-span-2 md:row-span-2'
            case 'wide': return 'md:col-span-2'
            case 'tall': return 'md:row-span-2'
            case 'medium': return 'md:col-span-1 md:row-span-1'
            default: return ''
        }
    }

    return (
        <section
            ref={ref}
            className="min-h-screen safe-padding py-16 bg-white"
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <span className="inline-block px-4 py-2 bg-black text-white text-xs tracking-[0.3em] mb-4">
                    CHAPTER 01
                </span>
                <h2
                    className="text-[15vw] md:text-[10vw] leading-[0.9] font-black"
                    style={{
                        fontFamily: 'var(--font-display)',
                        WebkitTextStroke: '2px black',
                        color: 'white',
                        textShadow: '4px 4px 0 #000'
                    }}
                >
                    EVENTS
                </h2>
            </motion.div>

            {/* BENTO GRID */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {events.map((event, index) => (
                    <motion.article
                        key={event.id}
                        initial={{ opacity: 0, y: 50, rotate: Math.random() * 4 - 2 }}
                        animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                        transition={{ delay: 0.1 + index * 0.08, duration: 0.5, type: 'spring' }}
                        whileHover={{ y: -8, boxShadow: '12px 12px 0 #000' }}
                        className={`
              relative bg-white border-4 border-black p-6 md:p-8
              ${getSizeClass(event.size)}
              cursor-default transition-shadow duration-200
            `}
                        style={{ boxShadow: '8px 8px 0 #000' }}
                    >
                        {/* Month badge */}
                        <div className="absolute -top-3 left-4 px-3 py-1 bg-black text-white text-xs tracking-[0.2em] font-bold">
                            {event.month}
                        </div>

                        {/* Event number - background */}
                        <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none select-none">
                            <span
                                className="text-[6rem] md:text-[8rem] leading-none font-black"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {String(event.id).padStart(2, '0')}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-end min-h-[150px] md:min-h-[200px]">
                            <h3
                                className="text-2xl md:text-4xl font-black tracking-tight mb-2"
                                style={{ fontFamily: 'var(--font-gothic)' }}
                            >
                                {event.title}
                            </h3>
                            <p
                                className="text-sm md:text-base opacity-70 leading-relaxed"
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                {event.description}
                            </p>
                        </div>

                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-6 h-6 bg-black"
                            style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                    </motion.article>
                ))}
            </div>
        </section>
    )
}
