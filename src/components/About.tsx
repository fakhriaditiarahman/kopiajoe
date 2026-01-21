"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const content = "Di Kopi Ajoe, kopi lebih dari sekadar minuman—ia adalah sebuah ritual. Lahir dari seleksi biji terbaik dan disangrai dengan presisi penuh jiwa, setiap butir menceritakan kisah tentang dedikasi, keanggunan, dan pencarian tanpa henti akan kesempurnaan rasa.";

const Word = ({ children, range, progress }: { children: string; range: [number, number]; progress: MotionValue<number> }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <motion.span style={{ opacity }} className="mr-3 relative">
            {children}
        </motion.span>
    );
};

export default function About() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"], // Start fading in when top of section hits bottom of screen
    });

    const words = content.split(" ");

    return (
        <section ref={container} className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-20 py-24">
            <div className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] flex flex-wrap justify-center text-center">
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length);
                    return (
                        <Word key={i} range={[start, end]} progress={scrollYProgress}>
                            {word}
                        </Word>
                    );
                })}
            </div>
        </section>
    );
}
