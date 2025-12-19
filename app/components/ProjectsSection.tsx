'use client'
import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'

interface Project {
    id: string
    title: string
    category: string
    description: string
    techStack: string[]
    gradient: string
    image: string
}

const projects: Project[] = [
    {
        id: 'fintech-app',
        title: 'Nova Finance',
        category: 'Fintech Platform',
        description: 'A next-generation banking experience with real-time analytics, AI-powered insights, and seamless transactions.',
        techStack: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
        gradient: 'from-blue-600 via-indigo-600 to-violet-600',
        image: '/projects/fintech.jpg',
    },
    {
        id: 'ecommerce',
        title: 'Luxe Market',
        category: 'E-Commerce',
        description: 'Premium e-commerce platform with immersive product experiences and streamlined checkout flow.',
        techStack: ['React', 'Node.js', 'Stripe', 'MongoDB'],
        gradient: 'from-amber-500 via-orange-500 to-rose-500',
        image: '/projects/ecommerce.jpg',
    },
    {
        id: 'saas-dashboard',
        title: 'Metric Hub',
        category: 'SaaS Dashboard',
        description: 'Enterprise analytics dashboard with real-time data visualization and custom reporting tools.',
        techStack: ['Vue.js', 'D3.js', 'Python', 'AWS'],
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        image: '/projects/dashboard.jpg',
    },
    {
        id: 'healthcare',
        title: 'MedConnect',
        category: 'Healthcare App',
        description: 'Patient-centric healthcare platform connecting providers and patients with secure telemedicine.',
        techStack: ['React Native', 'Firebase', 'WebRTC', 'HIPAA'],
        gradient: 'from-rose-500 via-pink-500 to-purple-500',
        image: '/projects/healthcare.jpg',
    },
    {
        id: 'ai-tool',
        title: 'Synth AI',
        category: 'AI Platform',
        description: 'Intelligent content generation platform leveraging advanced LLMs for creative workflows.',
        techStack: ['Python', 'OpenAI', 'FastAPI', 'Redis'],
        gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
        image: '/projects/ai.jpg',
    },
    {
        id: 'real-estate',
        title: 'PropView',
        category: 'Real Estate',
        description: 'Immersive property showcase with 3D virtual tours and intelligent property matching.',
        techStack: ['Three.js', 'Next.js', 'Prisma', 'Vercel'],
        gradient: 'from-slate-500 via-gray-500 to-zinc-500',
        image: '/projects/realestate.jpg',
    },
]

function ProjectCard({ project, index, isLarge = false }: { project: Project; index: number; isLarge?: boolean }) {
    const [isHovered, setIsHovered] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer ${isLarge ? 'md:col-span-2 min-h-[400px]' : 'min-h-80'}`}
        >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-80`} />

            {/* Animated mesh pattern */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                         radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                    }}
                />
            </div>

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.15]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }} />

            {/* Content container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top section */}
                <div className="flex justify-between items-start">
                    <motion.div
                        animate={{ y: isHovered ? -5 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/20">
                            {project.category}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.div>
                </div>

                {/* Bottom section */}
                <div>
                    <motion.h3
                        animate={{ y: isHovered ? -10 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-2"
                    >
                        {project.title}
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-white/80 text-sm md:text-base mb-4 max-w-md leading-relaxed"
                    >
                        {project.description}
                    </motion.p>

                    {/* Tech stack tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="flex flex-wrap gap-2"
                    >
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/90 text-xs font-medium border border-white/10"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Hover overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/20"
            />

            {/* Border glow on hover */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-3xl border-2 border-white/30"
            />
        </motion.div>
    )
}

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section ref={sectionRef} className="py-32 px-4 md:px-12 lg:px-20 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#262626] bg-[#141414] mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm text-neutral-400">Selected Work</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6"
                >
                    Projects That
                    <br />
                    <span className="text-gradient-accent">Define Excellence</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-neutral-400 text-lg leading-relaxed"
                >
                    From concept to launch, each project reflects our commitment to
                    crafting digital experiences that drive real business results.
                </motion.p>
            </div>

            {/* Projects grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard project={projects[0]} index={0} isLarge />
                <ProjectCard project={projects[1]} index={1} />
                <ProjectCard project={projects[2]} index={2} />
                <ProjectCard project={projects[3]} index={3} />
                <ProjectCard project={projects[4]} index={4} />
                <ProjectCard project={projects[5]} index={5} isLarge />
            </div>

            {/* View all CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center mt-16"
            >
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary px-8 py-4 rounded-full font-semibold text-white inline-flex items-center gap-2 relative z-10"
                >
                    <span className="relative z-10">View All Projects</span>
                    <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </motion.button>
            </motion.div>
        </section>
    )
}
