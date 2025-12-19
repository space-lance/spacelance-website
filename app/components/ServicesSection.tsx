'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const services = [
    {
        id: 'web-dev',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        title: 'Web Architecture',
        outcome: 'SCALABILITY_OPTIMIZED',
        description: 'Custom full-stack solutions built with Next.js. Engineered for sub-second latency, SEO dominance, and high-concurrency handling.',
    },
    {
        id: 'ui-ux',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        title: 'Interface Engineering',
        outcome: 'UX_SYSTEM_DESIGN',
        description: 'User-centered design systems that merge aesthetics with complex functionality. From wireframes to atomic component libraries.',
    },
    {
        id: 'software',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        title: 'SaaS Infrastructure',
        outcome: 'ENTERPRISE_GRADE',
        description: 'Robust backend architecture, microservices, and API development designed for mission-critical reliability and security.',
    },
    {
        id: 'content',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: 'Technical Strategy',
        outcome: 'CONVERSION_FOCUSED',
        description: 'Strategic content and positioning that translates complex technical value into clear, compelling narratives for stakeholders.',
    },
    {
        id: 'motion',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Interaction Design',
        outcome: 'VISUAL_FLUIDITY',
        description: 'High-fidelity motion graphics and micro-interactions that enhance usability without compromising application performance.',
    },
    {
        id: 'brand',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
        ),
        title: 'Brand Systems',
        outcome: 'MARKET_POSITIONING',
        description: 'Comprehensive identity systems designed for digital-first companies. Logos, typography, and guidelines that scale.',
    },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="h-full bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-xl p-8 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-900/80 hover:shadow-2xl hover:shadow-neutral-950/50 flex flex-col">

                {/* Header: Icon & Outcome Tag */}
                <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 bg-neutral-900/50 border border-neutral-800 px-2 py-1 rounded group-hover:text-neutral-400 group-hover:border-neutral-700 transition-colors">
                        {service.outcome}
                    </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-200 mb-3 group-hover:text-white transition-colors">
                    {service.title}
                </h3>

                <p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
                    {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-neutral-500 group-hover:text-white transition-colors duration-300 mt-auto pt-6 border-t border-neutral-800/50">
                    <span className="text-xs font-semibold uppercase tracking-wide">Details</span>
                    <motion.svg
                        className="w-3 h-3"
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
        <section id="services" ref={sectionRef} className="py-32 px-4 md:px-12 lg:px-20 relative overflow-hidden bg-neutral-950">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Section header */}
            <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/80 mb-6 backdrop-blur-sm"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wide">Capabilities</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                >
                    Engineered for <span className="text-neutral-500">Growth</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto"
                >
                    Full-spectrum digital architecture designed to transform complex requirements into
                    market-leading products. Precision, performance, and scalability.
                </motion.p>
            </div>

            {/* Services grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mt-20 relative z-10"
            >
                <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800">
                    <button className="px-8 py-3 rounded-full bg-neutral-950 text-white font-medium hover:bg-neutral-900 transition-colors flex items-center gap-3">
                        View Full Tech Stack
                        <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </motion.div>
        </section>
    )
}