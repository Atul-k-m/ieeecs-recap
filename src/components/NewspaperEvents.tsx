import React from 'react'

interface NewspaperEventsProps {
    events: any[]
}

export default function NewspaperEvents({ events }: NewspaperEventsProps) {
    return (
        <section
            className="min-h-screen py-20 bg-white text-black relative font-serif"
        >

            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 box-border">

                {/* NEWSPAPER HEADER */}
                <div className="border-b-[4px] border-black mb-8 pb-2 text-center">
                    <div className="flex justify-between items-center border-b-[1px] border-black pb-2 mb-4 px-1">
                        <span className="font-mono text-xs uppercase">Vol. 2025</span>
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em]">IEEE Computer Society • Official Recap</span>
                        <span className="font-mono text-xs uppercase">Price: FREE</span>
                    </div>
                    <h2 className="text-[13vw] md:text-[9rem] leading-[0.85] font-black tracking-[-0.05em] mb-4 text-black"
                        style={{ fontFamily: '"Playfair Display", serif' }}>
                        The Chronicle
                    </h2>
                    <div className="border-t-[1px] border-black py-1 flex justify-between items-center px-2 text-xs font-bold uppercase tracking-widest font-sans">
                        <span>Innovation</span>
                        <span>Technology</span>
                        <span>Community</span>
                        <span>Code</span>
                    </div>
                </div>

                {/* LEAD STORY: IEEE SoC */}
                <div
                    className="mb-12 border-b-[4px] border-black pb-12"
                >
                    <div className="flex items-start gap-4 mb-4">
                        <span className="bg-black text-white px-2 py-1 text-xs font-bold uppercase tracking-widest">Headline</span>
                        <span className="text-xs font-mono uppercase mt-1">Written by Core Team</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Headline & Text */}
                        <div className="lg:col-span-8">
                            <h3 className="text-5xl md:text-7xl font-bold mb-6 leading-[0.9] tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                                IEEE SoC Initiative Breaks All Previous Records
                            </h3>
                            <div className="columns-1 md:columns-2 gap-8 text-lg font-serif leading-relaxed text-justify hyphens-auto">
                                <p className="mb-4">
                                    <span className="float-left text-5xl font-black mr-2 mt-[-6px] font-sans">T</span>he Summer of Code initiative has concluded with unprecedented success. Over the course of three months, students from across the region gathered to build the future of technology. Innovation peaked as teams collaborated on open-source projects ranging from AI-driven healthcare solutions to decentralized finance platforms.
                                </p>
                                <p>
                                    "The energy was electric," said the event coordinator. Participants worked through sleepless nights, fueled by passion and caffeine, to deliver MVPs that stunned the judges. This year's SoC has set a new benchmark for student-led technical innovation.
                                </p>
                            </div>
                        </div>

                        {/* Image / Sidebar */}
                        <div className="lg:col-span-4 flex flex-col gap-4">
                            <div className="border-2 border-black p-1 bg-white shadow-sm">
                                <div className="aspect-[4/3] bg-neutral-200 relative overflow-hidden grayscale contrast-125">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="font-mono text-xs text-gray-500">IEEE SoC 2025 Highlights</span>
                                    </div>
                                </div>
                                <p className="text-[10px] font-sans mt-1 p-1 leading-tight text-gray-600 border-t border-gray-300 pt-1">
                                    Fig 1.1: Participants collaborating during the final sprint phase of Summer of Code.
                                </p>
                            </div>
                            {/* "Ad" or Stats */}
                            <div className="border-2 border-black p-4 text-center">
                                <h4 className="font-black text-4xl mb-0 font-sans">50+</h4>
                                <p className="text-xs uppercase tracking-widest border-t border-black pt-1 mt-1">Projects Shipped</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ARTICLES GRID (COLUMNAR LAYOUT) */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {events.map((event, i) => {
                        return (
                            <div
                                key={event.id}
                                className="break-inside-avoid mb-8 p-6 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-200"
                            >
                                {/* Decorative "Tape" or "Corner" */}
                                <div className="absolute top-0 right-0 w-8 h-8 bg-black -mr-4 -mt-4 transform rotate-45" />

                                <div className="flex justify-between items-baseline mb-4 border-b-2 border-black pb-2 border-double">
                                    <div className="flex flex-col">
                                        <span className="font-sans text-[0.6rem] font-black uppercase tracking-widest text-gray-600">Issue No. {2025 + i}</span>
                                        <span className="font-mono text-[0.7rem] font-bold uppercase tracking-wider">{event.month}</span>
                                    </div>
                                    <span className="font-sans text-[0.7rem] font-bold text-white bg-black px-1">Pg. {event.id + 1}</span>
                                </div>

                                <h4 className="text-3xl font-black mb-3 leading-[0.9] tracking-tight group-hover:underline decoration-4 decoration-black underline-offset-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                                    {event.title}
                                </h4>

                                {/* Drop cap style content */}
                                <p className="text-sm font-serif leading-6 text-justify text-gray-900 first-letter:text-3xl first-letter:font-black first-letter:float-left first-letter:mr-1 first-letter:mt-[-4px]">
                                    {event.description}
                                </p>

                                {/* Bottom decorative lines */}
                                <div className="mt-4 pt-1 border-t border-black flex items-center justify-center gap-1 opacity-40">
                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* FOOTER */}
                <div className="border-t-[4px] border-black mt-12 pt-4 flex justify-between items-center font-sans text-xs font-bold uppercase tracking-widest">
                    <span>IEEE Computer Society</span>
                    <span>2025 Year In Review</span>
                    <span>Bangalore Section</span>
                </div>

            </div>
        </section>
    )
}
