import React from 'react'

export default function SectionSeparator() {
    return (
        <div className="w-full bg-white flex items-center justify-center py-8 opacity-40">
            <div className="w-full max-w-[200px] flex items-center gap-4">
                <div className="h-[1px] bg-black flex-1" />
                <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-black rotate-45" />
                    <div className="w-1.5 h-1.5 bg-black rotate-45" />
                    <div className="w-1.5 h-1.5 bg-black rotate-45" />
                </div>
                <div className="h-[1px] bg-black flex-1" />
            </div>
        </div>
    )
}
