'use client'
import Marquee from "react-fast-marquee"

const testimonials = [
    { name: 'Ankit Mishra', text: 'Outstanding work! The team delivered beyond our expectations, creating a digital product that truly resonates with our users.' },
    { name: 'Sarah Johnson', text: 'Professional, reliable, and creative. They transformed our vision into a polished, user-friendly platform.' },
    { name: 'Michael Chen', text: 'Exceptional attention to detail and commitment to quality. The results speak for themselves - our engagement is up 200%.' },
]

function TestimonialCard({ name, text }: { name: string; text: string }) {
    return (
        <div className='bg-neutral-800 w-[90vw] sm:w-[60vw] md:w-[40vw] lg:w-[28vw] px-6 rounded-2xl py-6 mx-3 hover:bg-neutral-750 transition-colors'>
            <div className='h-12 w-12 border-2 border-neutral-600 bg-neutral-700 rounded-full -mt-10 shadow-lg' />
            <p className='text-neutral-300 mt-4 text-pretty leading-relaxed'>
                {text}
            </p>
            <div className='w-full h-px bg-neutral-600 my-4' />
            <div className='flex justify-between items-center'>
                <p className='font-semibold text-neutral-100'>{name}</p>
                <span className='flex gap-1'>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className='h-4 w-4 bg-yellow-400 rounded-full' />
                    ))}
                </span>
            </div>
        </div>
    )
}

export default function TestimonialsSection() {
    return (
        <section className='min-h-screen px-4 md:px-12 flex flex-col py-24'>
            <h2 className='text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-bold text-center'>
                Built on Client Trust
            </h2>
            <p className='text-center text-neutral-400 w-full md:w-8/12 lg:w-6/12 mx-auto mt-4 text-sm md:text-base'>
                Don't just take our word for it. Hear from the clients who've partnered with us to create
                exceptional digital experiences that drive real business outcomes.
            </p>

            <div className='mt-16 flex flex-col mask-[linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%)]'>
                <Marquee direction='right' className='py-6' speed={40}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`right-${index}`} {...testimonial} />
                    ))}
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`right-dup-${index}`} {...testimonial} />
                    ))}
                </Marquee>

                <Marquee className='py-6' speed={40}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`left-${index}`} {...testimonial} />
                    ))}
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`left-dup-${index}`} {...testimonial} />
                    ))}
                </Marquee>
            </div>
        </section>
    )
}
