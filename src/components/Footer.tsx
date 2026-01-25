"use client";

import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 md:px-20 pb-12 relative overflow-hidden">
            <div className="border-t border-white/10 pt-12">
                <div className="flex flex-col md:flex-row justify-between items-end">
                    <p className="text-sm text-neutral-500 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Kopi Ajoe Indonesia. <br className="hidden md:block" /> All rights reserved.
                    </p>
                    <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white/10 select-none pointer-events-none">
                        KOPI AJOE
                    </h1>
                </div>
            </div>
        </footer>
    );
}
