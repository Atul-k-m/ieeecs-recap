import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Cover from './components/Cover'
import NewspaperEvents from './components/NewspaperEvents'
import TeamPage from './components/TeamPage'
import Finale from './components/Finale'
import SidebarNav from './components/SidebarNav'
import Socials from './components/Socials'
import SectionSeparator from './components/SectionSeparator'

// Event data
const events = [
    { id: 1, month: 'DEC 2024', title: 'CODECON', description: 'A competitive coding event with a unique comic touch.', size: 'large' as const },
    { id: 2, month: 'JAN 2025', title: 'HACK THE HALLS', description: 'Organized in partnership with ITS, this fun Christmas event served as a bridge for newcomers.', size: 'small' as const },
    { id: 3, month: 'FEB 2025', title: 'STUDENT INTERNSHIP', description: 'A programme run by IEEE CS Bangalore for enthusiastic members to gain real-world experience.', size: 'tall' as const },
    { id: 4, month: 'MAR 2025', title: 'PROJECT OF MONTH', description: 'A month-long guided program designed to help members understand the complete process of building a project.', size: 'small' as const },
    { id: 5, month: 'APR 2025', title: 'COMPSIF', description: 'An international conference conducted under the banner of IEEE STB BMSIT&M, bringing together global experts.', size: 'wide' as const },
    { id: 6, month: 'APR 2025', title: 'STARTUP SPRINT', description: 'A sprint ideathon where participants pitched their unique innovative ideas & projects to a panel of judges.', size: 'small' as const },
    { id: 7, month: 'NOV 2025', title: 'IEEE STEMPIRE', description: 'In collaboration with Rota BMS, this initiative taught coding fundamentals to children.', size: 'large' as const },
    { id: 8, month: 'DEC 2025', title: 'WoP (Winter of Projects)', description: 'An exhibition of exceptional projects developed under the banner of IEEE STB BMSIT&M.', size: 'small' as const },
    { id: 9, month: 'NOV 2025', title: 'REBOOT', description: 'Faculty Hackathon of BMSIT&M, with technical backing of IEEE Computer Society, BMSIT&M', size: 'small' as const },
]

// Updated Team Data with Images
const team = [
    { role: 'CHAIR', name: 'AKHILESH', image: '/Photos Members/akhilesh.jpg' },
    { role: 'VICE CHAIR', name: 'UTKARSH', image: '/Photos Members/utkarsh.jpg' },
    { role: 'SECRETARY', name: 'SAANVI', image: '/Photos Members/saanvi.jpg' },
    { role: 'JOINT SECRETARY', name: 'MEGHANA', image: '/Photos Members/meghana.jpg' },
    { role: 'TREASURER', name: 'BINDU', image: '/Photos Members/bindu.jpg' },
    { role: 'TECH CO-HEAD', name: 'ATUL', image: '/Photos Members/atul.jpg' },
    { role: 'TECH CO-HEAD', name: 'NUMA', image: '/Photos Members/numa.jpg' },
    { role: 'TECH ASSOCIATE', name: 'PRITHWIS', image: '/Photos Members/prtihwis.jpg' },
    { role: 'OPS HEAD', name: 'KAVANA', image: '/Photos Members/kavana.jpg' },
    { role: 'OPS ASSOCIATE', name: 'TEJAS', image: '/Photos Members/tejas.jpg' },
    { role: 'PR ASSOCIATE', name: 'HARSHIT', image: '/Photos Members/harshit1.jpeg' },
    { role: 'PR ASSOCIATE', name: 'SOWARABHI', image: '/Photos Members/sowarabhi.jpg' },
    { role: 'PR ASSOCIATE', name: 'KEERTHI', image: '/Photos Members/keerthi.png' },
]

export default function App() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={containerRef}
            className="min-h-screen w-full overflow-x-hidden bg-white relative"
        >
            {/* Navigation */}
            <SidebarNav />

            {/* Hero */}
            <section id="home">
                <Cover />
            </section>

            {/* EVENTS - Authentic Newspaper Style */}
            <section id="timeline">
                <NewspaperEvents events={events} />
            </section>

            <SectionSeparator />

            {/* SOCIALS */}
            <section id="socials">
                <Socials />
            </section>

            <SectionSeparator />

            {/* TEAM */}
            <section id="team">
                <TeamPage team={team} />
            </section>



            {/* FINALE */}
            <section id="finale">
                <Finale />
            </section>
        </div>
    )
}
