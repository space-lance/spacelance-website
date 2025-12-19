'use client'
import { motion } from 'motion/react'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className='min-h-screen flex flex-col justify-center items-center relative mb-24 py-20'>
            <div className='absolute inset-0 -z-10'>
                <Image
                    className='object-cover'
                    fill
                    src='/hero-background.jpg'
                    alt='hero-background'
                    priority
                />
            </div>

            {/* Floating decorative elements */}
            <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="w-10 h-10 rounded-xl bg-linear-to-b from-neutral-800 to-neutral-500 absolute top-[18%] left-[25%]"
            />
            <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 2.3, ease: 'easeInOut' }}
                className="z-0 w-10 h-10 rounded-xl bg-linear-to-b from-neutral-700 to-neutral-400 absolute left-[30%] top-[72%]"
            />
            <motion.div
                animate={{ y: [-2, 6, -2] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut', delay: 0.2 }}
                className="w-10 h-10 rounded-xl bg-linear-to-b from-neutral-800 to-neutral-500 absolute left-[85%] top-[20%]"
            />
            <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut', delay: 0.4 }}
                className="w-10 h-10 rounded-xl bg-linear-to-b from-neutral-700 to-neutral-400 absolute left-[76%] top-[65%]"
            />
            <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 2.7, ease: 'easeInOut', delay: 0.6 }}
                className="w-10 h-10 rounded-xl bg-linear-to-b from-neutral-800 to-neutral-500 absolute top-[40%] left-[10%]"
            />

            <div className='mx-auto text-center gap-6 flex flex-col z-10 max-w-5xl px-4'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-linear-to-r from-neutral-500 via-neutral-100 to-neutral-500 bg-clip-text'>
                    Precision-crafted digital products<br />for real-world performance
                </h1>
                <p className='text-neutral-400 text-sm md:text-base max-w-3xl mx-auto'>
                    A full-spectrum digital studio delivering design, engineering, motion, and content <br className='hidden md:block' />
                    through a single, controlled production pipeline focused on quality, consistency, and long-term performance.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center mt-4'>
                    <button className='px-6 py-3 bg-neutral-300 text-neutral-800 rounded-full hover:bg-neutral-400 transition-colors font-medium'>
                        Explore Services
                    </button>
                    <button className='px-6 py-3 border border-neutral-400 text-neutral-100 rounded-full hover:bg-neutral-800 transition-colors'>
                        Watch Demo
                    </button>
                </div>
            </div>
        </section>
    )
}
