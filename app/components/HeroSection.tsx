'use client'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const words = ['Digital Ecosystems', 'SaaS Platforms', 'Fintech Solutions', 'Enterprise Systems']

function KineticText() {
    return (
        <span className="inline-block min-w-[320px] text-left relative h-[1.2em]">
            {words.map((word, wordIndex) => (
                <motion.span
                    key={wordIndex}
                    className="absolute left-0 top-0 w-full"
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        y: [20, 0, 0, -20],
                        filter: ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(10px)'],
                    }}
                    transition={{
                        duration: 4,
                        delay: wordIndex * 3.5,
                        repeat: Infinity,
                        repeatDelay: (words.length - 1) * 3.5,
                        times: [0, 0.1, 0.9, 1],
                    }}
                >
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-neutral-200 to-neutral-500 whitespace-nowrap">
                        {word}
                    </span>
                </motion.span>
            ))}
            {/* Invisible duplicate to force container width/height if needed, 
                though strict dimensions on parent usually work better */}
            <span className="invisible" aria-hidden="true">Digital Ecosystems</span>
        </span>
    )
}

function SmokeLight({ className, delay = 0 }: { className?: string; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
            }}
            transition={{
                duration: 10,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`}
            style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)',
            }}
        />
    )
}

function GridPattern() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255, 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                }}
            />
        </div>
    )
}

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 100])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section
            ref={containerRef}
            className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-neutral-950 selection:bg-white/20"
        >
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black pointer-events-none" />
            <GridPattern />

            {/* Subtle Lighting Background */}
            <SmokeLight className="top-[-10%] left-[20%] w-[500px] h-[500px]" delay={0} />
            <SmokeLight className="bottom-[-10%] right-[20%] w-[600px] h-[600px]" delay={2} />

            {/* Main Content */}
            <motion.div
                style={{ y, opacity }}
                className="mx-auto text-center z-10 max-w-5xl px-4 relative flex flex-col items-center"
            >
                {/* Announcement Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-neutral-400"></span>
                    <span className="text-xs font-medium text-neutral-400 uppercase tracking-wide">v2.0 is now live</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8"
                >
                    Build scalable
                    <br />
                    {/* Added explicit height block to prevent overlap during animation */}
                    <span className="block h-[1.3em] overflow-visible w-full">
                        <KineticText />
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
                >
                    We engineer robust digital architectures for forward-thinking enterprises.
                    Performance, security, and scalability included by default.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-neutral-200 transition-colors"
                    >
                        Schedule Consultation
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 rounded-full border border-neutral-700 text-neutral-300 font-semibold text-lg flex items-center justify-center gap-3 transition-colors"
                    >
                        <span>View Documentation</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 pt-10 border-t border-neutral-800 w-full max-w-4xl"
                >
                    <p className="text-xs text-neutral-600 uppercase tracking-widest mb-8 font-semibold">Powering next-gen teams</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {['ACME Corp', 'Quantum', 'Echo', 'Nebula', 'Vertex'].map((brand) => (
                            <span key={brand} className="text-xl md:text-2xl font-bold text-white font-serif">{brand}</span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-neutral-950 to-transparent z-10 pointer-events-none" />
        </section>
    )
}