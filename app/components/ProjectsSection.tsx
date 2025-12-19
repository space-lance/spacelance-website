'use client'
import { motion } from 'motion/react'
import { useState, useRef } from 'react'

interface Project {
    id: string
    hasVideo: boolean
}

const projects: Project[] = [
    { id: 'web-dev', hasVideo: true },
    { id: 'ui-ux', hasVideo: false },
    { id: 'content', hasVideo: false },
    { id: 'software', hasVideo: false },
    { id: 'vfx', hasVideo: false },
]

function ProjectCard({
    project,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    videoRef,
    className
}: {
    project: Project
    isHovered: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
    videoRef?: React.RefObject<HTMLVideoElement | null>
    className?: string
}) {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`border border-neutral-400 rounded-3xl px-3 py-3 flex flex-col justify-between overflow-hidden relative pb-4 ${project.hasVideo ? 'bg-[url("/project_thumb.png")] bg-cover bg-center' : ''} ${className}`}
        >
            {project.hasVideo && (
                <motion.video
                    loop
                    muted
                    ref={videoRef}
                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='left-0 absolute w-full h-full top-0 object-cover'
                    src="/project-vid.mp4"
                />
            )}

            <motion.div
                animate={isHovered ? { y: '-3rem', opacity: 0 } : { y: 0, opacity: 100 }}
                transition={{ duration: 0.5 }}
                className='h-12 w-12 border border-neutral-400 rounded-full bg-neutral-700 relative z-10'
            />

            <motion.div
                animate={isHovered ? { y: '4rem', opacity: 0 } : { y: 0, opacity: 100 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col mx-2 gap-2 relative z-10'
            >
                <p className='font-semibold text-lg'>Project Name</p>
                <p className='text-sm text-pretty text-neutral-400'>
                    Innovative digital solution delivering exceptional user experience and measurable business results through thoughtful design and engineering.
                </p>
            </motion.div>
        </div>
    )
}

export default function ProjectsSection() {
    const [hoverProject, setHoverProject] = useState('')
    const videoRef = useRef<HTMLVideoElement>(null)

    const handleVideoHover = () => {
        setHoverProject('web-dev')
        const v = videoRef.current
        if (!v) return
        v.currentTime = 0
        v.play()
    }

    const handleVideoLeave = () => {
        setHoverProject('')
        videoRef.current?.pause()
    }

    return (
        <section className='min-h-screen px-4 md:px-12 lg:px-20 flex flex-col py-24'>
            <h2 className='text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-bold'>Our Projects</h2>
            <p className='text-neutral-400 w-full md:w-8/12 lg:w-6/12 mt-4 text-sm md:text-base'>
                From concept to launch, these projects reflect how we turn ideas into reliable, production-ready digital products
                that drive real business value.
            </p>

            <div className='mt-12 flex flex-col lg:flex-row gap-2 min-h-[600px]'>
                {/* Left column */}
                <div className='w-full lg:w-5/12 flex flex-col gap-2'>
                    <ProjectCard
                        project={projects[0]}
                        isHovered={hoverProject === 'web-dev'}
                        onMouseEnter={handleVideoHover}
                        onMouseLeave={handleVideoLeave}
                        videoRef={videoRef}
                        className='h-[300px] lg:h-[60%]'
                    />
                    <ProjectCard
                        project={projects[1]}
                        isHovered={hoverProject === 'ui-ux'}
                        onMouseEnter={() => setHoverProject('ui-ux')}
                        onMouseLeave={() => setHoverProject('')}
                        className='h-[200px] lg:h-[40%]'
                    />
                </div>

                {/* Right grid */}
                <div className='w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <ProjectCard
                        project={projects[2]}
                        isHovered={hoverProject === 'content'}
                        onMouseEnter={() => setHoverProject('content')}
                        onMouseLeave={() => setHoverProject('')}
                        className='col-span-1 md:col-span-2 min-h-[250px]'
                    />
                    <ProjectCard
                        project={projects[3]}
                        isHovered={hoverProject === 'software'}
                        onMouseEnter={() => setHoverProject('software')}
                        onMouseLeave={() => setHoverProject('')}
                        className='col-span-1 min-h-[200px]'
                    />
                    <ProjectCard
                        project={projects[4]}
                        isHovered={hoverProject === 'vfx'}
                        onMouseEnter={() => setHoverProject('vfx')}
                        onMouseLeave={() => setHoverProject('')}
                        className='col-span-1 min-h-[200px]'
                    />
                </div>
            </div>
        </section>
    )
}
