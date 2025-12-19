import React from 'react'

interface TeamMember {
    role: string
    name: string
    image: string
}

interface TeamPageProps {
    team: TeamMember[]
}

export default function TeamPage({ team }: TeamPageProps) {

    return (
        <section
            className="min-h-screen safe-padding py-20 notebook-bg"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-display mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        THE CREW
                    </h2>
                    <p className="text-mono-lg opacity-60">
                        To everyone who made 2025 unforgettable
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 max-w-none mx-auto">
                    {team.map((member, index) => (
                        <div
                            key={member.name}
                            className="relative w-full aspect-[1/1.5] md:aspect-[1/1.4] bg-[#F4F1EA] shadow-xl flex flex-col transform hover:scale-105 transition-transform duration-300"
                            style={{
                                boxShadow: '2px 5px 15px rgba(0,0,0,0.4)',
                                border: '2px solid #ddd'
                            }}
                        >
                            {/* Paper Texture Overlay */}
                            <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply z-20"
                                style={{
                                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")',
                                    filter: 'contrast(1.2) sepia(0.2)'
                                }}
                            />

                            {/* Content Area */}
                            <div className="absolute inset-[4px] md:inset-[12px] border-[2px] md:border-[3px] border-[#4A3B2A] flex flex-col items-center bg-[#F4F1EA]">

                                {/* Decorative Corners */}
                                <div className="absolute top-1 left-1 w-2 h-2 border-t-[3px] border-l-[3px] border-[#4A3B2A]" />
                                <div className="absolute top-1 right-1 w-2 h-2 border-t-[3px] border-r-[3px] border-[#4A3B2A]" />
                                <div className="absolute bottom-1 left-1 w-2 h-2 border-b-[3px] border-l-[3px] border-[#4A3B2A]" />
                                <div className="absolute bottom-1 right-1 w-2 h-2 border-b-[3px] border-r-[3px] border-[#4A3B2A]" />

                                {/* HEADER: WITH FONT SIZE ADJUSTED FOR CARD */}
                                <div className="mt-2 md:mt-4 w-full text-center">
                                    <h1 className="text-xl md:text-5xl leading-[0.8] font-black tracking-wide text-[#2A1F1B] scale-y-125"
                                        style={{ fontFamily: '"Playfair Display", serif' }}>
                                        WANTED
                                    </h1>
                                </div>

                                {/* SUBHEADER */}
                                <div className="w-full relative mt-1 mb-2 text-center">
                                    <span className="text-[0.5rem] md:text-[0.6rem] font-serif font-black tracking-widest text-[#5A4B3A] opacity-80 decoration-slate-900 border-2 border-transparent">
                                        ( DEAD OR ALIVE )
                                    </span>
                                </div>

                                {/* PORTRAIT CONTAINER */}
                                <div className="w-[85%] md:w-[95%] aspect-square bg-[#D6D0C4] border-[2px] border-[#4A3B2A] relative overflow-hidden shadow-inner flex items-center justify-center p-1">
                                    <div className="absolute inset-0 opacity-10"
                                        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 4px)' }} />

                                    {/* Image */}
                                    <div className="w-full h-full bg-white border border-black flex items-center justify-center relative overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                                        />
                                        <span className="absolute bottom-1 right-1 text-[0.6rem] font-mono font-bold bg-black text-white px-1 z-10">
                                            #{String(index + 1).padStart(3, '0')}
                                        </span>
                                    </div>
                                </div>

                                {/* NAME (Big) */}
                                <div className="mt-1 text-center w-full px-1 flex-grow flex flex-col items-center justify-center">
                                    <h2 className="text-xs md:text-xl leading-[0.9] font-serif font-black text-[#2A1F1B] uppercase tracking-tighter"
                                        style={{ fontFamily: '"Rye", serif' }}>
                                        {member.name}
                                    </h2>
                                    <p className="text-[0.4rem] md:text-[0.6rem] font-mono font-bold uppercase tracking-widest mt-0.5 md:mt-1">
                                        {member.role}
                                    </p>
                                </div>

                                {/* BOUNTY */}
                                <div className="w-[90%] flex items-end mb-2 md:mb-2">
                                    <span className="text-sm md:text-lg font-serif font-bold text-[#2A1F1B] pr-1">฿</span>
                                    <div className="flex-1 border-b-[2px] border-[#4A3B2A] border-dashed text-right">
                                        <span className="text-[0.5rem] md:text-sm font-mono font-bold tracking-widest text-[#2A1F1B]">
                                            {1000000 * (index + 1)}-
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional message */}
                <div
                    className="text-center mt-16"
                >
                    <p className="text-lg mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                        + Every participant, attendee, and supporter
                    </p>
                    <p className="text-sm opacity-50" style={{ fontFamily: 'var(--font-mono)' }}>
                        You are the heart of IEEE CS
                    </p>
                </div>
            </div>
        </section>
    )
}
