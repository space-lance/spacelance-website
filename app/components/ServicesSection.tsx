'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const services = [
    {
        id: 'web-dev',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        title: 'Web Development',
        outcome: 'Launch scalable, high-performance web applications',
        description: 'Custom web solutions built with Next.js, React, and modern frameworks. Optimized for speed, SEO, and conversion.',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        id: 'ui-ux',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        title: 'UI/UX Design',
        outcome: 'Create intuitive experiences that users love',
        description: 'User-centered design that combines aesthetics with functionality. From wireframes to polished interfaces.',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        id: 'software',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        title: 'Software Systems',
        outcome: 'Build robust enterprise-grade solutions',
        description: 'Scalable architecture, clean code, and comprehensive testing for mission-critical applications.',
        gradient: 'from-emerald-500 to-teal-500',
    },
    {
        id: 'content',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        ),
        title: 'Content Strategy',
        outcome: 'Craft narratives that convert and engage',
        description: 'Strategic content that resonates with your audience. Copywriting, brand voice, and digital assets.',
        gradient: 'from-amber-500 to-orange-500',
    },
    {
        id: 'motion',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Motion & VFX',
        outcome: 'Bring your vision to life with animation',
        description: 'Dynamic motion graphics and visual effects. Professional video production and post-production.',
        gradient: 'from-rose-500 to-red-500',
    },
    {
        id: 'brand',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'Brand Identity',
        outcome: 'Stand out with distinctive brand presence',
        description: 'Comprehensive branding from logo design to brand guidelines. Create lasting impressions.',
        gradient: 'from-indigo-500 to-violet-500',
    },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="absolute -inset-0.5 bg-linear-to-r opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-3xl"
                style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
            />
            <div className="relative h-full bg-[#141414] border border-[#262626] rounded-3xl p-8 transition-all duration-500 group-hover:border-[#404040] group-hover:bg-[#1a1a1a] overflow-hidden">
                {/* Gradient glow effect on hover */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.gradient} p-px mb-6`}>
                    <div className="w-full h-full rounded-2xl bg-[#141414] group-hover:bg-[#1a1a1a] flex items-center justify-center transition-colors duration-300">
                        <span className="text-white">{service.icon}</span>
                    </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                </h3>
                <p className={`text-sm font-medium bg-linear-to-r ${service.gradient} bg-clip-text text-transparent mb-3`}>
                    {service.outcome}
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                    {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center gap-2 text-neutral-500 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                </div>
            </div>
        </motion.div>
    )
}

export default function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section ref={sectionRef} className="py-32 px-4 md:px-12 lg:px-20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#262626] bg-[#141414] mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-sm text-neutral-400">Our Services</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6"
                >
                    Everything You Need to
                    <br />
                    <span className="text-gradient-accent">Launch & Scale</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-neutral-400 text-lg leading-relaxed"
                >
                    Full-spectrum digital services designed to transform ideas into
                    market-leading products. One team, unified vision, exceptional results.
                </motion.p>
            </div>

            {/* Services grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center mt-16"
            >
                <p className="text-neutral-500 mb-4">Need something custom?</p>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary px-8 py-4 rounded-full font-semibold text-neutral-200 inline-flex items-center gap-2"
                >
                    Let&apos;s discuss your project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </motion.button>
            </motion.div>
        </section>
    )
}
