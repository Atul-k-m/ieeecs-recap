import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function MissionVision() {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-20%' })

    return (
        <section
            ref={ref}
            className="min-h-screen flex flex-col justify-center items-center py-24 safe-padding bg-[#1a1a1a] text-[#F4F1EA] relative overflow-hidden"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }} />

            <div className="max-w-6xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                {/* MISSION - Left Side */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <div className="border-b-[4px] border-[#F4F1EA] mb-6 inline-block pr-12">
                        <h2 className="text-[12vw] md:text-8xl font-black tracking-tighter"
                            style={{ fontFamily: '"Rye", serif' }}>
                            MISSION
                        </h2>
                    </div>
                    <p className="text-xl md:text-3xl leading-relaxed font-serif italic opacity-90">
                        "To gather the <span className="font-bold text-white border-b-2 border-white">bravest innovators</span> and set sail towards the unknown horizons of technology."
                    </p>
                </motion.div>

                {/* VISION - Right Side */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-right flex flex-col items-end"
                >
                    <div className="border-b-[4px] border-[#F4F1EA] mb-6 inline-block pl-12 text-right">
                        <h2 className="text-[12vw] md:text-8xl font-black tracking-tighter"
                            style={{ fontFamily: '"Rye", serif' }}>
                            VISION
                        </h2>
                    </div>
                    <p className="text-xl md:text-3xl leading-relaxed font-serif italic opacity-90 max-w-lg ml-auto">
                        "A world where every line of code creates a <span className="font-bold text-white border-b-2 border-white">legendary legacy</span>."
                    </p>
                </motion.div>

            </div>

            {/* DYNAMIC BACKGROUND TEXT */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
                <span className="text-[40vw] font-black leading-none" style={{ fontFamily: '"Rye", serif' }}>
                    IEEE
                </span>
            </div>

        </section>
    )
}
