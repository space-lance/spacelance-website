'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Marquee from "react-fast-marquee"

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'CEO',
        company: 'TechFlow',
        text: 'SpaceLance transformed our entire digital presence. The attention to detail and commitment to quality exceeded every expectation. Our conversion rates increased by 340%.',
        rating: 5,
        avatar: 'SC',
    },
    {
        name: 'Marcus Johnson',
        role: 'Founder',
        company: 'Elevate Studios',
        text: 'Working with SpaceLance was a game-changer. They don\'t just build products—they craft experiences that users genuinely love. Highly recommended.',
        rating: 5,
        avatar: 'MJ',
    },
    {
        name: 'Elena Rodriguez',
        role: 'Product Director',
        company: 'Nexus Labs',
        text: 'The team\'s technical expertise combined with their design sensibility is rare. They delivered a platform that our users can\'t stop raving about.',
        rating: 5,
        avatar: 'ER',
    },
    {
        name: 'David Park',
        role: 'CTO',
        company: 'Quantum AI',
        text: 'From day one, SpaceLance understood our vision. The final product was not only beautiful but incredibly performant. A true partnership.',
        rating: 5,
        avatar: 'DP',
    },
    {
        name: 'Aisha Patel',
        role: 'Head of Digital',
        company: 'GlobalReach',
        text: 'We\'ve worked with many agencies, but SpaceLance stands apart. Their process is seamless, communication is excellent, and results speak for themselves.',
        rating: 5,
        avatar: 'AP',
    },
    {
        name: 'James Mitchell',
        role: 'Founder & CEO',
        company: 'StartScale',
        text: 'SpaceLance helped us launch our MVP in record time without sacrificing quality. They\'re now our go-to partner for all digital initiatives.',
        rating: 5,
        avatar: 'JM',
    },
]

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-neutral-700'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="w-[350px] sm:w-[400px] mx-3 group">
            <div className="h-full bg-[#141414] border border-[#262626] rounded-3xl p-8 transition-all duration-500 hover:border-[#404040] hover:bg-[#1a1a1a] relative overflow-hidden">
                {/* Subtle gradient on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br from-indigo-500/10 to-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                {/* Quote icon */}
                <div className="mb-6">
                    <svg className="w-10 h-10 text-indigo-500/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                </div>

                {/* Testimonial text */}
                <p className="text-neutral-300 text-base leading-relaxed mb-8 relative z-10">
                    &quot;{testimonial.text}&quot;
                </p>

                {/* Rating */}
                <div className="mb-6">
                    <StarRating rating={testimonial.rating} />
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-[#404040] to-transparent mb-6" />

                {/* Author info */}
                <div className="flex items-center gap-4 relative z-10">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                        {testimonial.avatar}
                    </div>

                    <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-neutral-500">
                            {testimonial.role} at <span className="text-neutral-400">{testimonial.company}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center mb-20 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#262626] bg-[#141414] mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-sm text-neutral-400">Client Testimonials</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6"
                >
                    Trusted by
                    <br />
                    <span className="text-gradient-accent">Industry Leaders</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-neutral-400 text-lg leading-relaxed"
                >
                    Don&apos;t just take our word for it. Here&apos;s what our partners
                    say about working with us.
                </motion.p>
            </div>

            {/* Stats bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-4xl mx-auto mb-16 px-4"
            >
                <div className="glass rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <p className="text-3xl md:text-4xl font-bold text-gradient-accent">150+</p>
                        <p className="text-sm text-neutral-500 mt-1">Projects Delivered</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl md:text-4xl font-bold text-gradient-accent">98%</p>
                        <p className="text-sm text-neutral-500 mt-1">Client Satisfaction</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl md:text-4xl font-bold text-gradient-accent">4.9</p>
                        <p className="text-sm text-neutral-500 mt-1">Average Rating</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl md:text-4xl font-bold text-gradient-accent">5+</p>
                        <p className="text-sm text-neutral-500 mt-1">Years Experience</p>
                    </div>
                </div>
            </motion.div>

            {/* Testimonials marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col gap-6 marquee-mask"
            >
                <Marquee direction="right" speed={30} pauseOnHover>
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
                    ))}
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <TestimonialCard key={`row1-dup-${index}`} testimonial={testimonial} />
                    ))}
                </Marquee>

                <Marquee direction="left" speed={30} pauseOnHover>
                    {testimonials.slice(3).map((testimonial, index) => (
                        <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
                    ))}
                    {testimonials.slice(3).map((testimonial, index) => (
                        <TestimonialCard key={`row2-dup-${index}`} testimonial={testimonial} />
                    ))}
                </Marquee>
            </motion.div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mt-16 px-4"
            >
                <p className="text-neutral-500 mb-4">Ready to join our success stories?</p>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary px-8 py-4 rounded-full font-semibold text-white inline-flex items-center gap-2 relative z-10"
                >
                    <span className="relative z-10">Start Your Project</span>
                    <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </motion.button>
            </motion.div>
        </section>
    )
}
