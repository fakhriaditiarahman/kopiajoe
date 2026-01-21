"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Coffee, Droplets, Mountain, Award } from "lucide-react";
import Image from "next/image";

const items = [
    {
        title: "Single Origin",
        description: "Sourced from the best micro-lots.",
        colSpan: "col-span-12 md:col-span-8",
        image: "/images/single-origin.png",
        icon: <Mountain className="w-10 h-10 mb-4 text-white/80 group-hover:text-white transition-colors relative z-20" />,
    },
    {
        title: "Dark Roast",
        description: "Bold, intense, and unforgettable.",
        colSpan: "col-span-12 md:col-span-4",
        image: "/images/dark-roast.png",
        icon: <Coffee className="w-10 h-10 mb-4 text-white/80 group-hover:text-white transition-colors relative z-20" />,
    },
    {
        title: "Sustainable",
        description: "Ethically farmed and processed.",
        colSpan: "col-span-12 md:col-span-4",
        image: "/images/sustainable.png",
        icon: <Droplets className="w-10 h-10 mb-4 text-white/80 group-hover:text-white transition-colors relative z-20" />,
    },
    {
        title: "Award Winning",
        description: "Recognized by global connoisseurs.",
        colSpan: "col-span-12 md:col-span-8",
        image: "/images/award-winning.png",
        icon: <Award className="w-10 h-10 mb-4 text-white/80 group-hover:text-white transition-colors relative z-20" />,
    },
];

export default function BentoGrid() {
    return (
        <section className="min-h-screen bg-black text-white px-6 md:px-20 py-24 flex flex-col justify-center">
            <div className="mb-16">
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Our Craft</h2>
            </div>

            <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto w-full">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={cn(
                            "group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer",
                            item.colSpan
                        )}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full justify-between p-8 md:p-12">
                            <div>
                                {/* Top Content if any */}
                            </div>
                            <div>
                                {item.icon}
                                <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">{item.title}</h3>
                                <p className="text-neutral-300 text-lg group-hover:text-white transition-colors">{item.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
