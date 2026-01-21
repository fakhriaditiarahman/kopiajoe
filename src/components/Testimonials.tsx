"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    { text: "The most authentic dark roast I've ever tasted. Pure magic.", author: "James Hoffman" },
    { text: "Kopi Ajoe redefines what coffee can be. Smooth, bold, and timeless.", author: "Coffee Monthly" },
    { text: "A sensory journey in every cup. The heritage shines through.", author: "Sarah W." },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="h-screen bg-zinc-950 text-white flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-10 left-10 text-neutral-800">
                <Quote size={120} />
            </div>

            <div className="max-w-5xl px-6 relative z-10 text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-12">
                            "{testimonials[current].text}"
                        </h3>
                        <p className="text-xl md:text-2xl text-neutral-400 uppercase tracking-widest">
                            — {testimonials[current].author}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full transition-colors ${current === i ? 'bg-white' : 'bg-neutral-700'}`}
                    />
                ))}
            </div>
        </section>
    );
}
