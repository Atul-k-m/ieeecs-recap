import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Cover from './components/Cover'
import NewspaperEvents from './components/NewspaperEvents'
import MissionVision from './components/MissionVision'
import TeamPage from './components/TeamPage'
import Finale from './components/Finale'
import SidebarNav from './components/SidebarNav'

// Event data
const events = [
    { id: 1, month: 'NOV 2024', title: 'CODECON', description: 'The ultimate coding conference brought together 500+ participants for 24 hours of intense programming. Keynote speakers from Google and Microsoft kicked off the event.', size: 'large' as const },
    { id: 2, month: 'DEC 2024', title: 'HACK THE HALLS', description: 'Our annual holiday hackathon features festive themes and giving back to the community through tech solutions.', size: 'small' as const },
    { id: 3, month: 'JAN 2025', title: 'IEEE INTERNSHIP DRIVE', description: 'Connecting students with top tier tech companies. Over 50 students placed in the first week alone.', size: 'tall' as const },
    { id: 4, month: 'FEB 2025', title: 'PROJECT OF MONTH', description: 'Showcasing the "Smart Campus" initiative built by second year students using IoT sensors.', size: 'small' as const },
    { id: 5, month: 'MAR 2025', title: 'COMPSIF', description: 'The Comprehensive Skills Framework workshop series covered React, Node.js, and Cloud Computing basics.', size: 'wide' as const },
    { id: 6, month: 'APR 2025', title: 'STARTUP SPRINT', description: 'From idea to MVP in 48 hours. The winning team "AgriTech" secured seed funding.', size: 'small' as const },
    { id: 7, month: 'MAY 2025', title: 'IEEE STEMSPIRE', description: 'Outreach program to local schools to inspire the next generation of engineers.', size: 'large' as const },
    { id: 8, month: 'JUN 2025', title: 'WoP WORKSHOP', description: 'Workshop on Programming fundamentals for freshmen, setting the foundation for their journey.', size: 'small' as const },
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
    { role: 'PR ASSOCIATE', name: 'KEERTHI', image: '/Photos Members/keerthi.jpg' },
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
            <Cover />

            {/* EVENTS - Authentic Newspaper Style */}
            <NewspaperEvents events={events} />

            {/* MISSION / VISION */}
            <MissionVision />

            {/* TEAM */}
            <TeamPage team={team} />

            {/* FINALE */}
            <Finale />
        </div>
    )
}
