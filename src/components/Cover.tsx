import React from 'react'
import { motion } from 'framer-motion'

export default function Cover() {
    return (
        <section className="min-h-screen w-full bg-[#f2efdf] relative flex flex-col pt-0 md:pt-10 overflow-hidden font-mono pr-0 md:pr-24 pb-24 md:pb-0">

            {/* Background Map Grid Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#4A3B2A 1px, transparent 1px), linear-gradient(90deg, #4A3B2A 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }}
            />

            {/* SHARED: Logo Placeholders */}
            <div className="w-full flex justify-center gap-8 md:gap-12 px-4 z-10 pt-4 md:pt-0 mb-4 md:mb-20">
                <motion.img
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    src="/stblogo.png"
                    alt="IEEE STB Logo"
                    className="h-16 md:h-24 w-auto object-contain drop-shadow-lg"
                />
                <motion.img
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    src="/cslogo.png"
                    alt="IEEE CS Logo"
                    className="h-16 md:h-24 w-auto object-contain drop-shadow-lg scale-90" // CS logo often needs slight scaling to match visual weight
                />
            </div>

            {/* MOBILE HERO: Full width single image + Text */}
            <div className="md:hidden w-full flex-grow flex flex-col items-center justify-start gap-4">
                <img
                    src="/mobile_hero.png"
                    alt="IEEE CS Chapter Recap 2025 Adventure Log"
                    className="w-full h-auto object-cover mix-blend-multiply border-y-4 border-black"
                />

                <div className="text-center px-4 mt-2">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-black mb-1">
                        Adventure Log
                    </h2>
                    <p className="text-[10px] font-bold tracking-[0.3em] text-black/60 uppercase">
                        Vol. 2025 // IEEE CS BMSIT&M
                    </p>
                </div>
            </div>

            {/* DESKTOP HERO: Composed Layout */}
            <div className="hidden md:flex flex-col w-full h-full relative z-10">

                {/* 2. CENTER: Main Title Logo */}
                <div className="flex-grow flex flex-col items-center justify-center relative px-4 pb-20">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.3, duration: 1 }}
                        className="relative w-full max-w-[900px]"
                    >
                        <img
                            src="/ieee_recap_title.jpg"
                            alt="IEEE CS Chapter Recap 2025"
                            className="w-full h-auto mix-blend-multiply"

                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 flex flex-col items-center gap-2"
                    >
                        <p className="text-sm font-bold text-black/60 tracking-[0.3em] uppercase">
                            — Official Chapter Record —
                        </p>
                        <div className="w-12 h-1 bg-black/20" />
                    </motion.div>
                </div>
            </div>

            {/* Border Frame (Desktop Only) */}
            <div className="hidden md:flex absolute inset-8 right-24 border-4 border-black pointer-events-none z-50 rounded-lg flex flex-col justify-between">
                <div className="flex justify-between p-2">
                    <span className="w-4 h-4 border-t-4 border-l-4 border-black"></span>
                    <span className="w-4 h-4 border-t-4 border-r-4 border-black"></span>
                </div>
                <div className="flex justify-between p-2">
                    <span className="w-4 h-4 border-b-4 border-l-4 border-black"></span>
                    <span className="w-4 h-4 border-b-4 border-r-4 border-black"></span>
                </div>
            </div>

        </section>
    )
}
