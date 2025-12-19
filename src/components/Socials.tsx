import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Github, MessageCircle } from 'lucide-react'

const socialLinks = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/ieeecs.bmsit/',
        icon: Instagram,
        color: 'hover:bg-[#E1306C] hover:text-white', // Insta brand color hint or just black? simpler is better.
        description: '@ieeecs.bmsit'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/ieee-cs-bmsit/about/?viewAsMember=true',
        icon: Linkedin,
        color: 'hover:bg-[#0077B5] hover:text-white',
        description: 'IEEE CS BMSIT&M'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/ieee-cs-bmsit',
        icon: Github,
        color: 'hover:bg-[#333] hover:text-white',
        description: 'ieee-cs-bmsit'
    },
    {
        name: 'WhatsApp',
        url: 'https://chat.whatsapp.com/JmWZJSNpQLW06Dd6UwLUK6',
        icon: MessageCircle,
        color: 'hover:bg-[#25D366] hover:text-white',
        description: 'Community Group'
    }
]

export default function Socials() {
    return (
        <section className="py-10 md:py-20 safe-padding bg-white relative border-t-4 border-black">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-display mb-4 uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                        Join the Network
                    </h2>
                    <p className="text-xl tracking-widest opacity-60" style={{ fontFamily: 'var(--font-body)' }}>
                        CONNECT WITH US
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                        >
                            <motion.div
                                whileHover={{ y: -8, boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}
                                className="h-full border-[3px] border-black p-8 flex flex-col items-center justify-center gap-6 bg-white transition-colors duration-300 relative overflow-hidden"
                            >
                                {/* Hover Background - Reveal on hover */}
                                <div className={`absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out -z-0`} />

                                {/* Icon */}
                                <div className="relative z-10 p-4 border-2 border-black rounded-full bg-white group-hover:scale-110 transition-transform duration-300 group-hover:invert">
                                    <social.icon size={32} strokeWidth={2} />
                                </div>

                                {/* Text */}
                                <div className="relative z-10 text-center group-hover:text-white transition-colors duration-300">
                                    <h3 className="text-2xl font-black uppercase mb-1" style={{ fontFamily: 'var(--font-title)' }}>
                                        {social.name}
                                    </h3>
                                    <p className="text-sm font-mono opacity-60 group-hover:opacity-100">
                                        {social.description}
                                    </p>
                                </div>

                                {/* Corner Accents */}
                                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-black group-hover:border-white transition-colors" />
                                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-black group-hover:border-white transition-colors" />
                            </motion.div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
