"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="h-[80vh] relative bg-white text-black flex items-center justify-center overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-white animate-pulse" />

            <div className="relative z-10 text-center px-6">
                <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 text-black">
                    YOUR DAILY <br /> RITUAL
                </h2>

                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-12 py-6 rounded-full bg-black text-white text-xl font-medium uppercase tracking-wider overflow-hidden"
                    >
                        <span className="relative z-10 group-hover:text-black transition-colors duration-300">Shop Now</span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
