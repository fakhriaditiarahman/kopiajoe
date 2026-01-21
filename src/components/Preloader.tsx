"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 500); // Small delay at 100%
                    return 100;
                }
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 150);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[100] bg-[#141414] text-white flex items-center justify-center pointer-events-none"
                >
                    <div className="flex flex-col items-center">
                        <div className="text-8xl md:text-[12rem] font-bold tracking-tighter">
                            {progress}%
                        </div>
                        <div className="uppercase tracking-widest mt-4 text-neutral-500">
                            Brewing Experience
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
