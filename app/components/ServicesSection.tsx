'use client'
import { motion } from 'motion/react'
import { useState } from 'react'

const services = [
    { id: 'web-dev', number: '01', title: 'Web Development', description: 'Custom web solutions built with modern frameworks, optimized for performance and scalability. From responsive designs to complex web applications.' },
    { id: 'ui-ux', number: '02', title: 'UI & UX Design', description: 'User-centered design solutions that combine aesthetics with functionality. Creating intuitive interfaces that enhance user experience and engagement.' },
    { id: 'software', number: '03', title: 'Software Systems', description: 'Enterprise-grade software solutions tailored to your business needs. Robust architecture, clean code, and comprehensive testing.' },
    { id: 'content-creation', number: '04', title: 'Content Creation', description: 'Strategic content that resonates with your audience. From copywriting to digital assets, we craft compelling narratives for your brand.' },
    { id: 'vfx', number: '05', title: 'Motion & VFX', description: 'Dynamic motion graphics and visual effects that bring your vision to life. Professional video production and post-production services.' },
]

export default function ServicesSection() {
    const [hoveredCard, setHoveredCard] = useState('ui-ux')

    return (
        <section className='min-h-screen flex flex-col px-4 md:px-12 lg:px-20 py-24'>
            <h2 className='text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-semibold'>
                Providing Creative Services<br />Tailored for your Business
            </h2>
            <p className='text-neutral-400 w-full md:w-8/12 lg:w-6/12 mt-4 text-sm md:text-base'>
                We deliver comprehensive digital services designed to elevate your brand and drive measurable results.
                Each service is crafted with precision and adapted to meet your unique business objectives.
            </p>

            <div className='flex flex-col lg:flex-row justify-between items-stretch mt-12 lg:mt-16 gap-2 lg:gap-1'>
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        onMouseEnter={() => setHoveredCard(service.id)}
                        animate={
                            hoveredCard === service.id
                                ? {
                                    width: '45%',
                                    padding: '1.5rem 1.5rem 0 1.5rem',
                                    backgroundColor: '#262626'
                                }
                                : {
                                    width: '12%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#bebebe'
                                }
                        }
                        transition={{ duration: 0.6 }}
                        className='min-h-[360px] lg:h-[400px] flex flex-col rounded-2xl relative pt-6 overflow-hidden'
                    >
                        <motion.p
                            animate={
                                hoveredCard === service.id
                                    ? {
                                        position: 'static',
                                        display: 'flex',
                                        backgroundColor: '#f5f5f5',
                                        color: '#000000',
                                        fontSize: '28px'
                                    }
                                    : {
                                        position: 'absolute',
                                        top: '1.5rem',
                                        fontSize: '28px'
                                    }
                            }
                            className='text-black flex justify-center items-center w-14 h-14 text-3xl rounded-full font-extrabold text-center'
                        >
                            {service.number}
                        </motion.p>

                        <motion.p
                            animate={
                                hoveredCard === service.id
                                    ? {
                                        fontSize: '34px',
                                        fontWeight: 700,
                                        width: 'fit-content',
                                        marginTop: '0.75rem',
                                        color: '#ffffff',
                                        rotate: 0
                                    }
                                    : {
                                        rotate: '90deg',
                                        color: '#000000',
                                        marginTop: '2.5rem',
                                        width: '15rem',
                                        fontSize: '28px',
                                        fontWeight: 500
                                    }
                            }
                            transition={{ duration: 0.5 }}
                            className='origin-center mr-1'
                        >
                            {service.title}
                        </motion.p>

                        <motion.span
                            animate={
                                hoveredCard === service.id
                                    ? { width: '100%' }
                                    : { width: '0', overflow: 'hidden', display: 'none' }
                            }
                            transition={{ duration: 0.1 }}
                        >
                            <p className='text-base text-neutral-400 text-pretty mt-6 pr-12'>
                                {service.description}
                            </p>
                            <button className='absolute bg-green-400 bottom-0 right-0 px-6 py-3 rounded-tl-2xl text-green-800 font-bold text-lg cursor-pointer hover:bg-green-500 transition-colors'>
                                Discover More
                            </button>
                        </motion.span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
