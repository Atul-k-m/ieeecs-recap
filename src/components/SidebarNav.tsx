import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SidebarNav() {


    const [activeSection, setActiveSection] = useState('01')
    const [isOpen, setIsOpen] = useState(false)

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

    const menuItems = [
        { id: 'home', label: 'HOME', num: '01' },
        { id: 'timeline', label: 'TIMELINE', num: '02' },
        { id: 'socials', label: 'NETWORK', num: '03' },
        { id: 'team', label: 'TEAM', num: '04' },
        { id: 'finale', label: 'FINALE', num: '05' },
    ]

    const scrollToSection = (id: string) => {
        setIsOpen(false)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const activeLabel = menuItems.find(item => item.num === activeSection)?.label || 'MENU'

    return (
        <>
            {/* --- NAVIGATION OVERLAY (Full Screen) --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black/95 z-[60] flex flex-col items-center justify-center backdrop-blur-sm"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 text-white p-4 hover:scale-110 transition-transform"
                        >
                            <div className="w-8 h-8 relative">
                                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FFD700] rotate-45" />
                                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FFD700] -rotate-45" />
                            </div>
                        </button>

                        <div className="flex flex-col gap-8 text-center">
                            {menuItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    whileHover={{ scale: 1.1, letterSpacing: '0.2em' }}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 hover:from-[#FFD700] hover:to-[#FFA500] transition-all font-mono tracking-widest uppercase group flex items-center gap-4 justify-center"
                                >
                                    <span className="text-sm md:text-lg text-gray-600 group-hover:text-[#FFD700] font-sans font-bold translate-y-2">{item.num}</span>
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- DESKTOP SIDEBAR (Visible on md and up) --- */}
            <div className="hidden md:flex fixed right-0 top-0 bottom-0 w-16 bg-black z-50 flex-col justify-between items-center py-8 border-l border-white/10">

                {/* Top: Menu Trigger */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 hover:gap-2 transition-all group cursor-pointer active:scale-95"
                >
                    <div className="w-6 h-[2px] bg-white group-hover:bg-[#FFD700]" />
                    <div className="w-6 h-[2px] bg-white group-hover:bg-[#FFD700]" />
                    <div className="w-6 h-[2px] bg-white group-hover:bg-[#FFD700]" />
                </button>

                {/* Center: Vertical Progress Bar text */}
                <div className="flex-1 flex items-center justify-center relative w-full my-8">


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
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex gap-2 w-[90%] max-w-sm justify-center">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-14 bg-black/90 backdrop-blur-md text-white rounded-full flex items-center justify-between px-6 shadow-[0px_10px_20px_rgba(0,0,0,0.3)] border border-white/20 active:border-[#FFD700] w-full"
                >
                    <div className="flex items-center">
                        <span className="font-mono text-xs text-[#FFD700] mr-3">CH.{activeSection}</span>
                        <div className="h-4 w-[1px] bg-white/20 mr-3" />
                        <span className="font-bold text-sm tracking-widest">{activeLabel}</span>
                    </div>

                    {/* Dynamic Dot Indicator */}
                    <div className="flex gap-1.5">
                        {[1, 2, 3, 4, 5].map(i => (
                            <motion.div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${activeSection === `0${i}` ? 'bg-[#FFD700]' : 'bg-white/20'}`}
                            />
                        ))}
                    </div>
                </motion.button>
            </div>
        </>
    )
}
