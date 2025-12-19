import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function SidebarNav() {
    const { scrollYProgress } = useScroll()
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const [activeSection, setActiveSection] = useState('01')

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY
            const windowHeight = window.innerHeight
            const totalHeight = document.body.scrollHeight - windowHeight
            const progress = scrollPos / totalHeight

            if (progress < 0.2) setActiveSection('01')
            else if (progress < 0.4) setActiveSection('02')
            else if (progress < 0.6) setActiveSection('03')
            else if (progress < 0.8) setActiveSection('04')
            else setActiveSection('05')
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* --- DESKTOP SIDEBAR (Visible on md and up) --- */}
            <div className="hidden md:flex fixed right-0 top-0 bottom-0 w-16 bg-black z-50 flex-col justify-between items-center py-8 border-l border-white/10">

                {/* Top: Branding/Logo Mark */}
                <div className="w-8 h-8 bg-white rotate-45 flex items-center justify-center">
                    <div className="w-4 h-4 bg-black" />
                </div>

                {/* Center: Vertical Progress Bar text */}
                <div className="flex-1 flex items-center justify-center relative w-full my-8">
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/20">
                        <motion.div
                            style={{ scaleY, transformOrigin: 'top' }}
                            className="absolute top-0 left-0 right-0 bg-white w-full h-full origin-top"
                        />
                    </div>

                    {/* Rotated Vertical Text */}
                    <div className="-rotate-90 whitespace-nowrap text-white font-bold tracking-[0.3em] text-xs mix-blend-difference z-10 py-4 bg-black">
                        IEEE CS • 2025 RECAP • <span className="text-[#FFD700]">CHAPTER {activeSection}</span>
                    </div>
                </div>

                {/* Bottom: Current Page Number */}
                <div className="text-white font-mono text-xl font-bold tracking-widest relative">
                    {activeSection}
                    <span className="absolute -top-2 -right-2 text-[10px] opacity-50">/05</span>
                </div>
            </div>

            {/* --- MOBILE FLOATING DOCK (Visible on small screens) --- */}
            {/* Replaced single button with a stylish pill dock */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 bg-black text-white rounded-full flex items-center px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] border-2 border-white/20"
                >
                    <span className="font-mono text-xs text-[#FFD700] mr-2">CH.{activeSection}</span>
                    <div className="h-4 w-[1px] bg-white/20 mx-2" />
                    <span className="font-bold text-sm tracking-widest">NAVIGATE</span>

                    {/* Dynamic Dot Indicator */}
                    <div className="flex gap-1 ml-3">
                        {[1, 2, 3, 4, 5].map(i => (
                            <motion.div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${activeSection === `0${i}` ? 'bg-white' : 'bg-white/20'}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    )
}
