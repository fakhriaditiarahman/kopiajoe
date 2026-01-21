"use client";

import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-20 border-t border-white/10 relative overflow-hidden">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">

                {/* Brand Column */}
                <div className="md:col-span-5 flex flex-col justify-between">
                    <div>
                        <Image
                            src="/images/logo.png"
                            alt="Kopi Ajoe Logo"
                            width={180}
                            height={60}
                            className="object-contain mb-8"
                        />
                        <p className="text-neutral-400 text-lg max-w-sm leading-relaxed">
                            Elevating the coffee ritual since 1980. Sourced with integrity, roasted with passion, brewed for perfection.
                        </p>
                    </div>

                    <div className="mt-12">
                        <h4 className="text-sm uppercase tracking-widest text-white/50 mb-4">Subscribe to the brew</h4>
                        <div className="flex gap-4 border-b border-white/20 pb-4 max-w-md group focus-within:border-white transition-colors">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-transparent border-none outline-none w-full text-lg placeholder:text-neutral-600 focus:ring-0"
                            />
                            <button className="text-white hover:text-neutral-300 transition-colors">
                                <ArrowUpRight />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Columns */}
                <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-sm uppercase tracking-widest text-white/50 mb-6 font-medium">Explore</h4>
                        <ul className="space-y-4 text-lg">
                            {['Shop All', 'Subscription', 'Our Story', 'Brew Guide', 'Wholesale'].map(item => (
                                <li key={item}>
                                    <a href="#" className="flex group items-center">
                                        <span className="relative overflow-hidden">
                                            <span className="block transition-transform duration-300 group-hover:-translate-y-full">{item}</span>
                                            <span className="absolute top-0 left-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0">{item}</span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-widest text-white/50 mb-6 font-medium">Connect</h4>
                        <ul className="space-y-4 text-lg">
                            {['Instagram', 'Twitter', 'Facebook', 'LinkedIn'].map(item => (
                                <li key={item}>
                                    <a href="#" className="flex group items-center gap-2 hover:text-neutral-300 transition-colors">
                                        {item}
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-widest text-white/50 mb-6 font-medium">Legal</h4>
                        <ul className="space-y-4 text-sm text-neutral-400">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Big Text */}
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
