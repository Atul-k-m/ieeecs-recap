import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TeamMember {
    role: string
    name: string
    image: string
}

interface JigsawTeamProps {
    team: TeamMember[]
}

export default function JigsawTeam({ team }: JigsawTeamProps) {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-10%' })

    // Enhanced Puzzle Path that looks more like a standard piece with knobs
    const clipPathData = 'path("M 20 0 L 40 0 C 40 -15 60 -15 60 0 L 80 0 L 100 0 L 100 40 C 115 40 115 60 100 60 L 100 100 L 80 100 L 60 100 C 60 115 40 115 40 100 L 20 100 L 0 100 L 0 60 C -15 60 -15 40 0 40 L 0 0 Z")'

    return (
        <section
            ref={ref}
            className="min-h-screen py-24 bg-[#E0E0E0] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="mb-16 text-center"
                >
                    <h2
                        className="text-[10vw] md:text-8xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-800"
                        style={{ fontFamily: '"Dela Gothic One", cursive', WebkitTextStroke: '2px black' }}
                    >
                        THE CREW
                    </h2>
                    <div className="h-4 w-24 bg-black mx-auto mt-4 skew-x-12" />
                </motion.div>

                {/* PUZZLE GRID */}
                <div className="flex flex-wrap justify-center content-center -m-3 md:-m-4 pb-20">
                    {team.map((member, index) => {
                        return (
                            <motion.div
                                key={member.role}
                                initial={{ scale: 0, rotate: Math.random() * 360 }}
                                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                                transition={{
                                    delay: index * 0.05,
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 15
                                }}
                                whileHover={{
                                    scale: 1.15,
                                    zIndex: 50,
                                    rotate: Math.random() * 6 - 3,
                                    filter: 'drop-shadow(0px 20px 20px rgba(0,0,0,0.5))'
                                }}
                                className="relative w-32 h-32 md:w-56 md:h-56 m-1 md:m-0 z-10 transition-all duration-300 group"
                            >
                                {/* SHADOW LAYER (Simulated via SVG or div) */}
                                <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 opacity-20" style={{ clipPath: clipPathData }} />

                                {/* IMAGE CONTAINER CLIPPED */}
                                <div
                                    className="absolute inset-[2px] bg-white flex items-center justify-center overflow-hidden"
                                    style={{
                                        clipPath: clipPathData,
                                    }}
                                >
                                    {/* Fallback pattern if image fails or loading */}
                                    <div className="absolute inset-0 bg-gray-200" />

                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 contrast-125"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none'; // Hide broken image
                                        }}
                                    />

                                    {/* OVERLAY for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

                                    {/* TEXT CONTENT */}
                                    <div className="absolute bottom-6 left-0 right-0 text-center p-2">
                                        <h3 className="text-white font-black text-xs md:text-lg leading-none mb-1 font-mono uppercase truncate px-2">{member.name}</h3>
                                        <p className="text-[#FFD700] text-[8px] md:text-xs font-bold tracking-widest uppercase">{member.role}</p>
                                    </div>
                                </div>

                                {/* Border Stroke Simulation (Overlay div with slightly larger clip or SVG stroke) */}
                                {/* Since standard CSS borders don't follow clip-path perfectly, we use a drop-shadow filter on the parent or an inset shadow */}

                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
