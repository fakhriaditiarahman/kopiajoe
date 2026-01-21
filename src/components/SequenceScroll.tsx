"use client";

import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const frameCount = 240;

export default function SequenceScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

    // Text Opacity Transforms
    const opacityHero = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const opacitySlogan1 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);
    const opacitySlogan2 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);
    const opacityCTA = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);

    useEffect(() => {
        const loadImages = async () => {
            const promises = [];
            for (let i = 1; i <= frameCount; i++) {
                promises.push(
                    new Promise<HTMLImageElement>((resolve) => {
                        const img = new Image();
                        img.src = `/sequence/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
                        img.onload = () => resolve(img);
                        img.onerror = () => resolve(img); // Handle error gracefully
                    })
                );
            }
            const loadedImages = await Promise.all(promises);
            setImages(loadedImages);
            setLoaded(true);
        };
        loadImages();

        // Handle Resize
        const handleResize = () => {
            setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Use current canvas size state or ref
        // We rely on effects updating width/height logic or just setting it here
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const img = images[index - 1] || images[0];
        if (img) {
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (loaded) render(Math.round(latest));
    });

    // Initial render
    useEffect(() => {
        if (loaded) render(1);
    }, [loaded, canvasSize]); // canvasSize dependency to re-render on resize

    return (
        <div ref={containerRef} className="h-[400vh] relative bg-black">
            {!loaded && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black text-white font-outfit text-2xl animate-pulse">
                    BREWING...
                </div>
            )}

            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="w-full h-full object-cover" />

                {/* Overlay Container */}
                <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center w-full h-full text-white">

                    {/* 0% - Hero */}
                    <motion.div style={{ opacity: opacityHero }} className="absolute text-center drop-shadow-lg">
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase text-white">Kopi Ajoe</h1>
                        <p className="text-xl md:text-2xl mt-4 font-light tracking-widest uppercase text-white">The Essence of Dark Roast</p>
                    </motion.div>

                    {/* 30% - Slogan Left */}
                    <motion.div style={{ opacity: opacitySlogan1 }} className="absolute left-10 md:left-20 max-w-lg">
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Taste the <br /> Tradition.</h2>
                    </motion.div>

                    {/* 60% - Slogan Right */}
                    <motion.div style={{ opacity: opacitySlogan2 }} className="absolute right-10 md:right-20 text-right max-w-lg">
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Brewed for <br /> Perfection.</h2>
                    </motion.div>

                    {/* 90% - CTA */}
                    <motion.div style={{ opacity: opacityCTA }} className="absolute text-center pointer-events-auto">
                        <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to Sip?</h2>
                        <button className="px-8 py-4 bg-white text-black text-lg font-bold uppercase tracking-wider rounded-full hover:scale-105 transition-transform duration-300">
                            Order Now
                        </button>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
